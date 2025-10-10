import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import ComH from "../assets/computer-hardware.jpg";
import IT from "../assets/information-technology.jpg";
import Office from "../assets/office-products.jpg";
import Industrial from "../assets/industrial-products.jpg";
import Furniture from "../assets/furniture.jpg";
import Medical from "../assets/medical.jpg";
import Carousel1 from "../assets/Carousel1.jpeg";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";
import Carousel4 from "../assets/Carousel4.png";
import Carousel5 from "../assets/Carousel5.png";
import Carousel6 from "../assets/Carousel6.png";
import {
  FaDesktop,
  FaServer,
  FaBriefcase,
  FaIndustry,
  FaChair,
  FaStethoscope,
  FaShieldAlt,
  FaUsers,
  FaDollarSign,
  FaTruck,
  FaExchangeAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import About from "../assets/about.jpg";

const Home = () => {
  const images = [ComH, IT, Office, Industrial, Furniture, Medical];
  const headings = [
    "Computer Hardware",
    "Information Technology Services",
    "Office Products & Supplies",
    "Industrial Products & Supplies",
    "Furniture & Furnishings",
    "Medical Equipment",
  ];
  const descriptions = [
    "Top-tier computer components and accessories for all your computing needs.",
    "Expert IT solutions and support services to keep your business running smoothly.",
    "Essential supplies to enhance productivity in your office environment.",
    "Durable and reliable products for various industrial applications.",
    "Stylish and functional furniture options for homes and offices.",
    "Advanced medical devices and equipment for healthcare professionals.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const leftColRef = useRef(null);
  const [imageHeight, setImageHeight] = useState("auto");

  const carouselImages = [
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    Carousel6,
  ];
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const handlePrev = () => {
    setFeaturedIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (leftColRef.current) {
        setImageHeight(`${leftColRef.current.clientHeight}px`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Calculate the images to display (three at a time for larger screens, one for smaller screens)
  const getVisibleImages = () => {
    const isSmallScreen = window.innerWidth <= 767;
    const visibleImages = [];
    if (isSmallScreen) {
      visibleImages.push(carouselImages[featuredIndex]);
    } else {
      for (let i = 0; i < 3; i++) {
        const index = (featuredIndex + i) % carouselImages.length;
        visibleImages.push(carouselImages[index]);
      }
    }
    return visibleImages;
  };

  // Determine if buttons should be disabled
  const isPrevDisabled = featuredIndex === 0;
  const isNextDisabled =
    window.innerWidth <= 767
      ? featuredIndex === carouselImages.length - 1
      : featuredIndex === carouselImages.length - 3;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // replace with your contact page route
  };

  return (
    <>
      <section className="hero-section">
        <Container fluid>
          <Row className="justify-content-center align-items-center mt-3 mb-3 p-lg-5 p-sm-0">
            <Col md={6} className="order-md-2 text-center">
              <div className="hero-img-wrapper" style={{ height: imageHeight }}>
                <img
                  src={images[currentIndex]}
                  alt={headings[currentIndex]}
                  className="hero-img"
                />
                <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                  <h3 className="overlay-heading">{headings[currentIndex]}</h3>
                  <p className="overlay-description">
                    {descriptions[currentIndex]}
                  </p>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="order-md-1 text-center text-md-start"
              ref={leftColRef}
            >
              <h1 className="hero-heading">
                Driving Excellence Through Technology and Supplies
              </h1>
              <p className="hero-paragraph">
                Providing Comprehensive Computer Hardware Items, IT Services,
                Office Supplies, Industrial Products and Medical Equipment for
                individuals and the Business needs of our valued customers.
              </p>
              <div className="hero-buttons d-flex flex-column align-items-center align-items-md-start">
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                >
                  <FaDesktop className="me-2" /> Computer Hardware
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                >
                  <FaServer className="me-2" /> Information Technology Services
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                >
                  <FaBriefcase className="me-2" /> Office Products & Supplies
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                >
                  <FaIndustry className="me-2" /> Industrial Products & Supplies
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                >
                  <FaChair className="me-2" /> Furniture & Furnishings
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                >
                  <FaStethoscope className="me-2" /> Medical Equipment
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="core-section" style={{ backgroundColor: "#ffffff" }}>
        <Container fluid>
          <Row className="justify-content-center text-center p-lg-2 p-sm-0">
            <Col md={12}>
              <h2 className="core-heading">ICloud Technologies Core Competencies</h2>
              <p className="core-description">
                Real-time engagement in a wide range of products and
                professional IT services.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2 mb-2">
            <Col xs={12} sm={6} md={2} className="mb-3">
              <Card className="core-card text-center">
                <Card.Body>
                  <FaShieldAlt className="core-icon mb-3" />
                  <h5 className="core-card-heading">Trusted Supplier</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={2} className="mb-3">
              <Card className="core-card text-center">
                <Card.Body>
                  <FaUsers className="core-icon mb-3" />
                  <h5 className="core-card-heading">Dedicated Sales Team</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={2} className="mb-3">
              <Card className="core-card text-center">
                <Card.Body>
                  <FaDollarSign className="core-icon mb-3" />
                  <h5 className="core-card-heading">Competitive Pricing</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={2} className="mb-3">
              <Card className="core-card text-center">
                <Card.Body>
                  <FaTruck className="core-icon mb-3" />
                  <h5 className="core-card-heading">Expedite Delivery</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={2} className="mb-3">
              <Card className="core-card text-center">
                <Card.Body>
                  <FaExchangeAlt className="core-icon mb-3" />
                  <h5 className="core-card-heading">Hassle Free Return</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center text-center mt-4">
            <Col md={10}>
              <p className="core-footer-text">
                As a trusted supplier, icloud provides high-quality
                products and services to our customers either individuals or the
                business. We are committed to providing reliable and
                cost-effective options tailored to your unique needs, ensuring
                satisfaction and great value for your money.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-section" style={{ backgroundColor: "#f0f2f2" }}>
        <Container fluid>
          <Row className="align-items-center p-lg-5 p-sm-0">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src={About}
                alt="About Image"
                className="img-fluid about-img"
              />
            </Col>
            <Col md={6}>
              <h4 className="about-small-heading">Get to Know Us</h4>
              <h2 className="about-large-heading">Our Mission</h2>
              <p className="about-description">
                We deliver high-quality products and services designed to
                enhance efficiency, drive customer satisfaction, and empower
                businesses for long-term success.
              </p>
              <h2 className="about-large-heading">Our Vision</h2>
              <p className="about-description">
                Our goal is to be a leading provider of diverse products and IT
                services to our valued customers with swift delivery across the
                globe.
              </p>
              <Button
                variant="primary"
                className="about-button"
                onClick={handleClick}
              >
                Start Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="featured-section"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container fluid>
          <h2 className="featured-heading text-center">Featured Products</h2>
          <div className="carousel-wrapper position-relative">
            <Row className="justify-content-center">
              {getVisibleImages().map((image, idx) => (
                <Col
                  xs={12}
                  sm={4}
                  key={idx}
                  className="d-flex justify-content-center"
                >
                  <Card className="featured-card p-2">
                    <Card.Img
                      variant="top"
                      src={image}
                      alt={`Featured Product ${featuredIndex + idx + 1}`}
                      className="featured-img"
                    />
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="carousel-controls">
              <Button
                className="carousel-control-btn"
                onClick={handlePrev}
                disabled={isPrevDisabled}
              >
                <FaChevronLeft size={16} />
              </Button>
              <Button
                className="carousel-control-btn"
                onClick={handleNext}
                disabled={isNextDisabled}
              >
                <FaChevronRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section
        className="contact-section"
        style={{ backgroundColor: "#f0f2f2" }}
      >
        <Container fluid>
          <Row className="justify-content-center text-center">
            <Col md={12}>
              <h2 className="contact-heading">Our Location</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.6325489187266!2d-122.18677292491445!3d47.36057150493653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905ed0d041889d%3A0x8d735c5cca8488!2s11732%20SE%20269th%20Pl%2C%20Kent%2C%20WA%2098030%2C%20USA!5e0!3m2!1sen!2s!4v1737578988815!5m2!1sen!2s"
                  width="100%"
                  height="800"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
