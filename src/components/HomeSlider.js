import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CounterBox from "./CounterBox";

// Import images
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider5 from "../assets/slider5.png";

const HomeSlider = () => {
  const navigate = useNavigate(); // Hook for navigation

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

  // Click handler for "Explore Services" button
  const handleExploreServices = () => {
    navigate("/services"); // Navigate to services page
  };

  return (
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
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Counter overlay on top of slider */}
      <div className="counter-overlay">
        <CounterBox end={500} duration={2000} label="Happy Clients" />
        <CounterBox end={1200} duration={2500} label="Projects Delivered" />
        <CounterBox end={150} duration={2200} label="Skilled Engineers" />
        <CounterBox end={18} duration={2000} label="Years Experience" />
      </div>
    </div>
  );
};

export default HomeSlider;
