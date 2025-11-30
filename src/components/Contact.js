import React, { useState } from 'react';
import './Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
import girlImg from '../assets/contact -girl.jpg';
import logo from '../assets/logo101.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Success popup
      setSuccessPopup(true);
      setTimeout(() => setSuccessPopup(false), 3000);

      // Reset form
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <>
      <NavBar />

      {/* SUCCESS POPUP */}
      {successPopup && (
        <div className="success-popup-overlay">
          <div className="success-popup-modal">
            <p>
              Your message has been submitted.<br />
              Our sales team will call you shortly.
            </p>
            <button
              className="success-ok-btn"
              onClick={() => setSuccessPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}



      <div id="contact" className="section contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Contact Us</h2>

          <img src={logo} alt="Logo" className="left-image" />

          <p>
            <strong>R & I Engineering And Technology</strong><br />
            Kundrathur Main Road, Eswara Nagar, Kovur, Sikakarayapuram,<br />
            Kancheepuram, Tamil Nadu - 600119
          </p>

          <p>Email: riengineeringtech@yahoo.com</p>
          <p>Phone: +91 9790186728</p>
          <p>Landline: +91 9876543210</p>

          <div className="map-container">
            <iframe
              title="R & I Location"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="450"
              style={{ border: 0, marginTop: "20px" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <img src={girlImg} alt="Contact Girl" className="contact-form-image" />

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
