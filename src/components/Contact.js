import React, { useState } from 'react';
import './Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
import girlImg from '../assets/contact -girl.jpg';
import logo from '../assets/logo101.png';
// import API from '../api'; // ❌ இனி API.js தேவையில்லை

// 🛑 உங்கள் Google Sheets Web App URL-ஐ இங்கு வரையறுக்கவும்
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxbeWQucO2a5lK7T2YybPtBhnSfpQ9I5F5lhSEyAZrQUIdFR82qYUuk5Zrtt7bmfTUb/exec";

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
    
    // முந்தைய பிழைகளை நீக்கவும்
    setErrorPopup('');

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // 🛑 முக்கிய மாற்றம்: Apps Script-க்கு ஏற்றவாறு FormData-வை உருவாக்குதல் (application/x-www-form-urlencoded வடிவம்)
    const dataToSend = new URLSearchParams();
    dataToSend.append('name', formData.name);
    dataToSend.append('email', formData.email);
    dataToSend.append('message', formData.message);


    try {
        // fetch பயன்படுத்தி, Web App URL-க்கு தரவை POST செய்கிறோம்
        const response = await fetch(WEB_APP_URL, {
            method: 'POST',
            // Headers தேவையில்லை, fetch தானாகவே Content-Type: application/x-www-form-urlencoded-ஐ அமைக்கும்
            body: dataToSend, 
        });

        // HTTP பிழைகளைச் சரிபார்க்கவும் (404, 500 போன்றவை)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Apps Script-ன் பதிலை JSON-ஆகப் படிக்கவும்
        const result = await response.json(); 

        if (result.result === 'success') {
            setSuccessPopup(true);
            setTimeout(() => setSuccessPopup(false), 3000);
            setFormData({ name: '', email: '', message: '' });
        } else {
            // Apps Script-ல் பிழை ஏற்பட்டால் (எ.கா., தரவு இல்லை)
            console.error("Apps Script Error:", result.message);
            setErrorPopup("Submission failed: Google Apps Script returned an error.");
        }
    } catch (err) {
      console.error("Submission error:", err.message);
      
      const errorMessage = err.message || "Please check your network connection and try again.";
      
      setErrorPopup("Error sending message: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      
      {/* 🛑 Error Popup Implementation */}
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
      )} {/* ✅ விடுபட்ட மூடும் அடைப்புக்குறி சேர்க்கப்பட்டுள்ளது */}

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