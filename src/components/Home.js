import React from 'react';
import './Home.css';
import { color } from 'framer-motion';

const Home = () => {
  return (
    <div
      id="home"
      className="section parallax"
      style={{ backgroundImage: "url('/assets/home-bg.jpg')" }}
    >
      <h1 style={{color:"green"}}>Welcome to R & I Engineering And Technology</h1>
    </div>
  );
};

export default Home;
