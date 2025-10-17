import React, { useState } from "react";
import { Container, Dropdown, Button, Row, Col, Card } from "react-bootstrap";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/MedicalEquipment.css";
import MedicalHero from "../assets/MedicalHero.jpg";

// --- Medical Images (placeholders; update with actual images per category) ---
import TC1 from "../assets/TC/instrument1.png";
import TC2 from "../assets/TC/instrument2.png";
import TC3 from "../assets/TC/instrument3.png";
import TC4 from "../assets/TC/instrument4.png";
import TC5 from "../assets/TC/instrument5.png";
import TC6 from "../assets/TC/instrument6.png";

import VI1 from "../assets/VI/veterinary1.png";
import VI2 from "../assets/VI/veterinary2.png";
import VI3 from "../assets/VI/veterinary3.png";
import VI4 from "../assets/VI/veterinary4.png";
import VI5 from "../assets/VI/veterinary5.png";
import VI6 from "../assets/VI/veterinary6.png";

import BI1 from "../assets/BI/beauty1.png";
import BI2 from "../assets/BI/beauty2.png";
import BI3 from "../assets/BI/beauty3.png";
import BI4 from "../assets/BI/beauty4.png";
import BI5 from "../assets/BI/beauty5.png";
import BI6 from "../assets/BI/beauty6.png";

import DI1 from "../assets/DI/dental1.png";
import DI2 from "../assets/DI/dental2.png";
import DI3 from "../assets/DI/dental3.png";
import DI4 from "../assets/DI/dental4.png";
import DI5 from "../assets/DI/dental5.png";
import DI6 from "../assets/DI/dental6.png";

import ES1 from "../assets/ES/electro1.png";
import ES2 from "../assets/ES/electro2.png";
import ES3 from "../assets/ES/electro3.png";
import ES4 from "../assets/ES/electro4.png";
import ES5 from "../assets/ES/electro5.png";
import ES6 from "../assets/ES/electro6.png";

const MedicalEquipment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("TC Instruments");

  // --- TC Instruments Products ---
  const tcInstrumentsProducts = [
    { id: 1, image: TC1, name: "Scissor" },
    { id: 2, image: TC2, name: "Forceps" },
    { id: 3, image: TC3, name: "Suture" },
    { id: 4, image: TC4, name: "Pliers" },
    { id: 5, image: TC5, name: "Pliers 2" },
    { id: 6, image: TC6, name: "Scissor" },
  ];

  // --- Veterinary Instruments Products ---
  const veterinaryInstrumentsProducts = [
    { id: 1, image: VI1, name: "Hoof Tester" },
    { id: 2, image: VI2, name: "Farriers Hammers" },
    { id: 3, image: VI3, name: "Bull Holders" },
    { id: 4, image: VI4, name: "Ear Notcher" },
    { id: 5, image: VI5, name: "Hoof Nipper" },
    { id: 6, image: VI6, name: "Schecker" },
  ];

  // --- Beauty Instruments Products ---
  const beautyInstrumentsProducts = [
    { id: 1, image: BI1, name: "Eyelash Mirror" },
    { id: 2, image: BI2, name: "Nail Cutter" },
    { id: 3, image: BI3, name: "Acrylic Nail Cutters" },
    { id: 4, image: BI4, name: "Corn Cutters" },
    { id: 5, image: BI5, name: "Manicure Care Kits" },
    { id: 6, image: BI6, name: "Barber Shears Kits" },
  ];

  // --- Dental Instruments Products ---
  const dentalInstrumentsProducts = [
    { id: 1, image: DI1, name: "Incisors & Roots" },
    { id: 2, image: DI2, name: "Root Elevator" },
    { id: 3, image: DI3, name: "Bone Rongeurs" },
    { id: 4, image: DI4, name: "Bone File" },
    { id: 5, image: DI5, name: "Needle Holders" },
    { id: 6, image: DI6, name: "Mouth Gag" },
  ];

  // --- Electro Surgical Products ---
  const electroSurgicalProducts = [
    { id: 1, image: ES1, name: "Diathermy Instruments" },
    { id: 2, image: ES2, name: "Disposable Bipolar Forcep" },
    { id: 3, image: ES3, name: "Electrosurgical Pencil" },
    { id: 4, image: ES4, name: "Gynecology Laser" },
    { id: 5, image: ES5, name: "Ophthalmic Bipolar Forcep" },
    { id: 6, image: ES6, name: "Irrigation Bipolar" },
  ];

  // --- Render Categories ---
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "TC Instruments":
        return renderSection("TC Instruments", tcInstrumentsProducts);
      case "Veterinary Instruments":
        return renderSection(
          "Veterinary Instruments",
          veterinaryInstrumentsProducts
        );
      case "Beauty Instruments":
        return renderSection("Beauty Instruments", beautyInstrumentsProducts);
      case "Dental Instruments":
        return renderSection("Dental Instruments", dentalInstrumentsProducts);
      case "Electro Surgical":
        return renderSection("Electro Surgical", electroSurgicalProducts);
      default:
        return (
          <div className="text-center mt-5">
            <h4 className="text-muted">Select a category to view products</h4>
          </div>
        );
    }
  };

  // --- Reusable Section Renderer ---
  const renderSection = (title, products) => (
    <>
      <h2 className="text-center mb-4 text-uppercase text-success fw-bold">
        {title}
      </h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );

  // --- Reusable Product Card (ribbon stays same but positioned outside) ---
  const ProductCard = ({ product }) => (
    <div className="medical-card-wrapper position-relative">
      <div className="medical-ribbon">{product.name}</div>
      <Card className="medical-card shadow-sm">
        <div className="medical-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="medical-image mt-5 mb-5"
          />
        </div>
        <Card.Body>
          <Button
            as={Link}
            to="/contact"
            variant="success"
            className="text-uppercase w-100 border-0 rounded-0"
          >
            <FaShoppingCart className="me-2" /> Order Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="medical-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${MedicalHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="medical-hero-overlay"></div>
        <Container className="position-relative">
          <div className="medical-hero-content position-relative text-center">
            <h1 className="medical-hero-heading text-white">
              Medical Equipment & Supplies
            </h1>
          </div>
        </Container>
      </section>

      {/* Filter + Products */}
      <section className="medical-filter-section py-5 position-relative">
        <Container>
          <div className="d-flex justify-content-start mb-4">
            <Dropdown
              className="filter-dropdown shadow-lg"
              onToggle={(open) => setIsOpen(open)}
            >
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="filter-dropdown-toggle no-caret d-flex align-items-center justify-content-between"
              >
                <span>{selectedCategory}</span>
                <FaChevronDown
                  className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="filter-dropdown-menu">
                <Dropdown.Item
                  onClick={() => setSelectedCategory("TC Instruments")}
                >
                  TC Instruments
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Veterinary Instruments")}
                >
                  Veterinary Instruments
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Beauty Instruments")}
                >
                  Beauty Instruments
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Dental Instruments")}
                >
                  Dental Instruments
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Electro Surgical")}
                >
                  Electro Surgical
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="medical-products mt-4">{renderCategoryContent()}</div>
        </Container>
      </section>
    </>
  );
};

export default MedicalEquipment;