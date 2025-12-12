import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import "./RebarPages.css";

const RebarEstimation = () => {
    const navigate = useNavigate();

    // Function to handle the back action for the main page
    const handleBack = () => {
        // Go back one step in the browser history. 
        navigate(-1);
    };

    // State for showing/hiding the sample PDF cards
    const [showSamples, setShowSamples] = useState(false);
    // State for the PDF URL to be displayed in the modal (Zoom/Print/View)
    const [activePdf, setActivePdf] = useState(null);

    // Function to close the modal
    const handleCloseModal = () => {
        setActivePdf(null);
    };

    const samplePdfs = [
        "/samples/R&I-Engineering-Sample-1.pdf",
        "/samples/R&I-Engineering-Sample-2.pdf",
        "/samples/R&I-Engineering-Sample-3.pdf",
        "/samples/R&I-Engineering-Sample-4.pdf",
        "/samples/R&I-Engineering-Sample-5.pdf",
        "/samples/R&I-Engineering-Sample-6.pdf",
        "/samples/R&I-Engineering-Sample-7.pdf",
        "/samples/R&I-Engineering-Sample-8.pdf",
        "/samples/R&I-Engineering-Sample-9.pdf",
        "/samples/R&I-Engineering-Sample-10.pdf",
    ];

    return (
        <>
            <NavBar />
            <button
                onClick={handleBack} // Use the function to go back
                className="back-button"
                style={{ color: "#272845", fontFamily: 'cursive', padding: "10px ", }}
            >
                &lt;&lt; Back
            </button>
            <main className="rp-container">

                {/* HERO */}
                <section className="rp-hero rp-hero--estimation">
                    <div className="rp-hero-content">
                        <h1>Rebar Estimation</h1>
                        <p>Fast, reliable quantity take-offs for planning, procurement, and cost control.</p>
                    </div>
                </section>

                {/* OVERVIEW */}
                <section className="rp-section">
                    <h2>Overview</h2>
                    <p>
                        We deliver detailed rebar quantity take-offs with diameter-wise breakdowns, laps, wastage
                        allowances, and element-wise summaries, aligned to project specs for accurate budgeting and procurement.
                    </p>
                </section>

                {/* ESTIMATION FEATURES */}
                <section className="rp-section rp-grid">
                    <div>
                        <h3>Deliverables</h3>
                        <ul className="rp-list">
                            <li><strong>Summary sheets:</strong> Dia-wise totals and element split</li>
                            <li><strong>Assumptions:</strong> Covers, laps, hooks, splice rules documented</li>
                            <li><strong>Alternates:</strong> Option sets for spec variations</li>
                            <li><strong>Formats:</strong> Excel, CSV, PDF with source references</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Use cases</h3>
                        <ul className="rp-list">
                            <li><strong>Tendering:</strong> Bid-ready quantities and notes</li>
                            <li><strong>Procurement:</strong> Cut & bend planning, delivery phasing</li>
                            <li><strong>Cost control:</strong> Baseline vs. actual tracking</li>
                        </ul>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="rp-section">
                    <h2>Workflow</h2>
                    <ol className="rp-steps">
                        <li><strong>Inputs:</strong> Structural drawings/specs, schedules</li>
                        <li><strong>Rules:</strong> Project lap/cover/hook standards applied</li>
                        <li><strong>Take-off:</strong> Element-wise tally and validations</li>
                        <li><strong>Issue:</strong> Excel + PDF with notes and exclusions</li>
                    </ol>
                </section>

                {/* SAMPLE VIEW */}
                <section className="rp-section">
                    <h2>View Sample Reports</h2>
                    <button className="rp-btn" onClick={() => setShowSamples(!showSamples)}>
                        {showSamples ? "Hide Samples" : "View Samples"}
                    </button>

                    {showSamples && (
                        <div className="rp-sample-grid">
                            {samplePdfs.map((pdf, index) => (
                                <div key={index} className="rp-sample-card">
                                    <iframe
                                        src={pdf}
                                        title={`Sample ${index + 1}`}
                                        width="100%"
                                        height="200px"
                                        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
                                    />
                                    <p style={{ textAlign: "center", marginTop: "8px" }}>
                                        Sample {index + 1}
                                    </p>
                                    <div className="rp-btn-group">
                                        <a href={pdf} download className="rp-btn">Download</a>
                                        {/* MODIFICATION 1: Change Print/View to use the modal.
                                            This replaces the 'Zoom' functionality with 'Print/View' and removes the 'Zoom' button. 
                                            The user can then use the browser's built-in print function inside the modal view.
                                        */}
                                        <button className="rp-btn" onClick={() => setActivePdf(pdf)}>Print/View</button>
                                        
                                        {/* MODIFICATION 2: Removed the old "Zoom" button: 
                                        <button className="rp-btn" onClick={() => setActivePdf(pdf)}>Zoom</button>
                                        */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* MODAL VIEW FOR PRINT/VIEW */}
                {activePdf && (
                    <div className="rp-modal">
                        <div className="rp-modal-content">
                            {/* MODIFICATION 3: Change the Close button text to be more explicit, as requested. 
                                Note: Zoom/Print functionality is inherently available within the browser's iframe/PDF viewer, so removing the button is sufficient. 
                                We are using the browser's PDF viewing capabilities which provide their own Print/Zoom controls.
                            */}
                            <button className="rp-close" onClick={handleCloseModal}>
                                Close/Back
                            </button>
                            <iframe
                                src={activePdf}
                                title="Print/View PDF"
                                width="100%"
                                height="600px"
                                style={{ border: "none" }}
                            />
                        </div>
                    </div>
                )}

                {/* CTA */}
                <section className="rp-cta">
                    <h2>Need a quick TQ?</h2>
                    <p>Send your structural set—we’ll return a dia-wise summary with assumptions.</p>
                    <a className="rp-btn" href="/contact">Request estimate</a>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default RebarEstimation;