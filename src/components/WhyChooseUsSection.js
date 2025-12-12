// src/components/WhyChooseUsSection.jsx
import React from 'react';
import { FiBookOpen, FiMonitor, FiHeadphones } from 'react-icons/fi';
import './WhyChooseUsSection.css'; 

const WhyChooseUsSection = () => {
    return (
        <section className="why-choose-us-grid wcu-section-background">
            <div className="wcu-image-container">
                <img 
                    src="https://cdn.pixabay.com/photo/2024/06/22/18/09/ai-generated-8846758_1280.jpg" 
                    alt="Person learning online" 
                    className="wcu-main-image" 
                />
                <p className="wcu-learning-pace-text">
                    Learn at your own pace, with unlimited access on mobile and desktop.
                </p>
            </div>
            <div className="wcu-content">
                <h3 className="wcu-subheader">Why Choose Us</h3>
                <h2 className="wcu-header">Your Learning Journey, Your Way</h2>

                <div className="wcu-feature-item">
                    <FiBookOpen className="wcu-icon" />
                    <div>
                        <h4 className="wcu-feature-title">High-Quality Content Course</h4>
                        <p className="wcu-feature-description">Explore courses tailored to provide in-depth knowledge and practical expertise.</p>
                    </div>
                </div>
                <div className="wcu-feature-item">
                    <FiMonitor className="wcu-icon" />
                    <div>
                        <h4 className="wcu-feature-title">Interactive Learning Experience</h4>
                        <p className="wcu-feature-description">Receive mentoring and tailored advice to maximize your learning potential.</p>
                    </div>
                </div>
                <div className="wcu-feature-item">
                    <FiHeadphones className="wcu-icon" />
                    <div>
                        <h4 className="wcu-feature-title">Exceptional Student Support</h4>
                        <p className="wcu-feature-description">Benefit from round-the-clock assistance to stay on track and overcome challenges.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;