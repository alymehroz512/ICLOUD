// components/CustomNavbar.jsx
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CustomNavbar.css';
import Logo from '../assets/Logo.svg';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => setExpanded(false);

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    handleNavClick();
  };

  return (
    <Navbar
      expand="lg"
      style={{backgroundColor: '#E8E8E8'}}
      fixed="top"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      {/* Logo */}
      <Navbar.Brand>
        <img src={Logo} alt="Logo" className="logo ms-lg-5 ms-3" />
      </Navbar.Brand>
      {/* Mobile Toggle Icon */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" style={{color: '#6b6b6b'}}>
        {expanded ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </Navbar.Toggle>
      {/* Navbar Links */}
      <Navbar.Collapse id="basic-navbar-nav" className="mx-lg-5 mx-sm-0">
        <Nav className="ms-auto mt-1">
          {/* Static Page Links */}
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="text-white nav-link-custom"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            onClick={(e) => handleLinkClick(e, "/about")}
            className="text-white nav-link-custom"
          >
            About
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/services"
            onClick={(e) => handleLinkClick(e, "/services")}
            className="text-white nav-link-custom"
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            onClick={(e) => handleLinkClick(e, "/contact")}
            className="text-white nav-link-custom"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;