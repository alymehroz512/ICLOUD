import React, { useState } from "react";
import { Container, Dropdown, Button, Row, Col, Card } from "react-bootstrap";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/IndustrialProducts.css";
import IndustrialHero from "../assets/IndustrialHero.jpg";

// --- Industrial Images (placeholders; update with actual images per category) ---
import energy1 from '../assets/energy/energy1.png';
import energy2 from '../assets/energy/energy2.png';
import energy3 from '../assets/energy/energy3.jpg';
import energy4 from '../assets/energy/energy4.jpeg';
import energy5 from '../assets/energy/energy5.jpg';
import energy6 from '../assets/energy/energy6.webp';

import AL1 from '../assets/aluminium/Aluminum1.png';
import AL2 from '../assets/aluminium/Aluminum2.png';
import AL3 from '../assets/aluminium/Aluminum3.png';
import AL4 from '../assets/aluminium/Aluminum4.png';
import AL5 from '../assets/aluminium/Aluminum5.png';
import AL6 from '../assets/aluminium/Aluminum6.png';

import ST1 from '../assets/steel/steel1.png';
import ST2 from '../assets/steel/steel2.png';
import ST3 from '../assets/steel/steel3.png';
import ST4 from '../assets/steel/steel4.png';
import ST5 from '../assets/steel/steel5.png';
import ST6 from '../assets/steel/steel6.png';

import PL1 from '../assets/plastic/plastic1.png';
import PL2 from '../assets/plastic/plastic2.png';
import PL3 from '../assets/plastic/plastic3.png';
import PL4 from '../assets/plastic/plastic4.png';
import PL5 from '../assets/plastic/plastic5.png';
import PL6 from '../assets/plastic/plastic6.png';

import RU1 from '../assets/rubber/Rubber1.png';
import RU2 from '../assets/rubber/Rubber2.png';
import RU3 from '../assets/rubber/Rubber3.png';
import RU4 from '../assets/rubber/Rubber4.png';
import RU5 from '../assets/rubber/Rubber5.png';
import RU6 from '../assets/rubber/Rubber6.png';

import CHE1 from '../assets/chemicals/chemcal1.png';
import CHE2 from '../assets/chemicals/chemcal2.png';
import CHE3 from '../assets/chemicals/chemcal3.png';
import CHE4 from '../assets/chemicals/chemcal4.png';
import CHE5 from '../assets/chemicals/chemcal5.png';
import CHE6 from '../assets/chemicals/chemcal6.png';

const IndustrialProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Energy");

  // --- Energy Products ---
  const energyProducts = [
    { id: 1, image: energy1, name: "Transformers" },
    { id: 2, image: energy2, name: "Lithium-Ion Battery" },
    { id: 3, image: energy3, name: "Portable Light House" },
    { id: 4, image: energy4, name: "Inverter" },
    { id: 5, image: energy5, name: "Solar Panel" },
    { id: 6, image: energy6, name: "EV Charging Cable" },
  ];

  // --- Aluminum Products ---
  const aluminumProducts = [
    { id: 1, image: AL1, name: "Sheets & Plates" },
    { id: 2, image: AL2, name: "Profiles & Extrusions" },
    { id: 3, image: AL3, name: "Foils" },
    { id: 4, image: AL4, name: "Bars & Rods" },
    { id: 5, image: AL5, name: "Tubes & Pipes" },
    { id: 6, image: AL6, name: "Construction Materails" },
  ];

  // --- Steel Products ---
  const steelProducts = [
    { id: 1, image: ST1, name: "Bars & Rods" },
    { id: 2, image: ST2, name: "Pipes" },
    { id: 3, image: ST3, name: "Roll" },
    { id: 4, image: ST4, name: "vanadium" },
    { id: 5, image: ST5, name: "Steel Screws" },
    { id: 6, image: ST6, name: "Steel Angle" },
  ];

  // --- Plastic Resins Products ---
  const plasticResinsProducts = [
    { id: 1, image: PL1, name: "Polyethylene" },
    { id: 2, image: PL2, name: "Polypropylene" },
    { id: 3, image: PL3, name: "Thermoplastice Elastomers" },
    { id: 4, image: PL4, name: "Polystyrene" },
    { id: 5, image: PL5, name: "Polyoxymethylene" },
    { id: 6, image: PL6, name: "Acrylic resins" },
  ];

  // --- Rubber Products ---
  const rubberProducts = [
    { id: 1, image: RU1, name: "Rubber Sheet" },
    { id: 2, image: RU2, name: "Tubes" },
    { id: 3, image: RU3, name: "Mats" },
    { id: 4, image: RU4, name: "Industial" },
    { id: 5, image: RU5, name: "Rolls" },
    { id: 6, image: RU6, name: "Natural" },
  ];

  // --- Chemicals Products ---
  const chemicalsProducts = [
    { id: 1, image: CHE1, name: "Acids" },
    { id: 2, image: CHE2, name: "Solvents" },
    { id: 3, image: CHE3, name: "Salts" },
    { id: 4, image: CHE4, name: "Sodium Hydroxide" },
    { id: 5, image: CHE5, name: "Petrochemicals" },
    { id: 6, image: CHE6, name: "Flocculants" },
  ];

  // --- Render Categories ---
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "Energy":
        return renderSection("Energy", energyProducts);
      case "Aluminum":
        return renderSection("Aluminum", aluminumProducts);
      case "Steel":
        return renderSection("Steel", steelProducts);
      case "Plastic Resins":
        return renderSection("Plastic Resins", plasticResinsProducts);
      case "Rubber":
        return renderSection("Rubber", rubberProducts);
      case "Chemicals":
        return renderSection("Chemicals", chemicalsProducts);
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

  // --- Reusable Product Card (ribbon added, positioned outside) ---
  const ProductCard = ({ product }) => (
    <div className="industrial-card-wrapper position-relative">
      <div className="industrial-ribbon">{product.name}</div>
      <Card className="industrial-card shadow-sm">
        <div className="industrial-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="industrial-image"
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
        className="industrial-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${IndustrialHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="industrial-hero-overlay"></div>
        <Container className="position-relative">
          <div className="industrial-hero-content position-relative text-center">
            <h1 className="industrial-hero-heading text-white">
              Industrial Products & Solutions
            </h1>
          </div>
        </Container>
      </section>

      {/* Filter + Products */}
      <section className="industrial-filter-section py-5 position-relative">
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
                <Dropdown.Item onClick={() => setSelectedCategory("Energy")}>
                  Energy
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Aluminum")}>
                  Aluminum
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Steel")}>
                  Steel
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Plastic Resins")}
                >
                  Plastic Resins
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Rubber")}>
                  Rubber
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedCategory("Chemicals")}>
                  Chemicals
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="industrial-products mt-4">
            {renderCategoryContent()}
          </div>
        </Container>
      </section>
    </>
  );
};

export default IndustrialProducts;