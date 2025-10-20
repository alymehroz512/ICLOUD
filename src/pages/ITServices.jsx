import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ITServices.css";
import ITHero from "../assets/ITHero.jpg"; // adjust path as needed
import ERP from "../assets/ERP.png"; // ERP image path
import CRM from "../assets/CRM.png"; // CRM image path
import AI from "../assets/AI.png"; // AI image path
import CLOUD from "../assets/CLOUD.png"; // Cloud image path

const ITServices = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="it-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${ITHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="it-hero-overlay"></div>

        <Container className="position-relative">
          <div className="it-hero-content position-relative text-center">
            <h1 className="it-hero-heading text-white">
              Information Technology Services
            </h1>
          </div>
        </Container>
      </section>

      {/* Second Section */}
      <section className="it-second-section">
        <Container>
          <h4 className="it-second-heading mb-5 text-center">
            Comprehensive IT services for seamless business operations and growth.
          </h4>

          {/* ERP Section */}
          <Row className="align-items-center mb-5">
            <Col md={6} className="text-start">
              <h2 className="erp-title">ERP</h2>
              <p className="erp-description">
                We provide tailored ERP solutions to streamline your operations
                and boost efficiency. Our systems integrate finance, HR, supply
                chain, and CRM into one platform, offering real-time insights,
                improved collaboration, and automation. Scalable for businesses
                of all sizes, our ERP services help reduce costs, enhance
                decision making, and drive growth. Optimize your workflow and
                succeed with our expert implementation and support.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img src={ERP} alt="ERP" className="erp-image img-fluid" />
            </Col>
          </Row>

          {/* CRM Section */}
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img src={CRM} alt="CRM" className="erp-image img-fluid" />
            </Col>
            <Col md={6} className="text-start">
              <h2 className="erp-title">CRM</h2>
              <p className="erp-description">
                We offer advanced CRM solutions to help businesses build stronger,
                more personalized customer relationships. Our systems centralize
                data to track interactions, manage leads, and enhance service.
                With real-time insights, you can deliver tailored experiences
                that boost satisfaction and loyalty. Designed to optimize sales,
                marketing, and support, our CRM solutions drive growth, engagement,
                and long-term success. Unlock your customer relationships' full
                potential with our expert CRM services.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Third Section - AI & Cloud */}
      <section className="it-third-section">
        <Container>
          {/* AI Section */}
          <Row className="align-items-center mb-5">
            <Col md={6} className="text-start">
              <h2 className="erp-title">Artificial Intelligence</h2>
              <p className="erp-description">
                Harness the power of Artificial Intelligence (AI) to stay ahead in
                today’s digital landscape. Our tailored AI solutions automate
                processes, optimize decision making, and enhance customer
                experiences. From machine learning to AI-powered chatbots, we
                deliver actionable insights and intelligent automation to boost
                efficiency, improve marketing, and personalize customer service.
                Drive growth and success with our cutting-edge AI services.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img src={AI} alt="Artificial Intelligence" className="erp-image img-fluid" />
            </Col>
          </Row>

          {/* Cloud Section */}
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img src={CLOUD} alt="Cloud Computing" className="erp-image img-fluid" />
            </Col>
            <Col md={6} className="text-start">
              <h2 className="erp-title">Cloud Computing</h2>
              <p className="erp-description">
                Empower your business with cutting-edge Cloud Computing solutions.
                Our secure, flexible, and cost-efficient services streamline
                operations, enhance collaboration, and enable real-time data
                access. Whether private, public, or hybrid clouds, we ensure
                seamless integration and optimized performance. Unlock the cloud's
                potential to scale, innovate, and stay agile while reducing costs
                and boosting security. Transform your business with our tailored
                cloud solutions. We offer professional SaaS, PaaS, and IaaS
                solutions tailored to streamline your operations and accelerate
                growth. From scalable cloud infrastructure to custom platforms and
                ready-to-use software, we’ve got your digital needs covered.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ITServices;
