import { useState, useEffect } from "react";
import axios from "axios";
import "./BookNow.css";

export default function BookNow() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    sofas: "",
    date: "",
    time: "",
    specialRequest: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
await axios.post(
  "https://jmd-dry-cleaners-backend.onrender.com/book-now", 
  formData
);

setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        sofas: "",
        date: "",
        time: "",
        specialRequest: "",
      });

      alert("Booking Sent Successfully ✅");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } catch (error) {
      console.log(error);
      alert("Failed to send booking ❌");
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">

      {loading && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner"></div>
            <h3>Processing Booking...</h3>
            <p>Please wait while we confirm your request.</p>
          </div>
        </div>
      )}

      <div className="booking-card">
        <h2>Book Your Service</h2>

        <p>
          Fill in your details and we will contact you shortly.
        </p>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="4"
            name="address"
            placeholder="Complete Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="sofas"
            placeholder="Number of Sofas"
            min="1"
            value={formData.sofas}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <textarea
            rows="4"
            name="specialRequest"
            placeholder="Special Request (Optional)"
            value={formData.specialRequest}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
}