const mongoose=require("./connectionDatabase");
const notesSchema=new mongoose.Schema({
    username:String,
    title:String,
    text:String,
    photo:String,
    date:String,
    time:String,
    transcript:String,
    audiourl:String,
    fav:Boolean
});
const notesModel=mongoose.model("note",notesSchema);
function saveNote(req,res,fileUrl,audiourl)
{
    let t="AM";
    var d = new Date();
    let h=d.getHours();
    let min=d.getMinutes();
    let { username, title, area, transcript } = req.body;

    if(h>12){
        t="PM";
    }
    let time=h+":"+min+" "+t;
    let date=d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
    let note=new notesModel({
        username:username,
        title:title,
        text:area,
        photo:fileUrl,
        date:date,
        time:time,
        transcript:transcript,
        audiourl:audiourl,
        fav:false
    });
    note.save().then(()=>{
        res.status(200).send("Note Saved");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("Error Occured!");
    })

}
function updateNote(req, res) {
    let { id, title, text } = req.body;  // Extract from req.body.value
    
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const objectId = new mongoose.Types.ObjectId(id); // Convert string to ObjectId

    notesModel.updateOne(
        { _id: objectId },
        { $set: { title, text } }  // Corrected update syntax
    )
    .then(() => {
        return   res.status(200).send();
    })
    .catch((err) => {
        console.log(err);
        return  res.status(500).send();
    });
}

function deleteNote(req,res)
{
    let id=req.body.id;
    id = new mongoose.Types.ObjectId(id);
    notesModel.deleteOne({_id:id}).then((res1)=>{
        return  res.status(200).send();
    })
    .catch((err)=>{
        console.log(err);
        return  res.status(500).send();
    })
    // res.send("200");
}
function viewNotes(req,res)
{
    let username=req.body.username;
    // console.log(req.body);
    notesModel.find({username:username}).then((result)=>{
        // if(result.le)
        // console.log("result======="+result);
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}
function addFav(req,res)
{
    let id=req.body._id;
    id = new mongoose.Types.ObjectId(id);
    // console.log(req.body);
    notesModel.updateOne(
        { _id: id },
        { $set: { fav:true } }  // Corrected update syntax
    ).then((result)=>{
        // if(result.le)
        // console.log(result);
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}
function removeFav(req,res)
{
    let id=req.body._id;
    id = new mongoose.Types.ObjectId(id);
    console.log(id);
    // console.log(req.body);
    notesModel.updateOne(
        { _id: id },
        { $set: { fav:false } }  // Corrected update syntax
    ).then((result)=>{
        // if(result.le)
        // console.log(result);
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}
module.exports ={saveNote,viewNotes,updateNote,deleteNote,addFav,removeFav};