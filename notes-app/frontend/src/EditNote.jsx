// import React from "react";
import React, { useEffect } from "react";
import "./editCard.css"
import NoteContext from "./NoteContext";
import Form from "./EditNoteform";
export default function AudioPlayer(props) {
const [display,setDisplay]=React.useState({
    notes:true,
    transcript:false,
    audioplayer:false
})

const [newNote,saveNewNote]=React.useState({
    title:"",
    text:""
});
function handleChange(event) {
    const { name, value } = event.target;
    saveNewNote((pvalue)=>{
        if(name==="title"){
            return{
                ...pvalue,
                title:value
            }
        }
        else{
            return{
                ...pvalue,
                text:value
            }
        }
    })
    // saveNewNote();
}

// console.log(props);
const { singleNote,setsingleNote } = React.useContext(NoteContext);

useEffect(()=>{

        document.querySelector(".editCard").classList.add("nodisplay");
    
    
    // document.querySelector("body").classList.add("remove-overflow");
},[]);
function handleRemove(){
    document.querySelector(".editCard").classList.add("nodisplay");
    // document.querySelector("body").classList.remove("remove-overflow");
}
function DisplayCard(props){
    // console.log(props);
    if(display.notes){
        return (
            <div>
                <div>
                    <p style={{fontSize:"1.1 rem"}}>{singleNote.text}</p>
                </div>
            
                <div className="image-upload">
                    <div className="image-placeholder">
                        {/* {singleNote.photo} */}
                        <img src={singleNote.photo} style={{height:"100px",width:"100px"}} alt="" />{}
                    </div>
                    
                </div>
            </div>
        )
    }
    else if(display.transcript){
        return (
            <div className="transcript">
            {singleNote.transcript?singleNote.transcript:<p>No Transcript available</p>}
        </div>
        );
    }
    else if(display.audioplayer){
        return (
            
        <div className="audio-player">
            {singleNote.transcript?
            <>
                        <audio controls>
                           
                            <source src={singleNote.audiourl} type=""/>
                            Your browser does not support the audio element.
                        </audio>
                        {/* <h1>{singleNote.audiourl}</h1> */}

                        
            </>
            :<p>No Transcript available</p>}
        </div>
        );
    }
    else if(display.edit){
        return (<Form id={props.id} propsfun={props.displayfun}></Form>);
    }

}
return (
    <div className="editCard">
        {singleNote &&  Object.keys(singleNote).length > 0?
                <div className="card">
                <div className="card-header">
                    <div>
                    <h2 className="title">{singleNote.title} </h2>
                    <p className="timestamp">{singleNote.date} ·{singleNote.time}</p>
                    </div>
                    <div className="header-actions">
                    <button className="icon-button">⤢</button>
                    <button className="icon-button">↗</button>
                    <button className="icon-button" onClick={handleRemove}>✕</button>
                    </div>
                </div>
            

            
                <div className="tabs">
                    <ul className="tab-list">
                    <li className="tab active notes" onClick={()=>{
                                                document.querySelector(".active").classList.remove("active");
                                                document.querySelector(".notes").classList.add("active");
                        setDisplay(
                            {
                                notes:true,
                                transcript:false,
                                audioplayer:false, 
                                edit:false
                            }
                        )
                    }}>Notes</li>
                    
                    <li className="tab trans"  
                    onClick={()=>{
                        document.querySelector(".active").classList.remove("active");
                        document.querySelector(".trans").classList.add("active");
                        setDisplay(
                            {
                                notes:false,
                                transcript:true,
                                audioplayer:false,
                                edit:false 
                                
                            }
                        )
                    }}>Transcript</li>
                    <li className="tab editnote" 
                    onClick={()=>{
                        document.querySelector(".active").classList.remove("active");
                        document.querySelector(".editnote").classList.add("active");
                    setDisplay(
                        {
                            notes:false,
                            transcript:false,
                            audioplayer:false,
                            edit:true
                        }
                    )
                    }
                    }
                    >Edit Note</li>
                    <li className="tab speak"  onClick={()=>{
                                                document.querySelector(".active").classList.remove("active");
                                                document.querySelector(".speak").classList.add("active");
                        setDisplay(
                            {
                                notes:false,
                                transcript:false,
                                audioplayer:true, 
                                edit:false
                            }
                        )
                    }}>Speaker Transcript</li>
                    </ul>
                </div>
            

                <DisplayCard displayfun={props.displayfun} id={singleNote}/>
                </div>
        :null}
    </div>
)
}

  