// RebarDetailing.jsx
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import "./RebarPages.css";

const RebarDetailing = () => {
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
      <main className="rp-container">

        {/* HERO */}
        <section className="rp-hero rp-hero--detailing">
          <div className="rp-hero-content">
            <h1>Rebar Detailing</h1>
            <p>Code-compliant shop drawings with precision, clarity, and constructability.</p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="rp-section">
          <h2>Overview</h2>
          <p>
            We produce accurate, coordinated rebar shop drawings aligned with ACI, BS, IS, and EC2
            standards, ensuring site-ready deliverables with clear bar marks, laps, covers, and
            placement sequences for fast fabrication and installation.
          </p>
        </section>

        {/* SERVICES */}
        <section className="rp-section rp-grid">
          <div>
            <h3>Core deliverables</h3>
            <ul className="rp-list">
              <li><strong>Shop drawings:</strong> Plans, sections, details with bar marks</li>
              <li><strong>BBS synced:</strong> Bar marks mapped to schedules</li>
              <li><strong>Revision control:</strong> Cloud versioning and change logs</li>
              <li><strong>Clash check:</strong> Coordination with structural MEP</li>
            </ul>
          </div>
          <div>
            <h3>Coverage</h3>
            <ul className="rp-list">
              <li><strong>Elements:</strong> Footings, columns, beams, slabs, walls, stairs</li>
              <li><strong>Complex geometry:</strong> Rafts, PT interface, shear walls, cores</li>
              <li><strong>Standards:</strong> ACI, BS, IS, EC2 (project-specific notes)</li>
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="rp-section">
          <h2>Workflow</h2>
          <ol className="rp-steps">
            <li><strong>Input:</strong> IFC/structural drawings, specs, bar grades</li>
            <li><strong>Model/detail:</strong> Layout, bar marks, laps, hooks, covers</li>
            <li><strong>QA/QC:</strong> Code checks, dimensions, cross-references</li>
            <li><strong>Issue:</strong> PDF/DWG with transmittal and revision history</li>
          </ol>
        </section>

        {/* CTA */}
        <section className="rp-cta">
          <h2>Ready to start?</h2>
          <p>Share your structural set and specs—we’ll send scope, timelines, and a sample sheet.</p>
          <a className="rp-btn" href="/contact">Get a proposal</a>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default RebarDetailing;
