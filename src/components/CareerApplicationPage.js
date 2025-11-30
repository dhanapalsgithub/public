import React, { useState } from "react";
import "./Career.css";
import JobApplicationForm from "../components/JobApplicationForm";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./CareerApplicationPage.css";

const jobData = {
    India: [
        { id: 1, title: "Senior Rebar Detailer / CAD Technician" },
        { id: 2, title: "Junior Rebar Detailer / CAD Technician" },
    ],
    USA: [],
    Canada: [],
    Europe: [],
    UAE: [],
};


const CareerApplicationPage = () => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [openForm, setOpenForm] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showJobAlert, setShowJobAlert] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const toggleForm = (id) => setOpenForm(openForm === id ? null : id);
    const handleSuccess = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2500);
    };
    const handleOpenFormClick = () => {
        if (!openForm) setShowJobAlert(true);
    };
    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
        setOpenForm(null);
    };

    return (
        <>
            <NavBar />

            <div className="job-section">
                <h3 className="job-location-title">Terms & Conditions</h3>
                <ul className="terms-list">
                    <li>✔ You must have a valid passport.</li>
                    <li>✔ You should be willing to relocate anywhere if required.</li>
                    <li>✔ You agree to provide accurate information in your application.</li>
                </ul>

                <div className="terms-checkbox">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <label htmlFor="acceptTerms">
                        I have read and agree to the above terms & conditions.
                    </label>
                </div>

                <h3 className="job-location-title">Select Location</h3>
                <select
                    className="location-dropdown"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    disabled={!acceptedTerms} // disable until terms accepted
                >
                    <option value="">-- Choose Location --</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Europe">Europe</option>
                     <option value="UAE">UAE</option>
                </select>

                {selectedLocation && (
                    <>
                        <h3 className="job-location-title">Location: {selectedLocation}</h3>

                        {jobData[selectedLocation].length > 0 ? (
                            <div className="job-flex">
                                <div className="job-left">
                                    {jobData[selectedLocation].map((job) => (
                                        <div
                                            key={job.id}
                                            className="job-card"
                                            onClick={() => toggleForm(job.id)}
                                        >
                                            <span>{job.title}</span>
                                            <span className="plus-icon">{openForm === job.id ? "−" : "+"}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="job-right" onClick={handleOpenFormClick}>
                                    {jobData[selectedLocation].map((job) =>
                                        openForm === job.id ? (
                                            <JobApplicationForm
                                                key={job.id}
                                                jobTitle={job.title}
                                                onSuccess={handleSuccess}
                                            />
                                        ) : null
                                    )}

                                    {!openForm && (
                                        <p className="select-text">👉 Select a job to open the application form</p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <p className="no-jobs-text">🚫 No job vacancies available for this location.</p>
                        )}
                    </>
                )}
            </div>

            {showSuccess && (
                <div className="inline-success-popup">
                    <div className="inline-success-box">
                        <h3>🎉 Application Submitted Successfully!</h3>
                        <p>Thank you for applying. Our team will contact you soon.</p>
                    </div>
                </div>
            )}


            {showJobAlert && (
                <div className="job-alert-popup">
                    <div className="job-alert-box">
                        <span className="close-btn" onClick={() => setShowJobAlert(false)}>&times;</span>
                        <p>⚠️ Please select a job title to apply.</p>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default CareerApplicationPage;
