import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ServicePages.css"; // your CSS file
import { useNavigate } from 'react-router-dom';

const PrecastDetailing = () => {
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
      <div className="sp-container">
        <div className="sp-hero sp-hero--precast">
          <div className="sp-hero-content">
            <h1>Precast Detailing Services</h1>
            <p>Accurate shop drawings and layouts for prefabricated structural components.</p>
          </div>
        </div>

        <div className="sp-section">
          <h2>What We Offer</h2>
          <p>
            We provide detailed precast shop drawings for beams, columns, slabs, and wall panels.
            Our services ensure compliance with international standards and reduce on‑site errors.
          </p>
        </div>

        <div className="sp-section sp-grid">
          <div>
            <h2>Key Benefits</h2>
            <ul>
              <li>Accurate prefabrication details</li>
              <li>Reduced construction errors</li>
              <li>Compliance with codes</li>
              <li>Faster project delivery</li>
            </ul>
          </div>
          <div>
            <h2>Applications</h2>
            <ul>
              <li>Residential buildings</li>
              <li>Commercial complexes</li>
              <li>Industrial structures</li>
              <li>Infrastructure projects</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrecastDetailing;
