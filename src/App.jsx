import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Hero from "./components/hero";
import About from "./components/about";
import LoadingSpinner from './components/loadingspinner';
import './App.css';
import git from "./assets/images/git.png";
import link from "./assets/images/link.png";
import watsapp from "./assets/images/watsapp.png";

// Content Component
const Content = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay to your preference

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <LoadingSpinner />; // Show loading spinner while content loads
  }

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      {/* Add additional routes as needed */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="nav">
        <h1 className="head">James_Code</h1>

        <div className="linkcont">
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About Me</Link>
          <Link to="/experience" className="link">Experience</Link>
          <Link to="/service" className="link">Service</Link>
          <Link to="/portfolio" className="link">Portfolio</Link>
          <Link to="/testimonials" className="link">Testimonials</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>

        <Content /> {/* This will handle the loading and route rendering */}

        <div className="icons">
          <img src={git} alt="GitHub" className="iconimg" />
          <img src={link} alt="LinkedIn" className="iconimg" />
          <img src={watsapp} alt="WhatsApp" className="iconimg" />
        </div>
      </div>
    </Router>
  );
};

export default App;
