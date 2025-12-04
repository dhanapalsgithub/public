import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../api";

const JobApplicationForm = () => {
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "General Application";

  const [formData, setFormData] = useState({
    jobTitle,
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value || "");
    });
    if (resume) {
      data.append("resume", resume);
    }

    try {
      const res = await API.post("/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message || "Application Submitted!");
      setFormData({
        jobTitle,
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
      setResume(null);
    } catch (err) {
      console.error("Application error:", err.response?.data || err.message);
      alert("Error submitting application. Please check your inputs or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <h2>Apply for {jobTitle}</h2>
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} />
      <input type="url" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} />
      <input type="url" name="portfolio" placeholder="Portfolio URL" value={formData.portfolio} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
      <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange}></textarea>
      <input type="file" name="resume" onChange={handleFileChange} />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default JobApplicationForm;
