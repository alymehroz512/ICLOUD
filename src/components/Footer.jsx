import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaFileContract,
  FaIdBadge,
  FaKey,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "../styles/Footer.css";
import Logo from "../assets/Logo.svg"; // adjust path if needed

function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="align-items-start justify-content-between gx-4 footer-row">
          {/* Logo & Subscribe */}
          <Col lg={4} md={6} className="footer-col">
            <div>
              <div className="footer-logo mb-3">
                <img
                  src={Logo}
                  alt="Hoopoe Labs Logo"
                  className="footer-logo-img"
                />
              </div>
              <p className="footer-subscribe-text">
                Subscribe to our newsletter for updates and insights.
              </p>
              <Form className="d-flex align-items-center footer-subscribe-form">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="subscribe-input"
                />
                <Button type="submit" className="subscribe-btn">
                  <FaPaperPlane />
                </Button>
              </Form>
            </div>
          </Col>

          {/* Get in Touch */}
          <Col lg={4} md={6} className="footer-col text-start">
            <div>
              <h5 className="footer-heading">Get in Touch</h5>
              <ul className="footer-contact list-unstyled">
                <li>
                  <FaMapMarkerAlt className="footer-icon mt-1" />
                  <span>11732 SE 269th PI Kent, WA 98030-8713 USA</span>
                </li>
                <li>
                  <FaEnvelope className="footer-icon mt-1" />
                  <span>info@hoopoelabs.com</span>
                </li>
                <li>
                  <FaPhoneAlt className="footer-icon mt-1" />
                  <span>+1 214 699 6207</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* GSA Contract */}
          <Col lg={2} md={6} className="footer-col text-start">
            <div>
              <h5 className="footer-heading">GSA Contract</h5>
              <ul className="footer-gsa list-unstyled">
                <li>
                  <FaFileContract className="footer-icon mt-1" />
                  <span>47QTCA25D00EJ</span>
                </li>
                <li>
                  <FaIdBadge className="footer-icon mt-1" />
                  <span>093-613-345</span>
                </li>
                <li>
                  <FaKey className="footer-icon mt-1" />
                  <span>K8QQY192NVC6</span>
                </li>
                <li>
                  <FaBuilding className="footer-icon mt-1" />
                  <span>111A8</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Quick Links Centered Before HR */}
        <div className="footer-bottom-links text-center mt-sm-2 mt-lg-5 mb-5">
          <Link to="/" className="footer-bottom-link">Home</Link>
          <div className="vr mx-3"></div>
          <Link to="/about" className="footer-bottom-link">About</Link>
          <div className="vr mx-3"></div>
          <Link to="/services" className="footer-bottom-link">Services</Link>
          <div className="vr mx-3"></div>
          <Link to="/contact" className="footer-bottom-link">Contact</Link>
        </div>

        {/* Pulse HR Line */}
        <hr className="footer-divider pulse-line" />

        {/* Copyright & Social */}
        <Row className="justify-content-between align-items-center mt-3">
          <Col md="6" className="text-md-start text-center mb-3 mb-md-0">
            <p className="footer-copy">
              © {new Date().getFullYear()} <strong style={{color: '#029d7b'}}>i Cloud Technologies LLC</strong> All rights reserved
            </p>
          </Col>
          <Col md="6" className="text-md-end text-center">
            <div className="footer-social d-flex justify-content-center justify-content-md-end gap-2 flex-wrap">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
