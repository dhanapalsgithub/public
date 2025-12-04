import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import API from '../api';
import "./CareerApplicationPage.css";

const JobApplicationForm = () => {
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "";

  const [formData, setFormData] = useState({
    jobTitle: jobTitle,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    linkedin: "",
    portfolio: "",
    message: "",
    skills: "",
  });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (resume) {
      data.append("resume", resume);
    }

    try {
      const res = await API.post("/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Error submitting application");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <h2>Apply for {jobTitle}</h2>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
      <input type="text" name="experience" placeholder="Experience" onChange={handleChange} />
      <input type="url" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange} />
      <input type="url" name="portfolio" placeholder="Portfolio URL" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
      <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>
      <input type="file" name="resume" onChange={handleFileChange} />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
