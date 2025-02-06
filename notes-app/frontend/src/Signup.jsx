import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Login.css";

function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate(); // ✅ Create navigate function

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://localhost:5000/user/signup", formData, {
                withCredentials: true, // Allows cookies (for JWT)
            });

            setSuccess(response.data.message);
            setTimeout(() => navigate('/home'), 1000); // ✅ Navigate after 1 second
        } catch (error) {
            setError(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Sign Up</h1>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                            className="form-input"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Signup</button>
                </form>
                <p className="signup-text">
                    Already have an account? <a href="/login" className="signup-link">Login here</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
