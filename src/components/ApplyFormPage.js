import React from "react";
import { useLocation, } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import JobApplicationForm from "../components/JobApplicationForm";
import "./CareerApplicationPage.css";

const ApplyFormPage = () => {
  
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "Job Application";

  return (
    <>
      <NavBar />

      <div className="job-section single-form">
        <div className="job-right active">
          <h3 className="job-title">{jobTitle}</h3>

          {/* Your form component */}
          <JobApplicationForm jobTitle={jobTitle} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ApplyFormPage;
