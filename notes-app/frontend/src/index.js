import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckLogin from "./CheckLogin";
import ContextProvider from "./ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route
        path="/home"
        element={
          <CheckLogin>
            <ContextProvider>
              <App />
            </ContextProvider>
            
            
          </CheckLogin>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);
