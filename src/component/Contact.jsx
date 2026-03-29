import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE SUBMIT (EMAILJS)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields");
      return;
    }

    setStatus("Sending...");

    emailjs.send(
      "service_23y9dxt",     // 👉 replace with your service ID
      "template_8onde2o",    // 👉 replace with your template ID
      formData,
      "AVFYtC33xHrZqIKk6"   // 👉 replace with your public key
    )
    .then(() => {
      setStatus("Message sent successfully ✅");
    })
    .catch(() => {
      setStatus("Failed to send ❌");
    });

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="sub-text">Feel free to reach out anytime</p>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>pranjalichavan870@gmail.com</p>
          </div>

          <div className="info-item">
            <FaPhone className="icon" />
            <p>+91-7262998036</p>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-box">
          <h2>Contact Me</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          {status && <p className="status">{status}</p>}
        </div>

      </div>
    </section>
  );
};

export default Contact;