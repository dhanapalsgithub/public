import React from 'react';
import './About.css';
import NavBar from './NavBar';
import Footer from './Footer';

const About = () => {
  // Use a placeholder image for the right column
  const placeholderImage = 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  return (
    <>
    <NavBar />
    <div id="about" className="about-section">
      <div className="about-overlay">
        <div className="about-container">
          
          {/* LEFT COLUMN: Content */}
          <div className="about-content">
            <h2 className="content-title">Welcome to R & I Engineering And Technology</h2>
            <p>
              We always deliver quality, accurate and reliable standard of reinforcement detailing within the scheduled time frame to meet the project requirements. With core competence in and related structural engineering disciplines, We offers an extremely cost-effective one-stop solution for all detailed engineering of Structural element requirements, We Strive to Increase your productivity without extra costs, by utilising our expertise rebar detailers, Estimators & Modellers.

Our team of experienced engineering professionals delivers accurate and reliable reinforcement detailing within scheduled timeframes, helping increase productivity without extra costs.
            </p>
            <p>
              
            </p>
            <button className="read-more-btn">Learn More</button>
          </div>
          
          {/* RIGHT COLUMN: Image */}
          <div className="about-image-wrapper">
            <img 
              src={placeholderImage} 
              alt="Engineering and Technology" 
              className="about-image"
            />
          </div>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;