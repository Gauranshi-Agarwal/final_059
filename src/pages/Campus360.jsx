import React from "react";
import "./Campus360.css";

export default function Campus360() {
  return (
    <div className="campus-hero-section">
      {/* The Background Video */}
      <video 
        className="background-video" 
        autoPlay 
        muted 
        loop 
        playsInline // Important for mobile to not go fullscreen
      >
        {/* Ensure 'movie.mp4' is in the 'public' folder */}
        <source src="/movie.mp4" type="video/mp4" />
      </video>

      {/* Optional: Content on top of the video */}
      <div className="hero-overlay">
        <h1>Welcome to CampusVerse</h1>
        <p>Experience Banasthali Vidyapith like never before.</p>
      </div>
    </div>
  );
}