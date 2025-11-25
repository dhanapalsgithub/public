import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import JobApplicationForm from "../components/JobApplicationForm";

const ApplyPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <JobApplicationForm jobTitle="Rebar Detailer" />
      </div>
      <Footer />
    </>
  );
};

export default ApplyPage;
