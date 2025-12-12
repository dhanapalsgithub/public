// src/components/CourseCard.jsx
import React from 'react';
import './CourseCard.css'; 

// Receive the new handler function as a prop
const CourseCard = ({ title, description, imageUrl, onInterestClick }) => (
    <div className="course-card-item">
        <img src={imageUrl} alt={title} className="course-card-image" />
        <div className="course-card-content">
            <h4>{title}</h4>
            <p>{description}</p>
            {/* Added a clear button to trigger the modal */}
            <button className="card-interest-button" onClick={onInterestClick}>
                View Details & Enroll
            </button>
        </div>
    </div>
);

export default CourseCard;