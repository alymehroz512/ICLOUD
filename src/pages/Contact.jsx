import React, { useState, useEffect } from "react";
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
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ContactHero from "../assets/Contact.jpg";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  useEffect(() => {
    emailjs.init("Dx3xeIMyle1WkTixU"); // Your EmailJS user ID
  }, []);

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => setNotification({ message: "", type: "" }), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const validateForm = (form) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !phone || !message) {
      setNotification({
        message: "Please fill in all required fields before submitting.",
        type: "error",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setNotification({
        message: "Please enter a valid email address.",
        type: "error",
      });
      return false;
    }

    return true;
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  if (!validateForm(form)) return;

  setIsSending(true);

  // ✅ Set reply_to properly
  form.querySelector('input[name="reply_to"]').value = form.email.value;

  emailjs
    .sendForm("service_o0hu38r", "template_gtw2vhe", form)
    .then(
      (result) => {
        console.log("SUCCESS:", result.text);
        setIsSending(false);
        setNotification({
          message: "Your message has been sent successfully! We will get back to you shortly.",
          type: "success",
        });
        form.reset();
      },
      (error) => {
        console.error("FAILED:", error);
        setIsSending(false);
        setNotification({
          message: "Oops! Something went wrong. Please check your details and resend.",
          type: "error",
        });
      }
    );
};

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      text: <>32 Jacob Wy Collegeville, PA 19426, USA</>,
    },
    {
      icon: <FaPhoneAlt className="contact-icon" />,
      text: "+1 214 699 6207",
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      text: "Info@icloudtechnologies.us",
    },
  ];

  return (
    <>
      {notification.message && (
        <div className={`custom-toast square ${notification.type} slide-in`}>
          {notification.type === "success" ? (
            <FaCheckCircle className="me-2 toast-icon success-icon" />
          ) : (
            <FaExclamationCircle className="me-2 toast-icon error-icon" />
          )}
          <span className="toast-message">{notification.message}</span>
        </div>
      )}

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

      {/* Contact Form Section */}
      <section className="contact-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.752920196315!2d-75.4666391!3d40.19231179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6909b084cdbbb%3A0xcd9e8d1773ffe3f9!2s32%20Jacob%20Wy%2C%20Collegeville%2C%20PA%2019426%2C%20USA!5e0!3m2!1sen!2s!4v1761062312491!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </Col>

            <Col md={6}>
              <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                  <input type="hidden" name="time" value={new Date().toLocaleString()} />
                  <input type="hidden" name="year" value={new Date().getFullYear()} />
                  <input type="hidden" name="reply_to" />

                  <Row className="mb-3">
                    <Col md={4}>
                      <FloatingLabel controlId="floatingName" label="Your Name">
                        <Form.Control type="text" placeholder="Your Name" name="name" />
                      </FloatingLabel>
                    </Col>
                    <Col md={4}>
                      <FloatingLabel controlId="floatingEmail" label="Email Address">
                        <Form.Control type="email" placeholder="Email" name="email" />
                      </FloatingLabel>
                    </Col>
                    <Col md={4}>
                      <FloatingLabel controlId="floatingPhone" label="Phone Number">
                        <Form.Control type="tel" placeholder="Phone Number" name="phone" />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <FloatingLabel controlId="floatingProduct" label="Product Name">
                        <Form.Control type="text" placeholder="Product Name" name="product" />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel controlId="floatingModel" label="Model No.">
                        <Form.Control type="text" placeholder="Model No." name="model" />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <FloatingLabel controlId="floatingMessage" label="Your Message" className="mb-4">
                    <Form.Control
                      as="textarea"
                      placeholder="Your Message"
                      style={{ height: "200px", resize: "none" }}
                      name="message"
                    />
                  </FloatingLabel>

                  <Button type="submit" className="send-btn d-flex align-items-center justify-content-center" disabled={isSending}>
                    {isSending ? <Spinner animation="border" size="sm" className="me-2" /> : <FaPaperPlane className="me-2" />}
                    {isSending ? "Sending..." : "Send"}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-info-section py-5">
        <Container>
          <Row className="justify-content-center text-center g-3">
            {contactInfo.map((item, index) => (
              <Col key={index} xs={12} md={12} lg={4}>
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
