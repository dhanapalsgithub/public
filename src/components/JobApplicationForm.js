import React, { useState } from "react";
import axios from "axios";

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
    "Rebar Detailing", "Rebar Estimation", "AutoCAD", "Tekla",
    "BBS", "Drawings", "CAD", "3D Modeling"
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const toggleSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("jobTitle", jobTitle);
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("experience", formData.experience);
    data.append("linkedin", formData.linkedin);
    data.append("portfolio", formData.portfolio);
    data.append("message", formData.message);
    data.append("skills", formData.skills.join(", "));
    data.append("resume", formData.resume);

    const res = await axios.post("http://localhost:5000/apply", data);

    alert(res.data.message);
  };

  return (
 <form onSubmit={handleSubmit} className="job-form-container">
  <h2>Apply for {jobTitle}</h2>

  <div className="job-form-grid">
    <input name="firstName" placeholder="First Name" onChange={handleChange} />
    <input name="lastName" placeholder="Last Name" onChange={handleChange} />
    <input name="email" placeholder="Email" onChange={handleChange} />
    <input name="phone" placeholder="Phone" onChange={handleChange} />

    <select name="experience" className="full" onChange={handleChange}>
      <option>Select Experience</option>
      <option value="0-1">0–1</option>
      <option value="1-3">1–3</option>
      <option value="3-5">3–5</option>
    </select>

    <div className="skills-box">
      {skillsList.map((skill) => (
        <button
          type="button"
          key={skill}
          className={`skill-tag ${
            formData.skills.includes(skill) ? "active" : ""
          }`}
          onClick={() => toggleSkill(skill)}
        >
          {skill}
        </button>
      ))}
    </div>

    <input name="linkedin" placeholder="LinkedIn" />
    <input name="portfolio" placeholder="Portfolio" />

    <textarea
      name="message"
      placeholder="Message"
      className="full"
      onChange={handleChange}
    ></textarea>

    <input
      type="file"
      name="resume"
      className="full"
      onChange={handleChange}
    />
  </div>

  <button type="submit" className="submit-btn">Submit Application</button>
</form>


  );
};

export default JobApplicationForm;
