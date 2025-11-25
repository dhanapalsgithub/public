import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Service from './Service';
import SampleDrawing from './Drawing';
import Career from './Career';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <main id="home"> {/* 👈 This makes it the target for #home */}
        <About />
        
      </main>
      <Service />
        <SampleDrawing />
        <Career />
        <Contact />
      <Footer />
    </>
  );
};


export default LandingPage;
