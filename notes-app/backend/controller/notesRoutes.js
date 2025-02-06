const express = require("express");
const NotesRouter = express.Router();
const { saveNote, viewNotes,updateNote,deleteNote, addFav, removeFav } = require("../model/notesModel");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const gTTS = require('gtts');
const { v4: uuidv4 } = require('uuid');
// const textToSpeech = require("@google-cloud/text-to-speech");

require("dotenv").config(); // Load environment variables

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// Use memory storage instead of disk storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

async function convertTextToSpeech(text) {
  return new Promise((resolve, reject) => {
      const gtts = new gTTS(text, 'en');
      let id =uuidv4();
      const filePath = `voice-${id}.mp3`; // Temporary file storage

      gtts.save(filePath, async (err) => {
          if (err) {
              return reject(err);
          }

          // Upload generated audio to Cloudinary
          try {
              const result = await cloudinary.uploader.upload(filePath, {
                  resource_type: "video", // Audio files use "video" as resource type
                  folder: "notes_audio",
                  public_id: `audio-${id}`
              });

              resolve(result.secure_url); // Return Cloudinary URL
          } catch (uploadErr) {
              reject(uploadErr);
          }
      });
  });
}

NotesRouter.post("/addnote", upload.single("file"), async (req, res) => {
    try {
            let audiourl="";
            if(req.body.transcript){
                let text=req.body.transcript;
                
                    // const text = req.body.text;
                audiourl = await convertTextToSpeech(text);
                
            }
             // Get the uploaded file buffer
            if(!req.file){
                saveNote(req, res, '',audiourl);
            }
            else{
            // Upload file to Cloudinary
            const fileBuffer = req.file.buffer;
            const uploadStream = cloudinary.uploader.upload_stream(
                { 
                    folder: "notes_uploads", 
                    public_id: `note-${Date.now()}`,
                    resource_type: "auto" 
                },
                async (error, result) => {
                    if (error) {
                        console.error("Cloudinary Upload Error:", error);
                        return res.status(500).json({ error: "File upload failed" });
                    }
    
                    const fileUrl = result.secure_url; // Get Cloudinary file URL
                    
                    saveNote(req, res, fileUrl,audiourl);
                        
                    
                }
            );
    
            uploadStream.end(fileBuffer); 
        }

    } catch (error) {
        console.error("Unexpected Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

NotesRouter.post("/update", async (req, res) => {
    // console.log("hi");
    updateNote(req,res);
});
NotesRouter.post("/delete", async (req, res) => {
    // console.log("hi");
    deleteNote(req,res);
});

NotesRouter.post("/viewNotes", (req, res) => {
    viewNotes(req,res);
});
NotesRouter.post("/addfav", (req, res) => {
    addFav(req,res);
    // res.status(200).send();
});
NotesRouter.post("/removefav", (req, res) => {
    removeFav(req,res);
    // res.status(200).send();
});

module.exports = NotesRouter;
