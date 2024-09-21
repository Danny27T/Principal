import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Feature from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import AppointmentForm from "../components/AppointmentForm";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import MultiComponentHandler from '../components/MultiComponentHandler';
import App from "../App"; // Importa App como la ruta de inicio

const Layout = () => {
  return (
    <Router>
      <div className="sticky mt-10 top-0 z-50 py-0 backdrop-blur-lg border-b-2 border-neutral-700/80   px-0 mx-auto">
      <Navbar />
      </div>
      <div className="max-w-7xl mx-auto pt-0 px-6">
        <Routes>
          <Route path="/" element={<App />} /> {/* Página inicial */}
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/infocontacto" element={<MultiComponentHandler />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
};

export default Layout;
