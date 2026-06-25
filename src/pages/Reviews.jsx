import React from "react";
import "./Gallery.css";

import modiji from "../assets/modiji.png";
import akshay from "../assets/akshay.png";
import ambani from "../assets/ambani.png";

export default function Reviews() {
  return (
    <div className="back testimonials-section">
      <div className="testi-header">
        <h2 className="testi-title">Customer Reviews</h2>
        <b>What Our Customers Say About Our Cleaning Service</b>
      </div>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="testimonial-card">
              <img
                src={modiji}
                className="testimonial-img"
                alt="Customer Review"
              />
              <h3>Rohit Sharma</h3>

              <div className="stars">★★★★★</div>

              <p>
                "My sofa was very dirty, but they cleaned it so well that it
                looks almost brand new. The service was on time, and the staff
                was very polite and professional."
              </p>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="testimonial-card">
              <img
                src={akshay}
                className="testimonial-img"
                alt="Customer Review"
              />
              <h3>Priya Verma</h3>

              <div className="stars">★★★★★</div>

              <p>
                "I booked sofa and curtain cleaning service, and I am very happy
                with the results. The fabric was handled safely, and all the
                dust and stains were removed perfectly."
              </p>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <div className="testimonial-card">
              <img
                src={ambani}
                className="testimonial-img"
                alt="Customer Review"
              />
              <h3>Amit Singh</h3>

              <div className="stars">★★★★☆</div>

              <p>
                "The sofa cleaning was done very professionally. Most of the old
                stains were removed, and the sofa felt fresh and clean again.
                Overall, it was a great experience."
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}