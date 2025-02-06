import axios from "axios";
import "./Login.css";
import React from "react";
import { Navigate,useNavigate } from "react-router-dom";

function Login() {
    let navigate=useNavigate();
    const [form, setForm] = React.useState({
        username: "",
        password: ""
    });

    function handleForm(event) {
        let { name, value } = event.target; 
        setForm((prevValue) => ({
            ...prevValue, 
            [name]: value 
        }));
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        axios.post("http://localhost:5000/user/login", {
            username: form.username,
            password: form.password
        },{ withCredentials: true } ).then((res) => {
            if (res) {
                alert("Login successful!");
                setForm({ username: "", password: "" });
                navigate("/home"); // Navigate after successful login
            }
        }).catch((err) => {
            if (err.response) { // Use err.response instead of err.status
                if (err.response.status === 500) alert("Some error occurred");
                else if (err.response.status === 401) alert("Invalid credentials");
                else if (err.response.status === 404) alert("User not found!");
            } else {
                alert("Network error, please try again.");
            }
        });
    }
    

    return (
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <div className="form-group">
              <input onChange={handleForm} type="text" placeholder="Username" className="form-input" name="username" value={form.username} required={true}/>
            </div>
            <div className="form-group">
              <input onChange={handleForm} type="password" placeholder="Password" className="form-input" name="password" value={form.password} required={true}/>
            </div>
            <button type="submit" onClick={handleSubmit} className="login-button">Login</button>
          </form>
          <p className="signup-text">
            Don't have an account? <a href="/signup" className="signup-link">Signup here</a>
          </p>
        </div>
      </div>
    );
}

export default Login;
