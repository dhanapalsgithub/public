// src/components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <section className="hero-welcome-section">
            <h1>GIVE YOUR CAREER AN EDGE</h1>
            <p>Empowering beginners to learn technology with ease.</p>
            <button
                onClick={() => navigate("/contact")}
                className="hero-cta-button"
            >
                Get Started
            </button>
        </section>
    );
};

export default HeroSection;