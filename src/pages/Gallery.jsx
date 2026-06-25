import React from "react";
import "./Gallery.css";

import modiji from "../assets/chair.png";
import akshay from "../assets/carseat.png";
import ambani from "../assets/cushions.png";

export default function Gallery() {
  const galleryImages = [modiji, akshay, ambani, modiji, akshay, ambani];

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Our Gallery</h2>
      </div>

      <div className="gallery-container">
        {galleryImages.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
}