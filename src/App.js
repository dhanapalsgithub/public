import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Service from "./components/Service";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Drawing from "./components/Drawing";
import AdminPanel from "./components/AdminPanel";
import CareerApplicationPage from "./components/CareerApplicationPage";




function App() {
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers/apply" element={<CareerApplicationPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>

      
    </>
  );
}

export default App;
