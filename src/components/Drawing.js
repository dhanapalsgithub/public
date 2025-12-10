import React, { useState } from "react";
import "./Drawing.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

// Import images from src/assets/portfolio
import residentialTower from "../assets/portfolio/high tower.jpeg";
import industrialShed from "../assets/portfolio/indus shed.jpeg";
import bridgeDeck from "../assets/portfolio/bridge.jpeg";
import commercialComplex from "../assets/portfolio/commericial.jpeg";

const projects = [
  {
    title: "High-Rise Residential Tower",
    description: "Complete rebar detailing with dia-wise schedules, lap lengths, and bar bending lists for major high-rise structures.",
    image: residentialTower
  },
  {
    title: "Industrial Shed",
    description: "Heavy-duty detailing for steel reinforcement in large foundations, columns, and structural slabs of industrial facilities.",
    image: industrialShed
  },
  {
    title: "Bridge Deck",
    description: "Precision detailing for critical infrastructure elements like deck slabs, main beams, and complex reinforcement cages, ensuring long-term durability.",
    image: bridgeDeck
  },
  {
    title: "Commercial Complex",
    description: "Comprehensive detailing with element-wise breakdowns, detailed bar bending schedules, and construction-ready drawings for multi-story commercial buildings.",
    image: commercialComplex
  }
];

const Drawing = () => {
  // State to manage the modal (lightbox)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null); // Clear the selected project
  };

  return (
    <>
      <NavBar />

      {/* The Modal Component (Lightbox) */}
      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* Prevent clicks inside the content from closing the modal */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="modal-img-expanded" 
              />
              <div className="modal-description">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="drawing-hero">
        <div className="drawing-hero-content">
          <h1>Rebar Detailing Portfolio</h1>
          <p>
            Explore our completed projects showcasing precision, compliance with international standards,
            and architectural excellence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid - Added onClick to trigger modal */}
      <section className="drawing-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="drawing-card"
            onClick={() => openModal(project)} 
          >
            <img src={project.image} alt={project.title} className="drawing-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      {/* Detailed Content Section */}
      <section className="drawing-content">
        <h2>About Rebar Detailing</h2>
        <p>
          Rebar detailing is an essential aspect of construction that involves the creation of detailed
          drawings and specifications for reinforcing steel, commonly known as rebar, within a concrete
          structure. Rebar is crucial in reinforcing concrete and enhancing its strength and structural
          integrity.
        </p>
        <p>
          The process of rebar detailing begins with the structural design of a building or structure.
          The structural engineer determines the required amount and configuration of rebar to withstand
          the anticipated loads and stresses. The rebar detailing team works closely with the structural
          engineer to understand the design requirements and develop accurate and comprehensive rebar
          detailing plans.
        </p>
        <p>
          The primary objective of rebar detailing is to ensure that the rebar is correctly positioned
          within the concrete elements, such as beams, columns, slabs, and walls, to provide optimal
          reinforcement. This involves considering factors such as rebar size, spacing, lap lengths,
          bends, hooks, maximum rebar cut length, and anchorage requirements.
        </p>

        <h3>We follow International Industry Standards & Codes:</h3>
        <ul>
          <li>ACI – American Concrete Institute</li>
          <li>ASTM – American Society for Testing and Materials</li>
          <li>BS – British Standard</li>
          <li>CRSI – Concrete Reinforcing Steel Institute</li>
          <li>RSIO – Reinforcing Steel Institute of Ontario</li>
        </ul>

        <h3>Steps in Rebar Detailing:</h3>
        <ul>
          <li><strong>Review of design documents:</strong> Thorough study of structural drawings and specifications.</li>
          <li><strong>Creation of rebar shop drawings:</strong> Detailed placement and configuration plans.</li>
          <li><strong>Bar bending schedules:</strong> Complete list of rebar elements with sizes, shapes, and quantities.</li>
          <li><strong>3D modelling and coordination:</strong> Virtual representation to identify clashes and optimize design.</li>
          <li><strong>On-site support:</strong> Assistance during construction to ensure proper placement.</li>
        </ul>

        <h3>Applications:</h3>
        <p>
          We implement rebar detailing services on Residential, Commercial, Institutional, Public, and
          Sports & Entertainment Buildings.
        </p>

        <h3>Software Used:</h3>
        <ul>
          <li>AutoCAD</li>
          <li>Revit</li>
          <li>Cads RC</li>
          <li>ASA Rebar</li>
        </ul>

        <p>
          Accurate and comprehensive rebar detailing is essential for constructing safe, durable, and
          efficient concrete structures. It minimizes errors, reduces wastage, and ensures compliance
          with international standards.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Drawing;