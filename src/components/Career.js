// src/components/Career.js (No Changes Required)

import "./Career.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import careerImage from "../assets/career.png";
import { Link } from 'react-router-dom'; 

const Career = () => {
    
    return (
        <>
            <NavBar />

            <div className="career-hero">
                {/* --- Left Section: Image --- */}
                <div className="career-hero-left">
                    <img src={careerImage} alt="Structural Engineering" className="career-hero-img" />
                </div>

                {/* --- Right Section: Content and Call to Action --- */}
                <div className="career-hero-right">
                    <h2 className="career-title">Opportunities at R&I</h2>
                    
                    <p className="career-desc">
                        R & I ENGINEERING AND TECHNOLOGY is actively seeking **talented structural professionals** who are passionate about precision engineering, rebar detailing, and CAD services.
                    </p>
                    
                    <p className="career-desc">
                        We prioritize commitment, advanced **CAD/Rebar skills**, and a willingness to contribute to international projects. <b>send your Cv riengineeringtech@yahoo.com. (or)</b>
                    </p>

                    {/* 🛑 PRIMARY CTA: Link to the Conditional Application Form */}
                    <Link to="/apply" className="career-link">
                        <button className="career-btn primary-cta">
                            Join Our Team & Apply Now
                        </button>
                    </Link>
                    
                   
                    
                    {/* Rules & Regulations Section (Kept compact) */}
                    <div className="career-rules">
                        <h3>Key Requirements</h3>
                        <ul>
                            <li>✔ Proficient skill in AutoCAD, MicroStation, or Rebar detailing is mandatory.</li>
                            
                            <li>✔ Willingness to **relocate anywhere** based on project needs.</li>
                            <li>✔ Must possess a valid passport (preferred).</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Career;