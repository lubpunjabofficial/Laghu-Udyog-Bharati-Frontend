import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: only digits
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, ""); // remove non-digit
      setFormData({ ...formData, [name]: cleaned });
      if (cleaned.length > 10) return; // max 10 digits
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Reset error on change
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", phone: "" };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    // Phone validation
    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // stop if validation fails

    try {
      await axios.post("https://lubpunjab.onrender.com/api/contact", formData);
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-card">
        {/* <div className="contact-left">
          <h1>Get in Touch</h1>
          <p>
            Let’s build something amazing together. Fill the form and I’ll
            reach out soon ✨
          </p>
          <div className="contact-details">
            <span>📧 hello@example.com</span>
            <span>📞 +91 98765 43210</span>
            <span>📍 India</span>
          </div>
        </div> */}
        

        <form className="contact-right" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
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
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error-msg">{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
