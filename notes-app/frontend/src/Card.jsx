import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import NoteContext from "./NoteContext";
import "./Card.css";

function Card(props) {
  // Get token from cookies
  const [isRecording, setIsRecording] = React.useState(false);
  const { setNotes } = React.useContext(NoteContext);
  const [transcript, setTranscript] = React.useState("");
  const recognitionRef = React.useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    area: "",
    transcript:"",
    file: null,
  });

  const startRecording = () => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }
  
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
  
    recognition.continuous = false; // Stop after speech ends
    recognition.interimResults = false; // Do not return partial results
    recognition.lang = "en-US"; // Set language
  
    recognition.onstart = () => {
      setIsRecording(true);
      setTranscript(""); // Clear previous transcript
    };
  
    recognition.onspeechend = () => {
      setIsRecording(false);
      recognition.stop();
    };
  
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      setFormData((pvalue)=>{
        return{
          ...pvalue,
          transcript:speechToText,
        }
      })
      // console.log("Transcript:", formData);
    };
  
    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsRecording(false);
    };
  
    // Stop recording after 1 minute
    setTimeout(() => {
      recognition.stop();
      setIsRecording(false);
    }, 60000);
  
    recognition.start();
  };

  // State for form fields

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files,transcript } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  useEffect(()=>{
    document.querySelector(".card-overlay").classList.add("nodisplay");
  },[]);
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("username");
    const decoded = jwtDecode(token);
    const username = decoded.username;
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("area", formData.area);
    formDataToSend.append("username", username);
    formDataToSend.append("transcript", formData.transcript);
    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }
  
    axios
      .post("http://localhost:5000/note/addnote", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        document.querySelector(".loading").classList.remove("visible");
        alert("Note added successfully!");
  
        setFormData({ title: "", area: "",transcript:"", file: null });
  
        let token=Cookies.get("username");
        let decoded = jwtDecode(token);
        axios.post("http://localhost:5000/note/viewNotes",{username:decoded.username}).then((res)=>{
          setNotes(res.data);
          // console.log(res);
        }).catch((err)=>{
          console.log(err);
        }) // Call function to refresh notes
  
        document.querySelector(".card-overlay").classList.add("nodisplay");
      })
      .catch((error) => {
        console.error("Error:", error);
        document.querySelector(".loading").classList.remove("visible");
        alert("Failed to add note");
      });
  
    document.querySelector(".loading").classList.add("visible");
  };
  
  return (
    <div className="card-overlay">
      
      <div className="card-container">
        <form className="note-form" onSubmit={handleSubmit}>
          <button
            type="button"
            className="cancel-button"
            onClick={() => {
              document.querySelector(".card-overlay").classList.add("nodisplay");
            }}
          >
            ×
          </button>
          <div className="form-group">
            <input
              name="title"
              type="text"
              placeholder="Note Title"
              className="title-input"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="area"
              placeholder="Write something..."
              className="note-textarea"
              value={formData.area}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
          <div className="file-upload-container">
  <input
    type="file"
    id="file"
    name="file"
    className="file-input"
    style={{ display: "none" }}
    onChange={handleChange}
  />
  <h5>Your Transcript</h5>
  <p>{transcript || "No speech recorded yet."}</p>
  <div onClick={() => document.getElementById("file").click()} className="custom-button">
    <img
      width="24"
      height="24"
      src="https://img.icons8.com/material-two-tone/24/add-image.png"
      alt="add-image"
    />
  </div>
</div>

          </div>
          <div className="button-group">
            <button
              onClick={startRecording}
              disabled={isRecording}
            type="button" className="record-button">
                      {isRecording ? "Recording..." : "Start Recording"}
            </button>
            <button type="submit" className="add-button">
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
