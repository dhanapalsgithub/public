import React, { useState } from 'react';
import './Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
import girlImg from '../assets/contact -girl.jpg';
import logo from '../assets/logo101.png';
import API from '../api'; // axios instance

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(''); // State to hold the error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrorPopup('');

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await API.post("/contact", formData);

      if (response.status === 200 && response.data.message) {
        setSuccessPopup(true);
        setTimeout(() => setSuccessPopup(false), 3000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Unexpected response:", response);
        // Show an error if the response status is 200 but the message is missing
        setErrorPopup("Submission failed due to an unexpected server response.");
      }
    } catch (err) {
      console.error("Axios error:", err.response?.data || err.message);
      
      // *** IMPROVED ERROR HANDLING LOGIC ***
      // Tries to get the specific error message from the backend (like "DB Insert Error")
      const errorMessage = err.response?.data?.message 
                         || err.message 
                         || "Please check your network connection and try again.";
      
      setErrorPopup("Error sending message: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      
      {/* 🛑 New Error Popup Implementation (Optional) */}
      {errorPopup && (
        <div className="error-popup-overlay">
          <div className="error-popup-modal">
            <p>
                <strong>Submission Failed!</strong><br />
              {errorPopup}
            </p>
            <button
              className="error-ok-btn"
              onClick={() => setErrorPopup('')}
            >
              Close
            </button>
          </div>
        </div>
      )}

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
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;