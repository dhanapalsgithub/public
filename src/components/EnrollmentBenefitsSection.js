// src/components/EnrollmentBenefitsSection.jsx
import React from 'react';
import { FiCheckCircle, FiUsers, FiShuffle, FiAward, FiDollarSign, FiMessageSquare } from 'react-icons/fi';
import './EnrollmentBenefitsSection.css'; 

const benefitsData = [
    { icon: FiCheckCircle, title: 'Unlimited Access', description: 'Get access to all the courses and content without any limits.' },
    { icon: FiUsers, title: 'Expert Teachers', description: 'Learn from the best educators with years of experience.' },
    { icon: FiShuffle, title: 'Personalized Learning', description: 'Tailor your learning journey to fit your needs and goals.' },
    { icon: FiAward, title: 'Placement Assistance', description: 'Dedicated support to help you land your dream job.' },
    { icon: FiDollarSign, title: 'Cost Effective', description: 'High-quality education at an affordable price.' },
    { icon: FiMessageSquare, title: 'Continuous Support', description: 'Round-the-clock assistance and doubt clarification.' },
];

const EnrollmentBenefitsSection = () => {
    return (
        <section className="enrollment-benefits-section">
            <h2 className="enrollment-header">Enrollment Includes</h2>
            <p className="enrollment-subheader">Start your journey to success today! Enroll now and enjoy these amazing benefits designed to empower your learning experience.</p>
            
            <div className="benefits-grid">
                {benefitsData.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <div key={index} className="benefit-card">
                            <Icon className="benefit-icon" />
                            <h4>{benefit.title}</h4>
                            <p>{benefit.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default EnrollmentBenefitsSection;