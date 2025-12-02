import React from "react";
import "./CompanyOverview.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CompanyOverview = () => {
    return (
        <>
            <NavBar />

            <div className="overview-container">

                
                {/* COMPANY OVERVIEW */}


                {/* ABOUT US */}
                <section className="overview-section aboutus-layout">
                    <div className="aboutus-image-box">
                        <img
                            src="https://images.pexels.com/photos/8962803/pexels-photo-8962803.jpeg"
                            alt="About Us - Rebar Detailing"
                        />
                    </div>

                    <div className="aboutus-content-box">
                        <h2>About Us</h2>
                        <p>
                            <strong>R & I Engineering Technology</strong> is a specialized rebar detailing company delivering
                            high-quality and code-compliant reinforcement detailing services for clients across India and worldwide.
                            With a strong team of 30+ skilled professionals, we provide accurate shop drawings that meet
                            <strong> ACI, BS, EC2, and IS standards</strong>. Our commitment to precision and client satisfaction
                            drives every project we undertake.
                        </p>
                    </div>
                </section>


                {/* MISSION SECTION */}
                <section className="overview-section image-right-layout">
                    <div className="overview-image-box">
                        <img
                            src="https://copilot.microsoft.com/th/id/BCO.ad1a7922-0d3a-491b-a732-14f5040bd8be.png"
                            alt="Mission"
                        />
                    </div>
                    <div className="overview-content-box">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to deliver accurate, timely, and high-quality rebar
                            detailing and estimation solutions that contribute to the safety and
                            efficiency of construction projects worldwide.
                        </p>
                    </div>
                </section>

                {/* VISION SECTION */}
                <section className="overview-section image-right-layout">
                    <div className="overview-image-box">
                        <img
                            src="https://copilot.microsoft.com/th/id/BCO.53564487-0b6f-441f-92ff-8883d506cc10.png"
                            alt="Vision"
                        />
                    </div>
                    <div className="overview-content-box">
                        <h2>Our Vision</h2>
                        <p>
                            To become a globally trusted partner delivering excellence in rebar detailing and estimation,
                            backed by technical expertise, advanced tools, and client satisfaction.
                        </p>
                    </div>
                </section>

                {/* VALUES */}
                <section className="overview-section">
                    <h2>Our Values</h2>
                    <p>We focus on precision, integrity, and commitment to client success.</p>
                </section>

                {/* SERVICES */}
                <section className="overview-section">
                    <h2>Core Services</h2>
                    <ul>
                        <li>Rebar Detailing (Shop & Fabrication Drawings)</li>
                        <li>Bar Bending Schedules (BBS)</li>
                        <li>Rebar Estimation & Quantity Take-Offs</li>
                        <li>As-Built Drawings</li>
                        <li>2D Drafting</li>
                        <li>Code Compliance (ACI, BS, IS, EC2)</li>
                    </ul>
                </section>

                {/* PROJECTS */}
                <section className="overview-section">
                    <h2>Projects We Support</h2>
                    <ul>
                        <li>Residential & Commercial Buildings</li>
                        <li>Industrial Structures</li>
                        <li>Infrastructure Projects (Bridges, Highways, Railways)</li>
                        <li>Power & Energy Facilities</li>
                        <li>Water Treatment Plants</li>
                    </ul>
                </section>

                {/* WHY CHOOSE US */}
                <section className="overview-section">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Team of Experienced & Certified Rebar Detailers</li>
                        <li>Strong Knowledge of International Standards</li>
                        <li>Accurate and Optimized Estimation Services</li>
                        <li>Fast Turnaround & Scalable Resources</li>
                        <li>Commitment to Quality & Client Satisfaction</li>
                        <li>Proven Domestic & International Track Record</li>
                    </ul>
                </section>

            </div>

            <Footer />
        </>
    );
};

export default CompanyOverview;
