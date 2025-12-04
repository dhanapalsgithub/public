import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import JobApplicationForm from "../components/JobApplicationForm";

const ApplyPage = ({ jobTitle = "Rebar Detailer" }) => {
  return (
    <>
      <Navbar />
      <main className="apply-page">
        <section className="apply-section">
          <h2 className="apply-title">Apply for {jobTitle}</h2>
          <div className="apply-form-wrapper">
            <JobApplicationForm jobTitle={jobTitle} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApplyPage;
