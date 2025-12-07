import React, { useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'; // Import the checkmark icon
import './Career.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import structuralBg from '../assets/structural_bg1.jpg';

// 🛑 STEP 4: App Script URL-ஐ இங்கே ஒட்டவும்
const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbybQlTqCHXJmzLQYKuFBwxkrTHSfVesCIIEzG1cslgxNFgrsAUu8LonHAFV8AVh5qT_pQ/exec';

// ----------------------------------------------------------------------
// SUCCESS POP-UP COMPONENT (New)
// ----------------------------------------------------------------------
const SuccessPopup = ({ onClose }) => (
    <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <CheckCircleOutline sx={{ fontSize: 80, color: 'white', marginBottom: '15px' }} />
            <h3 className="popup-title">R & I</h3>
            <p className="popup-message">Your Application Submitted Successfully!</p>
            <button className="popup-close-btn" onClick={onClose}>
                Close
            </button>
        </div>
    </div>
);
// ----------------------------------------------------------------------

const ApplicationForm = () => {
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // ✅ New state for popup

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        experience: '',
        qualification: '',
        skill: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!agreed) {
            alert('Please agree to the terms and conditions.');
            return;
        }

        setIsSubmitting(true);

        const urlEncodedData = new URLSearchParams();
        for (const key in formData) {
            urlEncodedData.append(key, formData[key]);
        }

        try {
            const response = await fetch(APP_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlEncodedData.toString(),
            });

            const result = await response.json();

            if (result.status === 'success') {
                // alert('Your Application Submitted SucessFully.'); // 🛑 Replaced with popup
                setShowSuccessPopup(true); // ✅ Show the success popup

                // Reset form
                setFormData({ name: '', phone: '', experience: '', qualification: '', skill: '' });
                setAgreed(false);
            } else {
                alert(`Your Submission Failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('சமர்ப்பிப்பின் போது எதிர்பாராத பிழை ஏற்பட்டது.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <NavBar />

            <div className="application-bg-container" style={{ backgroundImage: `url(${structuralBg})` }}>
                <div className="application-overlay">
                    <div className="application-content-wrapper">

                        <h2 className="application-title">Join Our Team Application</h2>

                        <div className="application-terms-box animated-slide-down">
                            {/* ... (Terms and conditions) ... */}
                            <h3>Terms and Conditions</h3>
                            <ul className="terms-list">
                                <li>**Willingness to Relocate:** I confirm my willingness to relocate anywhere in India or abroad, based on the company's project requirements.</li>
                                <li>**CAD/Rebar Skills:** I possess proficient skills in AutoCAD, MicroStation, Rebar detailing, or a relevant structural discipline as required for the position.</li>
                                <li>**Commitment:** I agree to adhere to all company policies and ethical standards during employment.</li>
                            </ul>

                            <div className="agreement-checkbox">
                                <input
                                    type="checkbox"
                                    id="agreement"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />
                                <label htmlFor="agreement">
                                    I have read and agree to the above **Mandatory Terms and Conditions**.
                                </label>
                            </div>
                        </div>

                        {agreed && (
                            <div className="application-form-container animated-fade-in">
                                <h3>Personal Details & Experience</h3>
                                <form onSubmit={handleFormSubmit} className="application-form">

                                    {/* ... (Form fields remain the same) ... */}
                                    <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleFormChange} required />
                                    <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleFormChange} required />
                                    <select name="qualification" value={formData.qualification} onChange={handleFormChange} required>
                                        <option value="">Select Highest Qualification *</option>
                                        <option value="B.E./B.Tech Civil">B.E. / B.Tech (Civil)</option>
                                        <option value="M.E./M.Tech Structures">M.E. / M.Tech (Structures)</option>
                                        <option value="Diploma Civil">Diploma (Civil)</option>
                                        <option value="Other">Other Relevant Degree/Diploma</option>
                                    </select>
                                    <input type="number" name="experience" placeholder="Total Years of Relevant Experience (Years) *" value={formData.experience} onChange={handleFormChange} min="0" required />
                                    <textarea name="skill" placeholder="Briefly describe your CAD/Rebar skills and expertise *" rows="4" value={formData.skill} onChange={handleFormChange} required></textarea>

                                    <button type="submit" className="submit-app-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {!agreed && (
                            <p className="agreement-warning animated-blink">**To proceed with the application, please accept the terms and conditions above.**</p>
                        )}

                    </div>
                </div>
            </div>

            {/* ✅ Render the popup conditionally */}
            {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}

            <Footer />
        </>
    );
};

export default ApplicationForm;