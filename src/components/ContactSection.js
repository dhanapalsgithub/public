// src/components/ContactSection.jsx
import React from 'react';
import './ContactSection.css'; 


const ContactSection = () => {
    return (
        <section className="contact-section">
            <h2 className="contact-header">Get in Touch</h2>
            <p className="contact-subheader">We'd love to hear from you! Reach out to us using the contact information below.</p>
            
            <div className="contact-cards-grid">
                <div className="contact-card">
                    <h3 className="contact-card-title">Our Office</h3>
                    <p>R & I techforge Academy</p>
                    <p>Kovur,sikkarapuram,Chennai-600119</p>
                </div>
                <div className="contact-card">
                    <h3 className="contact-card-title">Call Us</h3>
                    <p>+91 9360380276</p>
                </div>
                <div className="contact-card">
                    <h3 className="contact-card-title">Email Us</h3>
                    <p>riengineeringtech@yahoo.com</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;