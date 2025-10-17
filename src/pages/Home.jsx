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
import About from "../assets/AboutHome.jpg";

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
  const originalImages = [
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    Carousel6,
  ];

  // Carousel state and refs
  const [numVisible, setNumVisible] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const totalSlides = originalImages.length;

  // Create extended array for seamless infinite loop
  const extendedImages = [
    ...originalImages,
    ...originalImages,
    ...originalImages,
  ];
  const totalExtendedSlides = extendedImages.length;

  // Refs to preserve animation state
  const currentPositionRef = useRef(0);
  const startTimeRef = useRef(null);
  const pauseTimeRef = useRef(0);
  const isPausedRef = useRef(false);
  const resetPositionRef = useRef(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setNumVisible(1);
      } else if (window.innerWidth <= 991) {
        setNumVisible(2);
      } else {
        setNumVisible(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync ref with state
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Constant speed animation with seamless looping
  useEffect(() => {
    const speed = 100; // pixels per second - adjust for speed

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      if (!trackRef.current || !carouselRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const containerWidth = carouselRef.current.clientWidth;
      const cardWidth = containerWidth / numVisible;
      // const totalWidth = cardWidth * totalExtendedSlides;
      const resetThreshold = cardWidth * (totalSlides * 2); // Reset at 2/3 of total

      if (isPausedRef.current) {
        // When paused, store the current time to adjust later
        if (!pauseTimeRef.current) {
          pauseTimeRef.current = timestamp;
        }
      } else {
        // When resuming, adjust start time to account for pause duration
        if (pauseTimeRef.current) {
          const pauseDuration = timestamp - pauseTimeRef.current;
          startTimeRef.current += pauseDuration;
          pauseTimeRef.current = 0;
        }

        // Calculate elapsed time
        const elapsed = (timestamp - startTimeRef.current) / 1000; // Convert to seconds

        // Update position based on elapsed time and speed
        let newPosition = elapsed * speed;

        // Check if we need to reset position for seamless loop
        if (newPosition >= resetThreshold && !resetPositionRef.current) {
          resetPositionRef.current = true;
          // Reset to beginning of middle section for seamless transition
          startTimeRef.current = timestamp;
          newPosition = cardWidth * totalSlides; // Reset to middle section

          // Apply immediate reset without transition
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = `translateX(-${newPosition}px)`;

          // Force reflow
          trackRef.current.offsetHeight;

          // Reset the flag after a short delay
          setTimeout(() => {
            resetPositionRef.current = false;
          }, 50);
        } else {
          // Apply transform for right to left movement
          trackRef.current.style.transform = `translateX(-${newPosition}px)`;
          trackRef.current.style.transition = "none";
        }

        // Update the position ref
        currentPositionRef.current = newPosition;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [numVisible, totalExtendedSlides, totalSlides]);

  const handlePrev = () => {
    if (!trackRef.current || !carouselRef.current) return;

    const containerWidth = carouselRef.current.clientWidth;
    const cardWidth = containerWidth / numVisible;
    // const totalWidth = cardWidth * totalExtendedSlides;
    const resetThreshold = cardWidth * (totalSlides * 2);

    // Move backwards by one card width
    let newPosition = currentPositionRef.current - cardWidth;

    // Check if we're going before the middle section
    if (newPosition < cardWidth * totalSlides) {
      // Jump to the end of the extended array for seamless loop
      newPosition = resetThreshold - cardWidth;

      // Apply immediate reset without transition
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${newPosition}px)`;

      // Force reflow
      trackRef.current.offsetHeight;

      // Update start time to maintain smooth animation
      if (startTimeRef.current) {
        const currentTime = performance.now();
        const elapsed = newPosition / 100; // speed is 100px/sec
        startTimeRef.current = currentTime - elapsed * 1000;
      }
    } else {
      // Apply transform with smooth transition
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
      trackRef.current.style.transform = `translateX(-${newPosition}px)`;
    }

    // Update the position ref
    currentPositionRef.current = newPosition;

    // Remove transition after animation completes
    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
      }
    }, 500);
  };

  const handleNext = () => {
    if (!trackRef.current || !carouselRef.current) return;

    const containerWidth = carouselRef.current.clientWidth;
    const cardWidth = containerWidth / numVisible;
    // const totalWidth = cardWidth * totalExtendedSlides;
    const resetThreshold = cardWidth * (totalSlides * 2);

    // Move forwards by one card width
    let newPosition = currentPositionRef.current + cardWidth;

    // Check if we need to reset for seamless loop
    if (newPosition >= resetThreshold) {
      // Reset to beginning of middle section
      newPosition = cardWidth * totalSlides;

      // Apply immediate reset without transition
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${newPosition}px)`;

      // Force reflow
      trackRef.current.offsetHeight;

      // Update start time to maintain smooth animation
      if (startTimeRef.current) {
        const currentTime = performance.now();
        const elapsed = newPosition / 100; // speed is 100px/sec
        startTimeRef.current = currentTime - elapsed * 1000;
      }
    } else {
      // Apply transform with smooth transition
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
      trackRef.current.style.transform = `translateX(-${newPosition}px)`;
    }

    // Update the position ref
    currentPositionRef.current = newPosition;

    // Remove transition after animation completes
    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
      }
    }, 500);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
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
                  onClick={() => navigate("/computer-hardware")}
                >
                  <FaDesktop className="me-2" /> Computer Hardware
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                  onClick={() => navigate("/it-services")}
                >
                  <FaServer className="me-2" /> Information Technology Services
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                  onClick={() => navigate("/office-products")}
                >
                  <FaBriefcase className="me-2" /> Office Products & Supplies
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                  onClick={() => navigate("/industrial-products")}
                >
                  <FaIndustry className="me-2" /> Industrial Products & Supplies
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                  onClick={() => navigate("/furniture")}
                >
                  <FaChair className="me-2" /> Furniture & Furnishings
                </Button>
                <Button
                  variant="primary"
                  className="hero-button d-flex align-items-center"
                  onClick={() => navigate("/medical-equipment")}
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
              <h2 className="core-heading">
                ICloud Technologies Core Competencies
              </h2>
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
                As a trusted supplier, icloud provides high-quality products and
                services to our customers either individuals or the business. We
                are committed to providing reliable and cost-effective options
                tailored to your unique needs, ensuring satisfaction and great
                value for your money.
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
          <div
            className="carousel-wrapper position-relative"
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="carousel-container">
              <div className="carousel-track" ref={trackRef}>
                {extendedImages.map((image, idx) => (
                  <Card
                    key={idx}
                    className="featured-card p-2"
                    style={{ flex: `0 0 ${100 / numVisible}%` }}
                  >
                    <Card.Img
                      variant="top"
                      src={image}
                      alt={`Featured Product ${(idx % totalSlides) + 1}`}
                      className="featured-img"
                    />
                  </Card>
                ))}
              </div>
            </div>
            <div className="carousel-controls">
              <Button
                className="carousel-control-btn prev-btn"
                onClick={handlePrev}
              >
                <FaChevronLeft className="me-1" />
                Previous
              </Button>
              <Button
                className="carousel-control-btn next-btn"
                onClick={handleNext}
              >
                Next
                <FaChevronRight className="ms-1" />
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
