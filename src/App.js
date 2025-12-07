import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Service from "./components/Service";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Drawing from "./components/Drawing";
import AdminPanel from "./components/AdminPanel";

import CompanyOverview from "./components/CompanyOverview";
import RebarDetailing from "./pages/RebarDetail";
import RebarEstimation from "./pages/RebarEstimation";

import ArchitecturalService from "./pages/ArchitecturalService";
import MechanicalService from "./pages/MechanicalService";
import BIMService from "./pages/BimService";
import PrecastDetailing from "./pages/PrecastDetailing";
import ApplicationForm from "./components/ApplicatiomForm";






function App() {
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
      
         <Route path="/rebar-detailing" element={<RebarDetailing />} />
         <Route path="/rebar-estimation" element={<RebarEstimation/>} />
         <Route path="/precast-detailing" element={<PrecastDetailing/>} />
         <Route path="/architectural-services" element={<ArchitecturalService/>} />
         <Route path="/mechanical-services" element={<MechanicalService/>} />
         <Route path="/bim-services" element={<BIMService/>} />
         
          
         
        <Route path="/about" element={<About />} />
        <Route path="/company-overview" element={<CompanyOverview />} />
        <Route path="/service" element={<Service />} />
        
        <Route path="/career" element={<Career />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/admin" element={<AdminPanel />} />
        

      </Routes>

      
    </>
  );
}

export default App;
