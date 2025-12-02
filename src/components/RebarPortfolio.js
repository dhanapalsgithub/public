import React from "react";
import "./RebarPortfolio.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const projects = [
  {
    title: "High-Rise Residential Tower",
    description: "Complete rebar detailing with dia-wise schedules, lap lengths, and bar bending lists.",
    image: "/assets/portfolio/residential-tower.jpg"
  },
  {
    title: "Industrial Shed",
    description: "Heavy-duty detailing for steel reinforcement in foundations and columns.",
    image: "/assets/portfolio/industrial-shed.jpg"
  },
  {
    title: "Bridge Deck",
    description: "Precision detailing for deck slabs, beams, and reinforcement cages.",
    image: "/assets/portfolio/bridge-deck.jpg"
  },
  {
    title: "Commercial Complex",
    description: "Comprehensive detailing with element-wise breakdowns and construction-ready drawings.",
    image: "/assets/portfolio/commercial-complex.jpg"
  }
];

const RebarPortfolio = () => {
  return (
    <>
      <NavBar />
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1>Rebar Detailing Portfolio</h1>
          <p>
            Explore our completed projects showcasing precision, compliance with international standards,
            and architectural excellence.
          </p>
        </div>
      </section>

      <section className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.image} alt={project.title} className="portfolio-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default RebarPortfolio;
