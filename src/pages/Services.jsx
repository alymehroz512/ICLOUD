import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Services.css";
import ServicesHero from "../assets/AboutHero.jpg"; // adjust path if needed
import {
  FaDesktop,
  FaServer,
  FaBriefcase,
  FaIndustry,
  FaChair,
  FaStethoscope,
} from "react-icons/fa";

function Services() {
  const servicesData = [
    {
      icon: <FaDesktop size={30} />,
      title: "Computer Hardware Solutions",
      description:
        "We provide an extensive range of computer hardware, including laptops, desktops, and accessories, offering dependable and efficient technology to support modern businesses and individual users.",
    },
    {
      icon: <FaServer size={30} />,
      title: "Information Technology Services",
      description:
        "Our IT services, featuring ERP, CRM, AI, and Cloud Computing, are designed to enhance efficiency, optimize processes, and drive innovation with customized strategies.",
    },
    {
      icon: <FaBriefcase size={30} />,
      title: "Supplying Office Products",
      description:
        "We offer a broad array of office supplies and essentials, including stationery, equipment, storage options, and maintenance tools, ensuring businesses maintain seamless operations and peak performance.",
    },
    {
      icon: <FaIndustry size={30} />,
      title: "Supplying Industrial Products",
      description:
        "Our industrial supplies are engineered for various industries, providing durable, high-quality materials that enhance productivity, streamline processes, and ensure operational excellence.",
    },
    {
      icon: <FaChair size={30} />,
      title: "Supplying Furniture & Furnishings",
      description:
        "Transform workspaces with our expertly crafted furniture and furnishings, blending functionality and elegance to create environments that inspire productivity and promote comfort.",
    },
    {
      icon: <FaStethoscope size={30} />,
      title: "Supplying Medical Equipment",
      description:
        "We offer an extensive selection of medical equipment and tools, delivering dependable, high-quality products that empower healthcare professionals to uphold patient care, safety, and operational efficiency.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="services-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${ServicesHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
      >
        <Container>
          <h1 className="services-hero-heading text-white">Our Services</h1>
        </Container>
      </section>

      {/* Services Offerings Section */}
      <section className="services-offer-section py-5">
        <Container>
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="services-offer-title">What Services We Offer</h2>
            <p className="services-offer-description">
              Explore a wide range of services designed to meet your unique
              business needs, from strategy development to seamless execution.
            </p>
          </div>

          {/* Service Cards */}
          <Row className="g-4">
            {servicesData.map((service, index) => (
              <Col md={4} key={index}>
                <Card className="service-card p-4 h-100 text-left">
                  <div className="icon-wrapper">
                    <div className="icon-diamond"></div>
                    <div className="icon-overlap">{service.icon}</div>
                  </div>
                  <h5 className="service-card-title mt-4">{service.title}</h5>
                  <p className="service-card-text">{service.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
