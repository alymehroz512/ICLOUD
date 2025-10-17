import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  Spinner,
  Card,
} from "react-bootstrap";
import "../styles/Contact.css";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import ContactHero from "../assets/Contact.jpg"; // adjust path if needed

function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSending(false);
      alert("Message sent successfully!");
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      text: (
        <>
          11732 SE 269th Pl
          <br />
          Kent, WA 98030-8713 USA
        </>
      ),
    },
    {
      icon: <FaPhoneAlt className="contact-icon" />,
      text: "+1 214 699 6207",
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      text: "info@icloudtechnologies.com",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="contact-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${ContactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
      >
        <Container>
          <h1 className="contact-hero-heading text-white">Contact Us</h1>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Column - Google Map */}
            <Col md={6} className="mb-4 mb-md-0">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.6325489187266!2d-122.18677292491445!3d47.36057150493653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905ed0d041889d%3A0x8d735c5cca8488!2s11732%20SE%20269th%20Pl%2C%20Kent%2C%20WA%2098030%2C%20USA!5e0!3m2!1sen!2s!4v1737578988815!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </Col>

            {/* Right Column - Contact Form */}
            <Col md={6}>
              <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                  {/* First Row - Name, Email, Phone */}
                  <Row className="mb-3">
                    <Col md={4}>
                      <FloatingLabel
                        controlId="floatingName"
                        label="Your Name"
                        className="mb-3 mb-md-0"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={4}>
                      <FloatingLabel
                        controlId="floatingEmail"
                        label="Email Address"
                        className="mb-3 mb-md-0"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={4}>
                      <FloatingLabel
                        controlId="floatingPhone"
                        label="Phone Number"
                        className="mb-3 mb-md-0"
                      >
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          required
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  {/* Second Row - Product Name, Model No. */}
                  <Row className="mb-3">
                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingProduct"
                        label="Product Name"
                        className="mb-3 mb-md-0"
                      >
                        <Form.Control type="text" placeholder="Product Name" />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingModel"
                        label="Model No."
                        className="mb-3 mb-md-0"
                      >
                        <Form.Control type="text" placeholder="Model No." />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  {/* Message Field */}
                  <FloatingLabel
                    controlId="floatingMessage"
                    label="Your Message"
                    className="mb-4"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Your Message"
                      style={{ height: "200px", resize: "none" }}
                      required
                    />
                  </FloatingLabel>

                  {/* Send Button */}
                  <Button
                    className="send-btn small-btn"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="me-2" />
                        Send
                      </>
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Cards Section */}
      <section className="contact-info-section py-5">
        <Container>
          <Row className="justify-content-center text-center g-3">
            {contactInfo.map((item, index) => (
              <Col key={index} md={4}>
                <Card className="contact-info-card d-flex flex-row align-items-center p-3">
                  <div className="contact-icon-box me-3">{item.icon}</div>
                  <div className="contact-info-text-box text-start">
                    <h6 className="contact-info-text mb-0">{item.text}</h6>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
