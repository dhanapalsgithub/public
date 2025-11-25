import React, { useState } from "react";
import "./Career.css";
import JobApplicationForm from "../components/JobApplicationForm";

const Career = () => {
  const [showJobs, setShowJobs] = useState(false);
  const [openForm, setOpenForm] = useState(null); // which job form is open

  const toggleForm = (id) => {
    setOpenForm(openForm === id ? null : id); // open/close toggle
  };

  return (
    <div
      id="career"
      className="career-wrapper"
      style={{ backgroundImage: "url('/mnt/data/career.png')" }}
    >
      <div className="career-content">

        <h2 className="career-title">Careers</h2>
        <div className="underline"></div>

        <div className="career-box">
          <p>
            R & I ENGINEERING AND TECHNOLOGY is looking for talented professionals who are
            passionate about structural engineering.
          </p>

          <p>
            We also offer internship opportunities. Send resumes with
            <strong> "Intern Application"</strong> in the subject line.
          </p>

          <button className="career-btn" onClick={() => setShowJobs(prev => !prev)}>
            JOIN OUR TEAM
          </button>
        </div>

        {/* ---------- JOB LIST SECTION ---------- */}
        {showJobs && (
          <div className="jobs-section">
            <h3 className="job-location">Location : Chennai</h3>

            {/* ----------- Job 1 ----------- */}
            <div className="job-card" onClick={() => toggleForm(1)}>
              <span>Senior Rebar Detailer / CAD Technician</span>
              <span className="plus-icon">{openForm === 1 ? "−" : "+"}</span>
            </div>

            {openForm === 1 && (
              <JobApplicationForm jobTitle="Senior Rebar Detailer / CAD Technician" />
            )}

            {/* ----------- Job 2 ----------- */}
            <div className="job-card" onClick={() => toggleForm(2)}>
              <span>Junior Rebar Detailer / CAD Technician</span>
              <span className="plus-icon">{openForm === 2 ? "−" : "+"}</span>
            </div>

            {openForm === 2 && (
              <JobApplicationForm jobTitle="Junior Rebar Detailer / CAD Technician" />
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
