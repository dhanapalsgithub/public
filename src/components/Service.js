// src/components/Service.js

import React, {  useEffect } from "react";
import "./Service.css";
import { Link } from 'react-router-dom'; // 🛑 Link component ஐ இறக்குமதி செய்யவும்
import {
    FaTools,

    FaCalculator,
    FaProjectDiagram,
    FaBuilding, // Architectural Services
    FaCogs,     // Mechanical Services
    FaCube,     // Precast Detailing
    
} from "react-icons/fa";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Service = () => {
    // Scroll to the top of the services section on load
    useEffect(() => {
        const section = document.getElementById('service');
        if (section) {
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
    }, []);

    // 🛑 குறிப்பு: Dropdown-ஐ நீக்கிவிட்டு, Rebar Detailing-க்கு Link பயன்படுத்தப்பட்டுள்ளது.
    //           Dropdown functionality (useState) நீக்கப்படவில்லை, தேவைப்பட்டால் மீண்டும் பயன்படுத்திக் கொள்ளலாம்.

    return (
        <>
            <NavBar />

            <div className="service-wrapper" id="service"> {/* <-- Target ID for Navbar link */}
                <h2 className="service-main-title">Our Services</h2>
                <div className="underline"></div>

                <div className="services-grid">

                    {/* 1. Rebar Detailing Services (Clickable Card) */}
                    <div className="service-card home-service-card">
                        <Link to="/rebar-detailing" style={{ textDecoration: "none", color: "inherit" }}>
                            <FaTools className="service-icon" />
                            <h3>Rebar Detailing Services</h3>
                            <p>
                                Steel detailing services which provide detailed drawings for steel fabricators and erectors...
                            </p>
                        </Link>
                    </div>

                    {/* 2. Rebar Estimation (Clickable Card) */}
                    <div className="service-card home-service-card">
                        <Link to="/rebar-estimation" style={{ textDecoration: "none", color: "inherit" }}>
                            <FaCalculator className="service-icon" />
                            <h3>Rebar Estimation</h3>
                            <p>
                                Accurate estimates, quantity take-offs, and BOQ preparation for reinforcing steel...
                            </p>
                        </Link>
                    </div>

                    {/* 3. Precast Detailing Services (Clickable Card) */}
                    <div className="service-card home-service-card">
                        <Link to="/precast-detailing" style={{ textDecoration: "none", color: "inherit" }}>
                            <FaCube className="service-icon" />
                            <h3>Precast Detailing Services</h3>
                            <p>
                                Precast detailing for constructing structures and prefabricated components...
                            </p>
                        </Link>
                    </div>

                    {/* 4. Architectural Services (Clickable Card) */}
                    <div className="service-card home-service-card">
                        <Link to="/architectural-services" style={{ textDecoration: "none", color: "inherit" }}>
                            <FaBuilding className="service-icon" />
                            <h3>Architectural Services</h3>
                            <p>
                                Architectural services for contractors, builders, and subcontractors...
                            </p>
                        </Link>
                    </div>

                    {/* 5. Mechanical Services (Clickable Card) */}
                    <div className="service-card home-service-card">
                        <Link to="/mechanical-services" style={{ textDecoration: "none", color: "inherit" }}>
                            <FaCogs className="service-icon" />
                            <h3>Mechanical Services</h3>
                            <p>Mechanical shop drawings and system coordination...</p>
                        </Link>
                    </div>

                    {/* 6. BIM Services (Clickable Card) */}
                    <div className="service-card home-service-card">
                        <Link to="/bim-services" style={{ textDecoration: "none", color: "inherit" }}>
                            <FaProjectDiagram className="service-icon" />
                            <h3>BIM Services</h3>
                            <p>
                                Building construction sectors with BIM modeling and coordination...
                            </p>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Service;