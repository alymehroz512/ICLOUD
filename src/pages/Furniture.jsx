import React, { useState } from "react";
import { Container, Dropdown, Button, Row, Col, Card } from "react-bootstrap";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Furniture.css";
import FurnitureHero from "../assets/FurnitureHero.jpg";

// --- Furniture Images (placeholders; update with actual images per category) ---
import OF1 from '../assets/OF/OF1.jpg';
import OF2 from '../assets/OF/OF2.jpg';
import OF3 from '../assets/OF/OF3.jpg';
import OF4 from '../assets/OF/OF4.jfif';
import OF5 from '../assets/OF/OF5.jfif';
import OF6 from '../assets/OF/OF6.jpg';

import HF1 from '../assets/HF/HF1.png';
import HF2 from '../assets/HF/HF2.jpg';
import HF3 from '../assets/HF/HF3.png';
import HF4 from '../assets/HF/HF4.png';
import HF5 from '../assets/HF/HF5.png';
import HF6 from '../assets/HF/HF6.png';

import DRF1 from '../assets/DRF/DRF1.png';
import DRF2 from '../assets/DRF/DRF2.png';
import DRF3 from '../assets/DRF/DRF3.png';
import DRF4 from '../assets/DRF/DRF4.png';
import DRF5 from '../assets/DRF/DRF5.png';
import DRF6 from '../assets/DRF/DRF6.png';

import LRF1 from '../assets/LRF/LRF1.png';
import LRF2 from '../assets/LRF/LRF2.png';
import LRF3 from '../assets/LRF/LRF3.png';
import LRF4 from '../assets/LRF/LRF4.png';
import LRF5 from '../assets/LRF/LRF5.png';
import LRF6 from '../assets/LRF/LRF6.png';

import BRF1 from '../assets/BRF/bedroom1.png';
import BRF2 from '../assets/BRF/bedroom2.png';
import BRF3 from '../assets/BRF/bedroom3.png';
import BRF4 from '../assets/BRF/bedroom4.png';
import BRF5 from '../assets/BRF/bedroom5.png';
import BRF6 from '../assets/BRF/bedroom6.png';

import OTF1 from '../assets/OTF/outdoor1.png';
import OTF2 from '../assets/OTF/outdoor2.png';
import OTF3 from '../assets/OTF/outdoor3.png';
import OTF4 from '../assets/OTF/outdoor4.png';
import OTF5 from '../assets/OTF/outdoor5.png';
import OTF6 from '../assets/OTF/outdoor6.png';

const Furniture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Office Furniture");

  // --- Office Furniture Products ---
  const officeFurnitureProducts = [
    { id: 1, image: OF1, name: "Office Chair" },
    { id: 2, image: OF2, name: "Executive Desk" },
    { id: 3, image: OF3, name: "Bookshelf" },
    { id: 4, image: OF4, name: "Conference Table" },
    { id: 5, image: OF5, name: "File Cabinet" },
    { id: 6, image: OF6, name: "Workstation" },
  ];

  // --- Home Office Furniture Products ---
  const homeOfficeFurnitureProducts = [
    { id: 1, image: HF1, name: "Home Desk" },
    { id: 2, image: HF2, name: "Ergonomic Chair" },
    { id: 3, image: HF3, name: "Monitor Stand" },
    { id: 4, image: HF4, name: "Desk Organizer" },
    { id: 5, image: HF5, name: "Bookshelf" },
    { id: 6, image: HF6, name: "Office Lamp" },
  ];

  // --- Dining Room Furniture Products ---
  const diningRoomFurnitureProducts = [
    { id: 1, image: DRF1, name: "Dining Table" },
    { id: 2, image: DRF2, name: "Dining Chair" },
    { id: 3, image: DRF3, name: "Buffet Table" },
    { id: 4, image: DRF4, name: "Bar Stool" },
    { id: 5, image: DRF5, name: "China Cabinet" },
    { id: 6, image: DRF6, name: "Bench" },
  ];

  // --- Living Room Furniture Products ---
  const livingRoomFurnitureProducts = [
    { id: 1, image: LRF1, name: "Sofa" },
    { id: 2, image: LRF2, name: "Coffee Table" },
    { id: 3, image: LRF3, name: "Armchair" },
    { id: 4, image: LRF4, name: "TV Stand" },
    { id: 5, image: LRF5, name: "Bookshelf" },
    { id: 6, image: LRF6, name: "Ottoman" },
  ];

  // --- Bedroom Furniture Products ---
  const bedroomFurnitureProducts = [
    { id: 1, image: BRF1, name: "Bed Frame" },
    { id: 2, image: BRF2, name: "Nightstand" },
    { id: 3, image: BRF3, name: "Dresser" },
    { id: 4, image: BRF4, name: "Wardrobe" },
    { id: 5, image: BRF5, name: "Mirror" },
    { id: 6, image: BRF6, name: "Chest" },
  ];

  // --- Outdoor Furniture Products ---
  const outdoorFurnitureProducts = [
    { id: 1, image: OTF1, name: "Patio Table" },
    { id: 2, image: OTF2, name: "Garden Chair" },
    { id: 3, image: OTF3, name: "Sun Lounger" },
    { id: 4, image: OTF4, name: "Outdoor Sofa" },
    { id: 5, image: OTF5, name: "Hammock" },
    { id: 6, image: OTF6, name: "Fire Pit" },
  ];

  // --- Render Categories ---
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "Office Furniture":
        return renderSection("Office Furniture", officeFurnitureProducts);
      case "Home Office Furniture":
        return renderSection("Home Office Furniture", homeOfficeFurnitureProducts);
      case "Dining Room Furniture":
        return renderSection("Dining Room Furniture", diningRoomFurnitureProducts);
      case "Living Room Furniture":
        return renderSection("Living Room Furniture", livingRoomFurnitureProducts);
      case "Bedroom Furniture":
        return renderSection("Bedroom Furniture", bedroomFurnitureProducts);
      case "Outdoor Furniture":
        return renderSection("Outdoor Furniture", outdoorFurnitureProducts);
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
    <div className="furniture-card-wrapper position-relative">
      <div className="furniture-ribbon">{product.name}</div>
      <Card className="furniture-card shadow-sm">
        <div className="furniture-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="furniture-image"
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
        className="furniture-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${FurnitureHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="furniture-hero-overlay"></div>
        <Container className="position-relative">
          <div className="furniture-hero-content position-relative text-center">
            <h1 className="furniture-hero-heading text-white">
              Furniture & Workspace Solutions
            </h1>
          </div>
        </Container>
      </section>

      {/* Filter + Products */}
      <section className="furniture-filter-section py-5 position-relative">
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
                  onClick={() => setSelectedCategory("Office Furniture")}
                >
                  Office Furniture
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Home Office Furniture")}
                >
                  Home Office Furniture
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Dining Room Furniture")}
                >
                  Dining Room Furniture
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Living Room Furniture")}
                >
                  Living Room Furniture
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Bedroom Furniture")}
                >
                  Bedroom Furniture
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Outdoor Furniture")}
                >
                  Outdoor Furniture
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="furniture-products mt-4">{renderCategoryContent()}</div>
        </Container>
      </section>
    </>
  );
};

export default Furniture;