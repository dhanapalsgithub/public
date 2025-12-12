// src/components/CourseOfferingsSection.jsx
import React, { useState } from 'react'; // <--- Import useState
import CourseCard from './CourseCard';
import InterestFormModal from './InterestFormModal'; // <--- Import Modal
import { mainCourseOfferings } from './data';
import './CourseOfferingsSection.css'; 
// Ensure CourseCard.jsx is using a separate file for its styles, or use inline styles for the hover effect

const CourseOfferingsSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');

 

    const openModal = (courseTitle) => {
        setSelectedCourse(courseTitle);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCourse('');
    };

    return (
        <section className="course-offerings-section">
            <div className="section-padding text-center">
                <h3 className="section-subheader">Available</h3>
                <h2 className="section-header">Featured Courses</h2>
                
                <div className="course-offerings-grid">
                    {mainCourseOfferings.map((course, index) => (
                        // Pass a handler function to the CourseCard
                        <CourseCard
                            key={index}
                            title={course.title}
                            description={course.description}
                            imageUrl={course.imageUrl}
                            // New prop to handle the click action
                            onInterestClick={() => openModal(course.title)} 
                        />
                    ))}
                </div>
            </div>
            
            {/* Conditional Modal Rendering */}
            {showModal && (
                <InterestFormModal 
                    courseName={selectedCourse} 
                    onClose={closeModal} 
                />
            )}
        </section>
    );
};

export default CourseOfferingsSection;