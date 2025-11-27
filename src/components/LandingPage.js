import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Service from './Service';
import SampleDrawing from './Drawing';
import Career from './Career';
import Contact from './Contact';
import Footer from './Footer';
import HomeSlider from './HomeSlider';

const LandingPage = () => {
  return (
    <>
      <NavBar />

      {/* HOME SECTION WITH SLIDER */}
      <section id="home" style={{ paddingTop: "0px" }}>
        <HomeSlider />
      </section>

      {/* ABOUT */}
      <section id="about" style={{ paddingTop: "80px" }}>
        <About />
      </section>

      {/* SERVICES */}
      <section id="service" style={{ paddingTop: "80px" }}>
        <Service />
      </section>

      {/* DRAWING */}
      <section id="drawing" style={{ paddingTop: "80px" }}>
        <SampleDrawing />
      </section>

      {/* CAREER */}
      <section id="career" style={{ paddingTop: "80px" }}>
        <Career />
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ paddingTop: "80px" }}>
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
