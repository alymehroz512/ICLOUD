import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";
import AboutHero from "../assets/AboutHero.jpg";
import AboutImage from "../assets/CompanyImage.jpg";
import Stand from "../assets/Stand.jpg";
import Who from "../assets/Who.jpg";
import Products from "../assets/Products.jpg";

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // replace with your contact page route
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="about-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${AboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
      >
        <Container>
          <h1 className="about-hero-heading text-white">About Us</h1>
        </Container>
      </section>

      {/* Company History Section */}
      <section className="company-history-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src={AboutImage}
                alt="Company History"
                className="img-fluid shadow-sm"
              />
            </Col>
            <Col md={6}>
              <h5
                className="text-uppercase fw-bolder mb-2"
                style={{ color: "#029D7B" }}
              >
                We are icloud technologies
              </h5>
              <h2 className="company-history-title mb-3">Company History</h2>
              <p className="company-history-text">
                ICloud Technologies is a reliable supplier of computer hardware, office,
                industrial, and medical supplies, along with IT services for
                individuals and industries like healthcare, finance, and
                e-commerce. Our goal is to meet customer needs by providing
                high-quality products and services. Since its inception we have
                tried our best and have achieved excellent results in delivering
                the products in time and cost effectively for our customers.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Where We Stand Section */}
      <section className="where-we-stand-section py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="where-we-stand-title text-uppercase mb-3">
                Where We Stand
              </h2>
              <p className="where-we-stand-text">
                At ICloud Technologies, we are committed to providing high-quality
                products and services with integrity and customer satisfaction
                at the core. As a trusted supplier, we build long-lasting
                partnerships by fulfilling the needs of businesses of all sizes.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={Stand}
                alt="Where We Stand"
                className="img-fluid shadow-sm"
              />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img src={Who} alt="Who We Are" className="img-fluid shadow-sm" />
            </Col>
            <Col md={6}>
              <h2 className="who-we-are-title mb-3 text-uppercase">
                Who We Are
              </h2>
              <p className="who-we-are-text">
                ICloud Technologies is a reliable supplier offering a wide range of
                products and services to meet diverse industry needs. We provide
                high-quality supplies that enhance efficiency and productivity,
                ensuring businesses have the resources they need to operate
                smoothly in a competitive market.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Section */}
      <section
        className="products-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${Products})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="products-overlay"></div>
        <Container>
          <h2 className="products-heading text-white">
            Best High-Quality Products & Services for Individuals
            <br /> and Businesses at Your Fingertips.
          </h2>
        </Container>
      </section>

      {/* Our Expert People Section */}
      <section className="our-expert-section d-flex align-items-center mt-3">
        <Container>
          <div className="our-expert-content text-start">
            <h5 className="our-expert-subtitle">Our Expert People</h5>
            <h2 className="our-expert-title">What We Do</h2>
            <p className="our-expert-text">
              At ICloud Technologies, we supply a wide range of products and services to
              meet the needs of businesses across various industries. Our
              offerings include computer hardware, office supplies, industrial
              products, furniture, and medical resources. We focus on delivering
              scalable and cost-effective products that enhance operational
              efficiency and security, helping businesses thrive in an
              ever-evolving market.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section d-flex align-items-center">
        <Container>
          <div className="cta-content text-start">
            <h5 className="cta-subtitle">
              We’re here to help to grow your business.
            </h5>
            <h2 className="cta-title">
              Looking for the Best IT Business Solutions?
            </h2>
            <Button className="cta-button" onClick={handleClick}>Start Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
