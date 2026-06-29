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
  service: [],
  date: "",
  time: "",
  specialRequest: "",
});
const handleChange = (e) => {
  const { name, value, options } = e.target;

  if (name === "service") {
    const selectedServices = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData({
      ...formData,
      service: selectedServices,
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "9a6c02b8-d0cf-425c-98ed-8ccb0912afa9",
        subject: "New Dry Cleaning Booking",
        from_name: "JMD Dry Cleaners Website",

        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        specialRequest: formData.specialRequest,
      });

      if (response.data.success) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          // sofas: "",
          service: formData.service.join(", "),
          date: "",
          time: "",
          specialRequest: "",
        });

        alert("Booking Sent Successfully ✅");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        alert("Failed to send booking ❌");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send booking ❌");
    } finally {
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

        <p>Fill in your details and we will contact you shortly.</p>

        <form className="booking-form" onSubmit={handleSubmit}>
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

<div className="service-section">
  <label className="service-label">
    🧹 Select Services
  </label>

  <div className="select-container">
    <select
      className="service-select"
      name="service"
      value={formData.service}
      onChange={handleChange}
      multiple
      required
    >
      <optgroup label="🛋️ Home Cleaning">
        <option value="Sofa Dry Cleaning">🛋️ Sofa Dry Cleaning</option>
        <option value="Mattress Dry Cleaning">🛏️ Mattress Dry Cleaning</option>
        <option value="Recliner Sofa Dry Cleaning">🪑 Recliner Sofa Dry Cleaning</option>
      </optgroup>

      <optgroup label="🪑 Chair Cleaning">
        <option value="Dining Chairs Dry Cleaning">🍽️ Dining Chairs Dry Cleaning</option>
        <option value="Office Chairs Dry Cleaning">💼 Office Chairs Dry Cleaning</option>
      </optgroup>

      <optgroup label="🚗 Vehicle Cleaning">
        <option value="Car Dry Cleaning">🚗 Car Dry Cleaning</option>
      </optgroup>
    </select>
  </div>

  <p className="service-note">
    💡 Hold <b>Ctrl</b> (Windows) or <b>⌘ Command</b> (Mac) to select multiple services.
  </p>
</div>

<label htmlFor="date"  className="label">📅 Select Date</label>
<input
  id="date"
  type="date"
  name="date"
  value={formData.date}
  onChange={handleChange}
  required
/>

<label htmlFor="time" className="label">🕒 Select Time</label>
<input
  id="time"
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