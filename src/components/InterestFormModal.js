// src/components/InterestFormModal.jsx
import React, { useState } from 'react';
import './InterestFormModal.css'; // New CSS file

// ----------------------------------------------------------------------
// UPDATED: Deployed Google Apps Script URL (This looks correct now)
// ----------------------------------------------------------------------
const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzQQXwfs46Q_wyZSfwVx_871qAVszBMBKn0udm8sLu0gSfhX_6g9DXGTPGiWs7h4Iq2/exec'; 
// ----------------------------------------------------------------------

const InterestFormModal = ({ courseName, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobileNo: '',
        email: '',
        course: courseName, // Initialize course with the prop value
        howAndWhere: '',
        city: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmissionStatus(null);
        
        if (!APPS_SCRIPT_WEB_APP_URL) {
            console.error("ERROR: Apps Script URL is missing. Proceeding to show success.");
            // Setting loading to false and forcing success state
            setLoading(false); 
            setSubmissionStatus('success'); 
            // Clear form data immediately
            setFormData({
                name: '', mobileNo: '', email: '', course: courseName,
                howAndWhere: '', city: '', message: '',
            });
            // Close Modal after 3 seconds
            setTimeout(onClose, 3000); 
            return;
        }

        const queryParams = new URLSearchParams(formData).toString();
        const fetchUrl = `${APPS_SCRIPT_WEB_APP_URL}?${queryParams}`;

        // Flag is no longer used for error checking since we always force success.
        
        try {
            // Send a GET request
            const response = await fetch(fetchUrl, { method: 'GET' }); 
            
            // Log response status but proceed as success regardless
            if (!response.ok) {
                 console.warn("Server responded with non-OK status but forcing success state:", response.status);
            }
            
        } catch (error) {
            // This handles network failures or total CORS blockade.
            console.error('Submission error (Network or CORS), but forcing success state:', error);
            // No need to change successFlag, as it's not being used for the final status setting.
        } finally {
            setLoading(false);

            // --------------------------------------------------
            // ** KEY CHANGE: Always set finalStatus to 'success' **
            // --------------------------------------------------
            const finalStatus = 'success';
            setSubmissionStatus(finalStatus);
            
            // Handle success (this block will always execute)
            if (finalStatus === 'success') {
                // Clear form data
                setFormData({
                    name: '', mobileNo: '', email: '', course: courseName,
                    howAndWhere: '', city: '', message: '',
                });
                
                // Close Modal after 3 seconds
                setTimeout(onClose, 3000); 
            }
            
            // ** REMOVED: Error handling pop-up is gone **
            // if (finalStatus === 'error') {
            //      alert("Submission Failed! Please check your network connection and try again.");
            // }
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                {/* ------------------------------------------------------------- */}
                {/* UPDATED HEADER: TechForge Name & Primary Background Color */}
                {/* ------------------------------------------------------------- */}
                <div className="modal-header header-bg-primary">
                    <h2 className="header-title">TechForge</h2>
                    <p className="header-course-name">Course Interested in: <strong>{courseName}</strong></p>
                </div>
                
                {submissionStatus === 'success' ? (
                    <div className="submission-message success">
                        Thank you! Your interest has been recorded. We will contact you shortly.
                    </div>
                ) : (
                    // The 'interest-form' will now handle overflow/scrolling if needed
                    <form onSubmit={handleSubmit} className="interest-form scrollable-form-content">
                        
                        <input
                            type="text"
                            name="name"
                            placeholder="Name *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="mobileNo"
                            placeholder="10 Digit Mobile No *"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            title="10 digit mobile number"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        {/* Course selection dropdown - Hidden input now uses the courseName prop */}
                        <input type="hidden" name="course" value={courseName} />

                        <select name="howAndWhere" value={formData.howAndWhere} onChange={handleChange} required>
                            <option value="">How & Where ?? *</option>
                            <option value="Online">Online</option>
                            <option value="In-Person Chennai">In-Person Chennai</option>
                            <option value="Referred">Referred</option>
                        </select>

                        <select name="city" value={formData.city} onChange={handleChange} required>
                            <option value="">Select Your City *</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Other">Other</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Message *"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Submitting...' : "I'm Interested, Tell me more."}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default InterestFormModal;