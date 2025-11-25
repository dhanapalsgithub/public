import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="section contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>

        {/* ⭐ SINGLE-LINE ADDRESS */}
        <p>
          <strong>R & I Engineering And Technology</strong><br />
          Kundrathur Main Road, Eswara Nagar, Kovur, Sikakarayapuram, 
          Kancheepuram, Tamil Nadu, India - 600119
        </p>

        <p>Email: hari.irumam@gmail.com</p>
        <p>Phone: +91 9790186728</p>
        <p>Landline: +91 9876543210</p>

        {/* ⭐ Live Google Map */}
        <div className="map-container">
          <iframe
            title="R & I Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.203812345678!2d80.0978!3d13.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1234567890%3A0xabcdef1234567890!2sKundrathur%20Main%20Road%2C%20Kovur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0, marginTop: "20px" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-right">
        <h2>Send Us a Message</h2>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
