import React, { useState } from "react";
import ReactPannellum from "react-pannellum";
import "./Campus360.css";

export default function Campus360() {
  // State to track which image is currently showing
  const [currentImage, setCurrentImage] = useState("/bb1inside.jpg");

  // Configuration for "Phone Panoramas" (Cylindrical)
  // These settings prevent the user from looking too far up/down at the black space
  const panoramaConfig = {
    autoLoad: true,
    haov: 360,      // Horizontal Angle of View (Assume the image is a full circle)
    vaov: 60,       // Vertical Angle of View (Limit this because phone images are narrow!)
    vOffset: 0,     // Center the view vertically
    pitch: 0,       // Start looking straight ahead
    yaw: 0,         // Start rotation
    minPitch: -30,  // User can't look down at the floor (hides empty space)
    maxPitch: 30,   // User can't look up at the sky (hides empty space)
    autoRotate: -2, // Slowly rotate to show off the view
  };

  return (
    <div className="campus-hero-section">
      
      {/* The 360 Viewer */}
      <div className="pannellum-wrapper">
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource={currentImage}
          config={panoramaConfig}
          style={{
            width: "100%",
            height: "100%",
            background: "#000000" // Background color for the empty parts
          }}
        />
      </div>

      {/* Overlay controls to switch locations */}
      <div className="hero-overlay">
        <h1>CampusVerse</h1>
        <p>Explore Banasthali Vidyapith</p>
        
        <div className="location-buttons">
          <button onClick={() => setCurrentImage("/bb1inside.jpg")}>
            Basketball Court
          </button>
          <button onClick={() => setCurrentImage("/outGround.jpg")}>
            Main Ground
          </button>
          <button onClick={() => setCurrentImage("/bb1outside.jpg")}>
            Side Court
          </button>
        </div>
      </div>
    </div>
  );
}