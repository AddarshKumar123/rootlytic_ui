import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Auth.css';

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Log in to manage your application logs.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@company.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="" required />
          </div>
          <button type="submit" className="btn-primary full-width">Sign In</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export const Signup = () => {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:null,
    password:null
  })

  const handleInputChange=(field,value)=>{
    setFormData((prev)=>({...prev, [field]:value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Get Started</h2>
        <p>Start fixing bugs faster with Gemini AI.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="" required />
          </div>
          <div className="form-group">
            <label>Work Email</label>
            <input
              type="email"
              placeholder=""
              value={formData.email || ""}
              onChange={(e)=>
                handleInputChange("email",e.target.value)
              }
              required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="email"
              placeholder=""
              value={formData.password || ""}
              onChange={(e)=>
                handleInputChange("password",e.target.value)
              }
              required />
          </div>
          <button type="submit" className="btn-primary full-width">Create Account</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};