import React from "react";
import { useNavigate } from "react-router-dom";
import "./Career.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import careerImage from "../assets/career.png";

const Career = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <div className="career-hero">
        <div className="career-hero-left">
          <img src={careerImage} alt="career" className="career-hero-img" />
        </div>

        <div className="career-hero-right">
          <h2 className="career-title">Careers</h2>
          <p className="career-desc">
            R & I ENGINEERING AND TECHNOLOGY is looking for talented professionals
            who are passionate about structural engineering.
          </p>
          <p className="career-desc">
            We also offer internship opportunities. Send resumes with
            <strong> "Intern Application"</strong> in the subject line.
          </p>

          <button className="career-btn" onClick={() => navigate("/careers/apply")}>
            JOIN OUR TEAM
          </button>

          {/* Rules & Regulations Section */}
          <div className="career-rules">
            <h3>Rules & Regulations to Apply</h3>
            <ul>
              <li>✔ Applicants must have a valid passport.</li>
              <li>✔ Willingness to relocate anywhere if required.</li>
              <li>✔ Commitment to company policies and ethical standards.</li>
              <li>✔ Provide accurate and verifiable information in the application.</li>
            </ul>




          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Career;
