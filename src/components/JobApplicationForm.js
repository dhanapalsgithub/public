import React, { useState } from "react";
import "./JobApplicationForm.css";

const JobApplicationForm = ({ jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    linkedin: "",
    portfolio: "",
    message: "",
    skills: [],
    resume: null,
  });

  const skillsList = [
    "Rebar Detailing",
    "Rebar Estimation",
    "AutoCAD",
    "Tekla Structures",
    "RebarCAD",
    "Bar Bending Schedule (BBS)",
    "Structural Drawings Reading",
    "3D Modeling",
    "ACI / BS / IS Codes Knowledge",
    "Shop Drawings",
    "As-Built Drawings",
    "Communication Skills",
    "Problem Solving",
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const toggleSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="job-form-wrapper">
      <h2 className="job-form-title">Apply for {jobTitle}</h2>
      <div className="underline"></div>

      <form className="job-form" onSubmit={handleSubmit}>

        {/* NAME ROW */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" name="firstName" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" name="lastName" required onChange={handleChange} />
          </div>
        </div>

        {/* EMAIL & PHONE */}
        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="text" name="phone" required onChange={handleChange} />
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="form-group">
          <label>Total Years of Experience *</label>
          <select name="experience" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="0-1">0–1 Years</option>
            <option value="1-3">1–3 Years</option>
            <option value="3-5">3–5 Years</option>
            <option value="5-10">5–10 Years</option>
            <option value="10+">10+ Years</option>
          </select>
        </div>

        {/* SKILLS SECTION */}
        <div className="skills-section">
          <label>Skills (Select All That Apply) *</label>
          <div className="skills-list">
            {skillsList.map((skill, index) => (
              <button
                type="button"
                key={index}
                className={`skill-btn ${formData.skills.includes(skill) ? "active" : ""}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="form-group">
          <label>LinkedIn / Portfolio (Optional)</label>
          <input type="text" name="linkedin" onChange={handleChange} />
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label>Why Should We Hire You?</label>
          <textarea name="message" rows="4" onChange={handleChange}></textarea>
        </div>

        {/* RESUME UPLOAD */}
        <div className="form-group">
          <label>Upload Resume (PDF/DOC) *</label>
          <input type="file" name="resume" required onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
