// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ComputerHardware from './pages/ComputerHardware';
import ITServices from './pages/ITServices';
import OfficeProducts from './pages/OfficeProducts';
import IndustrialProducts from './pages/IndustrialProducts';
import Furniture from './pages/Furniture';
import MedicalEquipment from './pages/MedicalEquipment';
import Footer from './components/Footer';

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* New routes for hero section buttons */}
        <Route path="/computer-hardware" element={<ComputerHardware />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/office-products" element={<OfficeProducts />} />
        <Route path="/industrial-products" element={<IndustrialProducts />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/medical-equipment" element={<MedicalEquipment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}