"use client"
import React from "react";
import {jwtDecode} from "jwt-decode";
import { useEffect, useState } from "react"
import axios from "axios";
import Cookies from "js-cookie";
import Card from "./Card";
import "./MainPage.css"
import Loading from "./Loading"
import AudioPlayer from "./EditNote";
import NoteContext from "./NoteContext";
function DisplayCard() {
  return <Card  />;
}

export default function MainPage() {
  React.useEffect(()=>{
    let token=Cookies.get("username");
    let decoded = jwtDecode(token);
    setUsername(decoded.username);
    axios.post("http://localhost:5000/note/viewNotes",{username:decoded.username}).then((res)=>{
      // console.log(res.data);
      setOriginal(res.data);
      // console.log(res.data);
      setNotes(res.data);
      
      // console.log(typeof notes);
    }).catch((err)=>{
      console.log(err);
    })
    document.querySelector(".editCard").classList.add("nodisplay");
  },[]);
  const [showFavorites, setShowFavorites] = useState(false);
  const { singleNote,setsingleNote,notes,setNotes } = React.useContext(NoteContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [username,setUsername]=React.useState("");
  const [original,setOriginal]=React.useState([]);
  // const [favorites, setFavorites] = useState([]);
  // const [notes,setNotes]=React.useState([]);
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setNotes(original);  // Reset to all notes
    } else {
      setNotes(
        original.filter((data) => 
          data.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          data.text.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, original]);
  function handleFavourite(){
    // setOriginal(notes);
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".fav").classList.add("active");
    setNotes(notes.filter((data)=>{
      return data.fav==true;
    }))

  }
  function handleHome(){
    // setOriginal(notes);
    document.querySelector(".home").classList.add("active");
    document.querySelector(".fav").classList.remove("active");
    setNotes(original);
    // console.log(y);
  }
  function addFav(id) {
  let data = notes.find((note) => note._id === id);

  if (!data.fav) {
    axios.post("http://localhost:5000/note/addfav", data)
      .then((res) => {
        alert("Added to Favorites");
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note._id === id ? { ...note, fav: true } : note
          )
        );
        // const updatedNotes = original
        setOriginal(notes.map(note =>
          note._id === id ? { ...note, fav: true } : note
        ));
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  } else {
    axios.post("http://localhost:5000/note/removefav", data)
      .then((res) => {
        alert("Removed from Favorites");
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note._id === id ? { ...note, fav: false } : note
          )
        );
        // setOriginal(notes);
        setOriginal(notes.map(note =>
          note._id === id ? { ...note, fav: false } : note
        ));
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }
  
}


  
  async function handleClick(obj){

    setsingleNote(obj); 
    // console.log(singleNote);
    
    // document.querySelector("body").classList.add("remove-overflow");
    
  }
  React.useEffect(() => {
  // console.log("Updated singleNote:", singleNote);
  if(singleNote && Object.keys(singleNote).length > 0){
    // console.log("hi");
    document.querySelector(".editCard").classList.remove("nodisplay");
  }
  
}, [singleNote]);
  function checkNotesLogic(decoded){

    console.log("hi");
    setUsername(decoded.username);

  }
  const [copiedNoteId, setCopiedNoteId] = useState(null);

  function handleCopy(text, noteId) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNoteId(noteId); // Set the copied note ID
      setTimeout(() => setCopiedNoteId(null), 2000); // Reset after 2 seconds
    });
  }
  
  


 

  return (
    <div style={{position:"relative"}} >
      <AudioPlayer ></AudioPlayer>
      <DisplayCard/>
      <Loading/>
      <div className="app-container">
        <div className="left-nav">
          {/* <button>hi</button> */}
          <aside className="sidebar">
            <div className="brand">
              <div className="logo">
              <img  onClick={()=>{
                  document.querySelector('.left-nav').classList.toggle("left-nav-hi"); 
                }} className="nav-img" src="/navigation-bar.png" alt="" />
                AI Notes</div>
            </div>
            <nav>
              <a style={{cursor:"pointer"}} onClick={handleHome} className="nav-item home active">
                Home
              </a>
              <a style={{cursor:"pointer"}} onClick={handleFavourite} className="nav-item fav">
                Favourites
              </a>
            </nav>
            <div className="user-profile">
                
                <div className="avatar">{username?username[0].toUpperCase():null}</div>
                <span>{username?username:null}</span>
              </div>
          </aside>
        </div>
        <div className="right-body">
          <main className="main-content" >
            <header className="header">
              <div className="search-bar">
                <img onClick={()=>{
                  document.querySelector('.left-nav').classList.toggle("left-nav-hi"); 
                }} className="nav-img" src="/navigation-bar.png" alt="" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}

                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
              </div>
              <button className="sort-button" onClick={()=>{
              document.querySelector(".card-overlay").classList.remove("nodisplay");
            }}>Add Note</button>
            </header>

            <div className="notes-grid">
              {notes.map((note,index) => (
                <div key={note._id} style={{position:"relative"}} className="note-card">
                  <div className="note-header">
                    <div className="note-date">{note.date}-{note.time}  </div>
                    <p style={{position:"absolute",top:"0",right:"10px"}}>{note.transcript?"00:00":"Text"} 
                      
                      <span style={{cursor:"pointer"}} onClick={()=>{
                        addFav(note._id);
                      }}>{note.fav ? "❤️" : "🤍"}</span></p>
                    {/* <p></p> */}
                    {note.duration && <div className="note-duration">{note.duration}</div>}
                    <div className="note-type">{note.type === "text" ? "Text" : ""}</div>
                  </div>
                  <h2 className="note-title">{note.title}</h2>
                  <p className="note-content">{note.text}</p>
                  {note.photo && <div className="note-attachments">
                    <img src={note.photo} alt="" />
                    </div>}
                  <div className="note-actions">
                  <button
                      className="action-button"
                      onClick={() => handleCopy(note.text, note._id)}
                    >
                      {copiedNoteId === note._id ? "Copied!" : "Copy"}
                    </button>
                    <button className="action-button" name={note._id} onClick={()=>{
                      console.log(note.photo);
                      handleClick({
                        id:note._id,
                        title:note.title,
                        text:note.text,
                        photo:note.photo?note.photo:null,
                        date:note.date,
                        time:note.time,
                        duration:note.duration?note.duration:null,
                        transcript:note.transcript?note.transcript:null,
                        audiourl:note.audiourl?note.audiourl:null
                      });
                    }}>More</button>
                  </div>
                </div>
              ))}
            </div>


          </main>
        </div>
      </div>
    </div>
  )
}

