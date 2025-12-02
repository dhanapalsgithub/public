import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Career.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const navigate = useNavigate();

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    // NEW → Navigate to new page
    const goToApplicationPage = (job) => {
        navigate(`/apply/${job.id}`, { state: { jobTitle: job.title } });
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
                    <label htmlFor="acceptTerms">I agree to the above terms & conditions.</label>
                </div>

                <h3 className="job-location-title">Select Location</h3>

                <select
                    className="location-dropdown"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    disabled={!acceptedTerms}
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
                            <div className="job-left">
                                {jobData[selectedLocation].map((job) => (
                                    <div key={job.id} className="job-card">
                                        <span>{job.title}</span>
                                        <span
                                            className="plus-icon"
                                            onClick={() => goToApplicationPage(job)}
                                        >
                                            +
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-jobs-text">🚫 No job vacancies available for this location.</p>
                        )}
                    </>
                )}
            </div>

            <Footer />
        </>
    );
};

export default CareerApplicationPage;
