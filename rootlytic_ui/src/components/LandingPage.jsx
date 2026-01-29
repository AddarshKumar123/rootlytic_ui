import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">RootLytic</div>
        <div className="nav-links">
          <Link to="/login" className="btn-secondary">Login</Link>
          <Link to="/signup" className="btn-primary">Sign Up</Link>
        </div>
      </nav>

      <header className="hero">
        <h1>Stop Debugging. <br /><span className="highlight">Start Fixing.</span></h1>
        <p>
          Extract logs from your application, parse them instantly, and let 
          AI suggest the exact code change you need to fix the error.
        </p>
        <div className="hero-cta">
          <button className="btn-large">Get Started for Free</button>
          <button className="btn-outline">View Demo</button>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>Instant Extraction</h3>
          <p>Seamlessly connect your app's stdout or log files directly to our secure parser.</p>
        </div>
        <div className="feature-card">
          <h3>Intelligent Parsing</h3>
          <p>Automatically categorize errors, warnings, and stack traces with high precision.</p>
        </div>
        <div className="feature-card">
          <h3>AI Fixes</h3>
          <p>Receive context-aware code snippets to resolve production bugs in seconds.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;