// src/components/AcademyAndServices.jsx

import React from "react";
// Import all section components
import HeroSection from "./HeroSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CourseOfferingsSection from "./CourseOfferingsSection";
import EnrollmentBenefitsSection from "./EnrollmentBenefitsSection";
import DetailedStacksSection from "./DetailedStacksSection";
import ClientServicesSection from "./ClientServicesSection";
import ContactSection from "./ContactSection";

// Import existing layout components (NavBar/Footer are assumed)
import NavBar from "./NavBar";
import Footer from "./Footer";

// Import the external CSS file


const AcademyAndServices = () => {
    return (
        <>
            <NavBar />
            <main className="academy-main-content">
                <HeroSection />
                <WhyChooseUsSection />
                
                <EnrollmentBenefitsSection />
                <CourseOfferingsSection />
                <DetailedStacksSection />
                <ClientServicesSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default AcademyAndServices;