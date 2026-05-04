import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  // Login.jsx ka handleLogin function aisa hona chahiye
const handleLogin = async (e) => {
  e.preventDefault();
  setError(""); 

  try {
    const response = await axios.post("https://lubpunjab.onrender.com/api/admin/login", {
      email,
      password,
    });

    if (response.data.success) {
      // Token save karo
      localStorage.setItem("adminToken", response.data.token);
      
      // Redirect with refresh (Isse App.js ko naya token mil jayega)
      window.location.href = "/admin"; 
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed. Check your database.");
  }
};

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Authentication</h2>
        <p className="login-subtitle">Access your dashboard with secure credentials</p>
        
        {error && (
          <div style={{ 
            color: "#d93025", 
            backgroundColor: "#fce8e6", 
            padding: "10px", 
            borderRadius: "5px", 
            marginBottom: "15px", 
            fontSize: "14px", 
            textAlign: "center", 
            border: "1px solid #f5c2c7" 
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
