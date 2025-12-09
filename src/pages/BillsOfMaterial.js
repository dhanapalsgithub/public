// BillsOfMaterial.jsx
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import "./RebarPages.css";

const BillsOfMaterial = () => {
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
      <main className="rp-container">
        <button
                onClick={handleBack} // Use the function to go back
                className="back-button" 
                style={{color:"#272845", fontFamily:'cursive', padding:"10px ",}}
             >
                &lt;&lt; Back
             </button>

        {/* HERO */}
        <section className="rp-hero rp-hero--bom">
          <div className="rp-hero-content">
            <h1>Bills of Material (BOM & BBS)</h1>
            <p>Fabrication-ready bar bending schedules with cut lengths and bending details.</p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="rp-section">
          <h2>Overview</h2>
          <p>
            We prepare bar bending schedules directly mapped to shop drawings—complete with bar marks,
            cut lengths, bend angles, shapes, and grouping for optimized fabrication and site handling.
          </p>
        </section>

        {/* BBS CONTENT */}
        <section className="rp-section rp-grid">
          <div>
            <h3>Included</h3>
            <ul className="rp-list">
              <li><strong>BBS tables:</strong> Bar mark, dia, shape code, cut length, qty</li>
              <li><strong>Shape codes:</strong> Standard hooks, bends, custom shapes</li>
              <li><strong>Lotting:</strong> Grouping for cut & bend operations</li>
              <li><strong>Export:</strong> Excel/PDF with sheet references</li>
            </ul>
          </div>
          <div>
            <h3>Quality checks</h3>
            <ul className="rp-list">
              <li><strong>Cross-link:</strong> BBS lines mapped to drawing views</li>
              <li><strong>Tolerances:</strong> Dia, lap, cover verification</li>
              <li><strong>Revisions:</strong> Change notes and versioning</li>
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="rp-section">
          <h2>Workflow</h2>
          <ol className="rp-steps">
            <li><strong>Source:</strong> Approved shop drawings + specs</li>
            <li><strong>Schedule:</strong> Mark-wise BBS with shape mapping</li>
            <li><strong>Review:</strong> QA/QC and contractor sign-off</li>
            <li><strong>Release:</strong> Final Excel/PDF pack for fabrication</li>
          </ol>
        </section>

        {/* CTA */}
        <section className="rp-cta">
          <h2>Start your BBS</h2>
          <p>Share approved drawings and spec notes—we’ll send a sample schedule within timelines.</p>
          <a className="rp-btn" href="/contact">Get BBS sample</a>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default BillsOfMaterial;
