// MechanicalService.jsx
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ServicePages.css";
import { useNavigate } from 'react-router-dom';

const MechanicalService = () => {
  const navigate = useNavigate();

    // Function to handle the back action
    const handleBack = () => {
        // Go back one step in the browser history. 
        // This will take the user back to the previous route (Home, Service, etc.)
        navigate(-1); 
    };
  return (
    <>
      <NavBar />
      <button
                onClick={handleBack} // Use the function to go back
                className="back-button" 
                style={{color:"#272845", fontFamily:'cursive', padding:"10px ",}}
             >
                &lt;&lt; Back
             </button>
      <main className="sp-container">

        <section className="sp-hero sp-hero--mechanical">
          <div className="sp-hero-content">
            <h1>Mechanical Services</h1>
            <p>Reliable MEP solutions for HVAC, plumbing, and fire protection systems.</p>
          </div>
        </section>

        <section className="sp-section">
          <h2>Overview</h2>
          <p>
            We provide mechanical engineering services including HVAC design, plumbing layouts,
            and fire protection systems. Our solutions ensure energy efficiency, safety, and
            compliance with international standards.
          </p>
        </section>

        <section className="sp-section sp-grid">
          <div>
            <h3>Services</h3>
            <ul>
              <li>HVAC Design & Drafting</li>
              <li>Plumbing & Drainage Systems</li>
              <li>Fire Protection Layouts</li>
              <li>MEP Coordination</li>
            </ul>
          </div>
          <div>
            <h3>Benefits</h3>
            <ul>
              <li>Energy-efficient solutions</li>
              <li>Code-compliant designs</li>
              <li>Integrated with BIM models</li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default MechanicalService;
