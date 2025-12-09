// BIMService.jsx
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import "./ServicePages.css";

const BIMService = () => {
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
        

        {/* HERO */}
        <section className="sp-hero sp-hero--bim">
          <div className="sp-hero-content">
            
            <h1>BIM Services</h1>
            <p>Building Information Modeling for smarter, coordinated construction workflows.</p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="sp-section">
          <h2>Overview</h2>
          <p>
            We provide BIM modeling and coordination services that integrate architectural, structural,
            and MEP disciplines. Our BIM workflows reduce clashes, improve visualization, and enhance
            project delivery efficiency.
          </p>
        </section>

        {/* FEATURES */}
        <section className="sp-section sp-grid">
          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>3D BIM Models (LOD 100–500)</li>
              <li>Clash Detection & Coordination</li>
              <li>Quantity Take-Offs</li>
              <li>4D Scheduling & 5D Costing</li>
            </ul>
          </div>
          <div>
            <h3>Benefits</h3>
            <ul>
              <li>Reduced rework & cost overruns</li>
              <li>Improved collaboration</li>
              <li>Enhanced visualization</li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default BIMService;
