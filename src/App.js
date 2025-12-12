import { Routes, Route } from "react-router-dom";

// Standard Imports
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Service from "./components/Service";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Drawing from "./components/Drawing";
import AdminPanel from "./components/AdminPanel";
import CompanyOverview from "./components/CompanyOverview";
import ApplicationForm from "./components/ApplicatiomForm";

// Pages Imports
import RebarDetailing from "./pages/RebarDetail";
import RebarEstimation from "./pages/RebarEstimation";
import ArchitecturalService from "./pages/ArchitecturalService";
import MechanicalService from "./pages/MechanicalService";
import BIMService from "./pages/BimService";
import PrecastDetailing from "./pages/PrecastDetailing";

// 🚀 NEW IMPORT: Full Stack Course Component
import FullStackCourse from "../src/components/FullStackCourse"; // <-- Make sure the path is correct
import ClientServicesSection from "./components/ClientServicesSection";

function App() {
  return (
    <>
      <Routes>
        
        {/* PRIMARY ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/client-services" element={<ClientServicesSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/company-overview" element={<CompanyOverview />} />
        <Route path="/service" element={<Service />} />
        <Route path="/career" element={<Career />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/admin" element={<AdminPanel />} />

        {/* 🚀 NEW ROUTE FOR TECHFORGE ACADEMY */}
        <Route path="/fullstack-course" element={<FullStackCourse />} />

        {/* DETAILED SERVICE ROUTES (Consolidated Duplicates) */}
        <Route path="/rebar-detailing" element={<RebarDetailing />} />
        <Route path="/rebar-estimation" element={<RebarEstimation />} />
        <Route path="/precast-detailing" element={<PrecastDetailing />} />
        <Route path="/architectural-services" element={<ArchitecturalService />} />
        <Route path="/mechanical-services" element={<MechanicalService />} />
        <Route path="/bim-services" element={<BIMService />} />

      </Routes>
    </>
  );
}

export default App;