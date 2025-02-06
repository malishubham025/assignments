import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import NoteContext from "./NoteContext";
function Form(props) {
    let id=props.id.id;
    // console.log(id);
    const [formData, setFormData] = useState({
        title: "",
        text: "",
        id:id
    });
    const { setNotes } = React.useContext(NoteContext);
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleUpdate(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/note/update",formData).then((res)=>{
            alert("note updated !");
            setFormData({
                title:"",
                text:"",
                id:id
            })

            let token=Cookies.get("username");
            let decoded = jwtDecode(token);
            axios.post("http://localhost:5000/note/viewNotes",{username:decoded.username}).then((res)=>{
              setNotes(res.data);
              // console.log(res);
            }).catch((err)=>{
              console.log(err);
            }) // Call function to refresh notes
      
            // props.propsfun(username);
            document.querySelector(".editCard").classList.add("nodisplay");
        })
        .catch((err)=>{
            console.log(err);
            alert("something went wrong");
            
        })
    }
    function handleDelete(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/note/delete",formData).then((res)=>{
            setFormData({
                title:"",
                text:"",
                id:id
            })
            alert("note deleted !");
            let token=Cookies.get("username");
            let decoded = jwtDecode(token);
            const username = decoded.username;
            axios.post("http://localhost:5000/note/viewNotes",{username:decoded.username}).then((res)=>{
                setNotes(res.data);
                // console.log(res);
              }).catch((err)=>{
                console.log(err);
            }) 
            document.querySelector(".editCard").classList.add("nodisplay");
        })
        .catch((err)=>{
            console.log(err);
            alert("something went wrong");
        })
    }

    return (
        <form  className="form-container">
            <input 
                type="text" 
                name="title" 
                placeholder="Enter title" 
                value={formData.title} 
                onChange={handleChange} 
                className="input-field"
            />
            <input 
                type="text" 
                name="text" 
                placeholder="Enter text" 
                value={formData.text} 
                onChange={handleChange} 
                className="input-field"
            />
            <div className="form-buttons">
            <button type="submit" onClick={handleUpdate} className="submit-button">Save Note</button>
            <button type="submit" onClick={handleDelete} className="submit-button">Delete Note</button>
            </div>
        </form>
    );
}

export default Form;
