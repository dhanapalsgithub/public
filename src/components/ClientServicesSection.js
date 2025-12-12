// src/components/ClientServicesSection.jsx
import React from 'react';
import './ClientServicesSection.css'; 

const ClientServicesSection = () => {
    return (
        <section className="client-services-section">
            <h2 className="h2-divider client-services-header">
                💼  UI/UX & Development Services
            </h2>

            <div className="client-service-container">
                <div className="service-card">
                    <h3 className="service-card-title">User Interface (UI) Development</h3>
                    <p>We craft visually appealing and functional user interfaces using modern frameworks like React, ensuring pixel-perfect design implementation and cross-browser compatibility.</p>
                </div>
                <div className="service-card">
                    <h3 className="service-card-title">User Experience (UX) Strategy</h3>
                    <p>Our team focuses on designing intuitive, efficient, and user-centered experiences, transforming complex requirements into simple, delightful journeys for your customers.</p>
                </div>
                <div className="service-card">
                    <h3 className="service-card-title">End-to-End Project Development</h3>
                    <p>From concept to deployment, we deliver complete Full-Stack solutions utilizing MERN, Java/Spring, or Python/Django for robust and scalable backend architecture.</p>
                </div>
            </div>
        </section>
    );
};

export default ClientServicesSection;