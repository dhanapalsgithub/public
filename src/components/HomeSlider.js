import React from "react";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";   // ✅ keep imports here
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CounterBox from "./CounterBox";

// Import images
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider5 from "../assets/slider5.png";
import NavBar from "./NavBar";
import Footer from "./Footer";

const HomeSlider = () => {
  const navigate = useNavigate();

  const slides = [slider1, slider2, slider3, slider5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  const handleExploreServices = () => {
    navigate("/drawing");   // ✅ lowercase path to match your App.jsx route
  };

  return (
    <>
      <NavBar />

      <div className="home-container">
        {/* Slider */}
        <Slider {...settings}>
          {slides.map((image, index) => (
            <div key={index}>
              <div className="slide" style={{ backgroundImage: `url(${image})` }}>
                <div className="overlay"></div>
                <div className="text-wrapper">
                  <h1 className="home-title">R & I Engineering & Technology</h1>
                  <p className="home-subtitle">
                    Professional Rebar Detailing | BIM | Estimation Services
                  </p>
                  <button className="home-btn" onClick={handleExploreServices}>
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Counter overlay */}
        <div className="counter-overlay">
          <CounterBox end={500} duration={2000} label="Happy Clients" />
          <CounterBox end={1200} duration={2500} label="Projects Delivered" />
          <CounterBox end={150} duration={2200} label="Skilled Engineers" />
          <CounterBox end={18} duration={2000} label="Years Experience" />
        </div>

        {/* Services Section */}
        <div className="home-services-container">
          <h2 className="home-services-title">Our Services</h2>

          <div className="home-services-grid">
            <div className="home-service-card">
              <Link to="/rebar-detailing" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src="https://i.pinimg.com/736x/0b/8c/86/0b8c8615aa86527ab87496b87d4d5d07.jpg"
                  alt="Steel Detailing"
                />
                <h3>Rebar Detailing Services</h3>
                <p>
                  Steel detailing services which provide detailed drawings for steel fabricators and erectors...
                </p>
              </Link>
            </div>

            <div className="home-service-card">
              <Link to="/rebar-estimation" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-core-values-concept-on-virtual-screen-business-and-finance-solutions-image_15644784.jpg"
                  alt="Rebar Estimation"
                />
                <h3>Rebar Estimation</h3>
                <p>
                  Rebar detailing services for reinforcing steel detailing and consulting services...
                </p>
              </Link>
            </div>
            <div className="home-service-card">
              <Link to="/precast-detailing" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src="https://www.shutterstock.com/image-photo/architectural-engineering-design-plan-drawing-600nw-2453988135.jpg"
                  alt="Precast Detailing"
                />
                <h3>Precast Detailing Services</h3>
                <p>
                  Precast detailing for constructing structures and prefabricated components...
                </p>
              </Link>
            </div>
            <div className="home-service-card">
              <Link to="/architectural-services" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src="https://p7.hiclipart.com/preview/175/154/374/civil-engineering-architectural-engineering-intern-project-engineering-construction.jpg"
                  alt="Architectural Services"
                />
                <h3>Architectural Services</h3>
                <p>
                  Architectural services for contractors, builders, subcontractors...
                </p>
              </Link>
            </div>

            <div className="home-service-card">
              <Link to="/mechanical-services" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src="https://wallpapers.com/images/featured/civil-engineering-background-yslw7d3oel5m2qfp.jpg"
                  alt="Mechanical Services"
                />
                <h3>Mechanical Services</h3>
                <p>Mechanical shop drawings and system coordination...</p>
              </Link>
            </div>

            <div className="home-service-card">
              <Link to="/bim-services" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                  src="https://img.goodfon.com/wallpaper/big/4/cb/construction-design-architecture-engineering-plans-projects.webp"
                  alt="BIM Services"
                />
                <h3>BIM Services</h3>
                <p>
                  Building construction sectors with BIM modeling and coordination...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeSlider;
