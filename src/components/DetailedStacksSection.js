// src/components/DetailedStacksSection.jsx
import React, { useState } from 'react';
import { courseDetails } from './data';
import './DetailedStacksSection.css'; 

const DetailedStacksSection = () => {
    const [activeStack, setActiveStack] = useState('MERN');
    const currentCourse = courseDetails[activeStack];
    const technologyStacks = Object.keys(courseDetails);

    const getTabButtonClass = (stack) => {
        return `tab-button ${activeStack === stack ? 'active-tab' : ''}`;
    };

    return (
        <section className="detailed-stacks-section">
            <h2 className="detailed-stacks-header">
                💻 Full-Stack Development Paths
            </h2>

            <div className="tab-container">
                {technologyStacks.map((stack) => (
                    <button
                        key={stack}
                        onClick={() => setActiveStack(stack)}
                        className={getTabButtonClass(stack)}
                    >
                        {stack} Stack
                    </button>
                ))}
            </div>

            <div className="course-stack-content-container">
                <div className="course-content-card">
                    <h2 className="course-title-header">{currentCourse.title}</h2>
                    <p className="course-description-text">{currentCourse.description}</p>

                    <div className="course-metrics-container">
                        <div className="metric-item"><h3>Duration</h3><p className="metric-value">{currentCourse.duration}</p></div>
                        <div className="metric-item"><h3>Prerequisites</h3><p className="metric-value">{currentCourse.prerequisites}</p></div>
                        
                    </div>

                    <h3>Core Technologies</h3>
                    <ul className="technology-list">
                        {currentCourse.technologies.map((tech, index) => (<li key={index} className="technology-list-item">{tech}</li>))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DetailedStacksSection;