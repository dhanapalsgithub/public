import React, { useState } from "react";
import "./Service.css";
import {
  FaTools,
  FaDraftingCompass,
  FaFileAlt,
  FaCalculator,
  FaProjectDiagram,
} from "react-icons/fa";

const Service = () => {
  const [openDetailing, setOpenDetailing] = useState(false);

  return (
    <div className="service-wrapper" id="service">
      <h2 className="service-main-title">Services</h2>
      <div className="underline"></div>

      <div className="services-grid">

        {/* Rebar Detailing with Dropdown */}
        <div className="service-card">
          <div
            className="service-card-header"
            onClick={() => setOpenDetailing(!openDetailing)}
          >
            <FaTools className="service-icon" />
            <h3>Rebar Detailing</h3>
          </div>
          <p>Accurate detailing services conforming to ACI standards.</p>

          {openDetailing && (
            <div className="dropdown-box">
              <button className="dropdown-item">USA Standard</button>
              <button className="dropdown-item">Canada Standard</button>
              <button className="dropdown-item">Euro Standard</button>
              <button className="dropdown-item">UAE Standard</button>
            </div>
          )}
        </div>

        <div className="service-card">
          <FaDraftingCompass className="service-icon" />
          <h3>Shop Drawings</h3>
          <p>
            Precise shop drawings with Bill Of Quantities, complying with industry standards.
          </p>
        </div>

        <div className="service-card">
          <FaProjectDiagram className="service-icon" />
          <h3>G.A Drawings</h3>
          <p>
            Comprehensive plans showing key dimensions with precise scale.
          </p>
        </div>

        <div className="service-card">
          <FaFileAlt className="service-icon" />
          <h3>As-Built Drawings</h3>
          <p>
            Documentation reflecting construction changes for future reference.
          </p>
        </div>

        <div className="service-card">
          <FaCalculator className="service-icon" />
          <h3>Estimation</h3>
          <p>
            Accurate estimates, quantity take-offs, and BOQ preparation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
