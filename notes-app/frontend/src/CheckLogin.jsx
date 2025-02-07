import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";


function CheckLogin({ children }) {
  let token = Cookies.get("username"); // Get the token from cookies
  
  if (!token) {
    return <Navigate to="/login"  />;
  }

  try {
    let decoded = jwtDecode(token); // Decode the token (no secret needed)

    
    if (decoded.exp * 1000 < Date.now()) {
      Cookies.remove("username"); // Remove expired token
      return <Navigate to="/login"  />;
    }

    return children; // If token is valid, render the protected component
  } catch (err) {
    return <Navigate to="/login" replace />;
  }
}

export default CheckLogin;