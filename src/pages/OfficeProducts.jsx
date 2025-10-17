import React, { useState } from "react";
import { Container, Dropdown, Button, Row, Col, Card } from "react-bootstrap";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/OfficeProducts.css";
import OfficeHero from "../assets/OfficeHero.jpg";

// --- Office Images (reused for all categories as placeholders; update with actual images per category) ---
import Stationary1 from "../assets/stationary/ST1.png";
import Stationary2 from "../assets/stationary/ST2.png";
import Stationary3 from "../assets/stationary/ST3.png";
import Stationary4 from "../assets/stationary/ST4.png";
import Stationary5 from "../assets/stationary/ST5.png";
import Stationary6 from "../assets/stationary/ST6.png";

import OE1 from "../assets/OE/OE1.png";
import OE2 from "../assets/OE/OE2.png";
import OE3 from "../assets/OE/OE3.png";
import OE4 from "../assets/OE/OE4.png";
import OE5 from "../assets/OE/OE5.png";
import OE6 from "../assets/OE/OE6.png";

import SS1 from "../assets/SS/SS1.png";
import SS2 from "../assets/SS/SS2.png";
import SS3 from "../assets/SS/SS3.png";
import SS4 from "../assets/SS/SS4.png";
import SS5 from "../assets/SS/SS5.png";
import SS6 from "../assets/SS/SS6.png";

import EQ1 from "../assets/EQ/EQ1.png";
import EQ2 from "../assets/EQ/EQ2.png";
import EQ3 from "../assets/EQ/EQ3.png";
import EQ4 from "../assets/EQ/EQ4.png";
import EQ5 from "../assets/EQ/EQ5.png";
import EQ6 from "../assets/EQ/EQ6.png";

import CM1 from "../assets/CM/CM1.png";
import CM2 from "../assets/CM/CM2.png";
import CM3 from "../assets/CM/CM3.png";
import CM4 from "../assets/CM/CM4.png";
import CM5 from "../assets/CM/CM5.png";
import CM6 from "../assets/CM/CM6.png";

const OfficeProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Office Stationery");

  // --- Office Stationery Products ---
  const officeStationeryProducts = [
    { id: 1, image: Stationary1, name: "Notebook" },
    { id: 2, image: Stationary2, name: "Pen Set" },
    { id: 3, image: Stationary3, name: "Sticky Notes" },
    { id: 4, image: Stationary4, name: "Paper Clips" },
    { id: 5, image: Stationary5, name: "Highlighter" },
    { id: 6, image: Stationary6, name: "Stapler" },
  ];

  // --- Office Essentials Products ---
  const officeEssentialsProducts = [
    { id: 1, image: OE1, name: "Desk Organizer" },
    { id: 2, image: OE2, name: "Mouse Pad" },
    { id: 3, image: OE3, name: "Cable Organizer" },
    { id: 4, image: OE4, name: "Desk Lamp" },
    { id: 5, image: OE5, name: "Whiteboard" },
    { id: 6, image: OE6, name: "Nameplate" },
  ];

  // --- Storage Solutions Products ---
  const storageSolutionsProducts = [
    { id: 1, image: SS1, name: "File Cabinet" },
    { id: 2, image: SS2, name: "Storage Box" },
    { id: 3, image: SS3, name: "Shelf Unit" },
    { id: 4, image: SS4, name: "Drawer Organizer" },
    { id: 5, image: SS5, name: "File Holder" },
    { id: 6, image: SS6, name: "Bookend" },
  ];

  // --- Office Equipment Products ---
  const officeEquipmentProducts = [
    { id: 1, image: EQ1, name: "Printer" },
    { id: 2, image: EQ2, name: "Scanner" },
    { id: 3, image: EQ3, name: "Shredder" },
    { id: 4, image: EQ4, name: "Projector" },
    { id: 5, image: EQ5, name: "Laminator" },
    { id: 6, image: EQ6, name: "Binding Machine" },
  ];

  // --- Cleaning & Maintenance Products ---
  const cleaningMaintenanceProducts = [
    { id: 1, image: CM1, name: "Cleaning Spray" },
    { id: 2, image: CM2, name: "Microfiber Cloth" },
    { id: 3, image: CM3, name: "Trash Bin" },
    { id: 4, image: CM4, name: "Vacuum Cleaner" },
    { id: 5, image: CM5, name: "Air Freshener" },
    { id: 6, image: CM6, name: "Mop" },
  ];

  // --- Render Categories ---
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "Office Stationery":
        return renderSection("Office Stationery", officeStationeryProducts);
      case "Office Essentials":
        return renderSection("Office Essentials", officeEssentialsProducts);
      case "Storage Solutions":
        return renderSection("Storage Solutions", storageSolutionsProducts);
      case "Office Equipment":
        return renderSection("Office Equipment", officeEquipmentProducts);
      case "Cleaning & Maintenance":
        return renderSection("Cleaning & Maintenance", cleaningMaintenanceProducts);
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
    <div className="office-card-wrapper position-relative">
      <div className="office-ribbon">{product.name}</div>
      <Card className="office-card shadow-sm">
        <div className="office-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="office-image"
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
        className="office-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${OfficeHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="office-hero-overlay"></div>
        <Container className="position-relative">
          <div className="office-hero-content position-relative text-center">
            <h1 className="office-hero-heading text-white">
              Office Products & Solutions
            </h1>
          </div>
        </Container>
      </section>

      {/* Filter + Products */}
      <section className="office-filter-section py-5 position-relative">
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
                  onClick={() => setSelectedCategory("Office Stationery")}
                >
                  Office Stationery
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Office Essentials")}
                >
                  Office Essentials
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Storage Solutions")}
                >
                  Storage Solutions
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Office Equipment")}
                >
                  Office Equipment
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Cleaning & Maintenance")}
                >
                  Cleaning & Maintenance
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="office-products mt-4">{renderCategoryContent()}</div>
        </Container>
      </section>
    </>
  );
};

export default OfficeProducts;