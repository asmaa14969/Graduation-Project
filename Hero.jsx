import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import ElectronicsImage from './ElectronicsImage';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to<br />Electronix_HubX</h1>
          <p className="hero-subtitle">
            Your go-to place for the latest electronics. Explore and find your perfect device today!
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">Explore Now</button>
            <div className="auth-buttons">
              <Link to="/signup" className="btn-secondary">Sign Up</Link>
              <Link to="/login" className="btn-secondary">Log in</Link>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <ElectronicsImage />
        </div>
      </div>
    </div>
  );
}

export default Hero;