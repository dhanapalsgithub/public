

import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ServicePages.css";



const ArchitecturalService = () => {
    // 🛑 Initialize the hook
    const navigate = useNavigate();

    // Function to handle the back action
    const handleBack = () => {
        // Go back one step in the browser history. 
        // This will take the user back to the previous route (Home, Service, etc.)
        navigate(-1); 
    };
  return (
    <>
      <NavBar />
     <button
                onClick={handleBack} // Use the function to go back
                className="back-button" 
                style={{color:"#272845", fontFamily:'cursive', padding:"10px ",}}
             >
                &lt;&lt; Back
             </button>
      <main className="sp-container">
       

        <section className="sp-hero sp-hero--architectural">
          <div className="sp-hero-content">
            <h1>Architectural Services</h1>
            <p>Creative, functional, and sustainable design solutions for modern projects.</p>
          </div>
        </section>

        <section className="sp-section">
          <h2>Overview</h2>
          <p>
            Our architectural team delivers innovative designs that balance aesthetics, functionality,
            and sustainability. We specialize in residential, commercial, and industrial projects.
          </p>
        </section>

        <section className="sp-section sp-grid">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Conceptual & Schematic Design</li>
              <li>Detailed Drawings & 3D Visualization</li>
              <li>Interior & Exterior Design</li>
              <li>Green Building Solutions</li>
            </ul>
          </div>
          <div>
            <h3>Advantages</h3>
            <ul>
              <li>Client-focused design process</li>
              <li>Compliance with codes & standards</li>
              <li>Integration with BIM workflows</li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ArchitecturalService;
