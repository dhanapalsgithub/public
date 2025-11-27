import React from "react";
import Navbar from "./NavBar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
