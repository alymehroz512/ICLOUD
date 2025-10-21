import React, { useState } from "react";
import { Container, Dropdown, Button, Row, Col, Card } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import "../styles/ComputerHardware.css";
import HardwareHero from "../assets/ComputerHero.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

// --- Storage Devices ---
import SImage1 from "../assets/storage/SD1.webp";
import SImage2 from "../assets/storage/SD2.jpg";
import SImage3 from "../assets/storage/SD3.webp";
import SImage4 from "../assets/storage/SD4.webp";
import SImage5 from "../assets/storage/SD5.webp";

// --- Display Solutions ---
import DImage1 from "../assets/display/Dis1.webp";

// --- Connectivity & Storage ---
import CImage1 from "../assets/connectivity/CS1.webp";
import CImage2 from "../assets/connectivity/CS2.webp";
import CImage3 from "../assets/connectivity/CS3.webp";
import CImage4 from "../assets/connectivity/CS4.webp";
import CImage5 from "../assets/connectivity/CS5.webp";

// --- Cables & Transceivers ---
import CableImage1 from "../assets/cables/CT1.webp";
import CableImage2 from "../assets/cables/CT2.webp";
import CableImage3 from "../assets/cables/CT3.webp";
import CableImage4 from "../assets/cables/CT4.webp";
import CableImage5 from "../assets/cables/CT5.webp";

// --- Office & Ergonomics ---
import OfficeImage1 from "../assets/office/Office1.webp";
import OfficeImage2 from "../assets/office/Office2.webp";
import OfficeImage3 from "../assets/office/Office3.webp";
import OfficeImage4 from "../assets/office/Office4.webp";
import OfficeImage5 from "../assets/office/Office5.webp";

// --- Duplication Systems ---
import DupImage1 from "../assets/duplication/Dup1.webp";
import DupImage2 from "../assets/duplication/Dup2.webp";
import DupImage3 from "../assets/duplication/Dup3.webp";
import DupImage4 from "../assets/duplication/Dup4.webp";
import DupImage5 from "../assets/duplication/Dup5.webp";

const ComputerHardware = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Storage Devices");

  // --- Storage Devices ---
  const storageProducts = [
    {
      id: 1,
      name: "Apricon",
      model: "A25-3PL256-S256F",
      image: SImage1,
      description:
        "Apricorn Aegis Secure Key 3NX - FIPS 140-2 level 3 Validated, Ultra Compact, On-the-Fly 100% Hardware-Based Encryption, Software-Free Setup and Operation, Cross-Platform Compatible, Host-Free Onboard Keypad Authentication, Rugged Extruded Aluminum Enclosure.",
    },
    {
      id: 2,
      name: "Apricon",
      model: "ASSD-3PL256-240FF",
      image: SImage2,
      description:
        "Apricorn Aegis Padlock SSD, 240GB - FIPS 140-2 level 2 Validated Encryption Module, On-the-Fly 100% Hardware-Based Encryption, Software-Free Setup and Operation, Cross-Platform Compatible, Host-Free Authentication, Membrane Type Keypad Authentication, Rugged Crush-Resistant Aluminum Enclosure.",
    },
    {
      id: 3,
      name: "Apricon",
      model: "AFL3-S",
      image: SImage3,
      description:
        "Apricorn Aegis Fortress L3 w/SSD, 500GB - Ultra Rugged, Super Fast, Hardware-Based 256-Bit AES XTS Encryption, FIPS 140-2 Level 3 Validated, Software-Free Setup and Operation, Cross-Platform Compatible, Host-Free Onboard Keypad Authentication.",
    },
    {
      id: 4,
      name: "Apricon",
      model: "ASK3-NX",
      image: SImage4,
      description:
        "Apricorn Aegis Secure Key 3NX, 8GB - FIPS 140-2 level 3 Validated, Ultra Compact, On-the-Fly 100% Hardware-Based Encryption, Software-Free Setup and Operation, Cross-Platform Compatible, Host-Free Onboard Keypad Authentication, Rugged Extruded Aluminum Enclosure.",
    },
    {
      id: 5,
      name: "Apricon",
      model: "ASK3",
      image: SImage5,
      description:
        "Apricorn Aegis Secure Key 3.0, 16GB - FIPS 140-2 level 3 Validated, On-the-Fly 100% Hardware-Based Encryption, Software-Free Setup and Operation, Cross-Platform Compatible, Host-Free Onboard Keypad Authentication, Extruded Aluminum Enclosure with Protective Sleeve.",
    },
  ];

  // --- Display Solutions ---
  const displaySolutions = [
    {
      id: 1,
      name: "Avocor",
      model: "AVM-6570-NA",
      image: DImage1,
      description:
        "Avocor AVM-6570 Google Meet Series One Board 65 UHD 4K Touchscreen Commercial Monitor with Built-in Compute System, 20-Point Touch, Anti-Glare Glass, HDMI, USB-C, WiFi, Bluetooth, Whiteboard Software, Wall Mount Included.",
    },
  ];

  // --- Connectivity & Storage ---
  const connectivityProducts = [
    {
      id: 1,
      name: "ATTO",
      model: "CTFC-161P-000",
      image: CImage1,
      description: "SuperStor Organizer - Black.",
    },
    {
      id: 2,
      name: "ATTO",
      model: "CTFC-162P-000",
      image: CImage2,
      description: "Phone Central Organizer - Black.",
    },
    {
      id: 3,
      name: "ATTO",
      model: "CTFC-321P-000",
      image: CImage3,
      description:
        "Quad Port 16Gb Gen 6 FC to x8 PCIe 3.0 Host Bus Adapter, Low Profile, LC SFF+ module(s) included.",
    },
    {
      id: 4,
      name: "ATTO",
      model: "CTFC-322E-000",
      image: CImage4,
      description:
        "Single Port 32Gb Gen 6 FC to x8 PCIe 3.0 Host Bus Adapter, Low Profile, LC SFP+ module(s) included.",
    },
    {
      id: 5,
      name: "ATTO",
      model: "CTFC-81EN-000",
      image: CImage5,
      description:
        "Single Port 64Gb Gen 7 FC to x8 PCIe 4.0 Host Bust Adapter, Low Profile, LC SFP+ module(s) included.",
    },
  ];

  // --- Cables & Transceivers ---
  const cablesTransceivers = [
    {
      id: 1,
      name: "ATTO",
      model: "CBL-4488-E1X",
      image: CableImage1,
      description: "Cable, HD SAS, External, SFF8644 to SFF 8644, 1 meter.",
    },
    {
      id: 2,
      name: "ATTO",
      model: "CBL-8078-EX1",
      image: CableImage2,
      description: "Cable, HD SAS, External, SFF8644 to SFF8644, 3 meters.",
    },
    {
      id: 3,
      name: "ATTO",
      model: "CBL-8079-EX1",
      image: CableImage3,
      description: "Cable, SAS, External, SFF8644 to SFF8088, 1 meter.",
    },
    {
      id: 4,
      name: "ATTO",
      model: "CBL-8087-INT",
      image: CableImage4,
      description:
        "Cable, SAS Breakout, External, SFF8644 to SFF8088, 3 meters.",
    },
    {
      id: 5,
      name: "ATTO",
      model: "CBL-8470-EX",
      image: CableImage5,
      description: "Cable, SAS/SATA, External, SFF-8088 to 8088, 1 meter.",
    },
  ];

  // --- Office & Ergonomics ---
  const officeProducts = [
    {
      id: 1,
      name: "Kantek Inc.",
      model: "SVL12.1W",
      image: OfficeImage1,
      description: "Blackout Privacy Filter fits 12.1 Widescreen Notebooks.",
    },
    {
      id: 2,
      name: "Kantek Inc.",
      model: "SVL14.1W",
      image: OfficeImage2,
      description: "Blackout Privacy Filter fits 14.1 Notebooks.",
    },
    {
      id: 3,
      name: "Kantek Inc.",
      model: "SVL14W9",
      image: OfficeImage3,
      description:
        "Blackout Privacy Filter fits 14.0 Widescreen Notebooks (16:9 Aspect Ratio).",
    },
    {
      id: 4,
      name: "Kantek Inc.",
      model: "SVL15.4W",
      image: OfficeImage4,
      description:
        "Blackout Privacy Filter fits 15.4 Widescreen Notebooks (16:10 Aspect Ratio).",
    },
    {
      id: 5,
      name: "Kantek Inc.",
      model: "SVL",
      image: OfficeImage5,
      description: "Blackout Privacy Filter fits 17 LCD Monitors.",
    },
  ];

  // --- Duplication Systems ---
  const duplicationSystems = [
    {
      id: 1,
      name: "DupliM",
      model: "140100",
      image: DupImage1,
      description:
        "1:5 SSD/HDD Copy Tower SATA/IDE - 5 HDD Duplicator & 6 HDD Sanitizer with Erase to DoD 5220.22-M, NIST 800-88, and more.",
    },
    {
      id: 2,
      name: "DupliM",
      model: "140101",
      image: DupImage2,
      description:
        "1:11 SSD/HDD Copy Tower SATA/IDE - 11 HDD Duplicator & 12 HDD Sanitizer with Erase to DoD 5220.22-M, NIST 800-88, and more.",
    },
    {
      id: 3,
      name: "DupliM",
      model: "140102",
      image: DupImage3,
      description:
        "1:5 SSD/HDD Copy Tower SATA/IDE WL - 5 HDD Duplicator & 6 HDD Sanitizer with Logging and Erase to DoD 5220.22-M, NIST 800-88, and more.",
    },
    {
      id: 4,
      name: "DupliM",
      model: "140103",
      image: DupImage4,
      description:
        "1:11 SSD/HDD Copy Tower SATA/IDE WL - 11 HDD Duplicator & 12 HDD Sanitizer with Logging and Erase to DoD 5220.22-M, NIST 800-88, and more.",
    },
    {
      id: 5,
      name: "DupliM",
      model: "140104",
      image: DupImage5,
      description:
        "1:1 SSD/HDD Copy Tower SATA/IDE - HDD Duplicator & 2 HDD Sanitizer with Erase to DoD 5220.22-M, NIST 800-88, and more.",
    },
  ];

  // --- Render Categories ---
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "Storage Devices":
        return renderSection("Storage Devices", storageProducts);
      case "Display Solutions":
        return renderSection("Display Solutions", displaySolutions);
      case "Connectivity & Storage":
        return renderSection("Connectivity & Storage", connectivityProducts);
      case "Cables & Transceivers":
        return renderSection("Cables & Transceivers", cablesTransceivers);
      case "Office & Ergonomics":
        return renderSection("Office & Ergonomics", officeProducts);
      case "Duplication Systems":
        return renderSection("Duplication Systems", duplicationSystems);
      default:
        return (
          <div className="text-center mt-5">
            <h4 className="text-muted">
              {selectedCategory} section coming soon!
            </h4>
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

  // --- Reusable Product Card ---
  const ProductCard = ({ product }) => (
    <Card className="storage-card shadow-sm">
      <div className="storage-image-wrapper">
        <img
          src={product.image}
          alt={product.model}
          className="storage-image"
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="text-start mb-2">
          <Card.Title className="storage-title">
            {product.name}
          </Card.Title>
          <p className="text-success fw-semibold storage-model">
            {product.model}
          </p>
        </div>

        <Card.Text className="text-secondary storage-description text-start flex-grow-1">
          {product.description}
        </Card.Text>

        <div className="text-start mt-3">
          <Button
            as={Link}
            to="/contact"
            variant="success"
            size="md"
            className="text-uppercase px-3 border-0 rounded-0"
          >
            <FaShoppingCart className="me-2" /> Order Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="hardware-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${HardwareHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="hardware-hero-overlay"></div>
        <Container className="position-relative">
          <div className="hardware-hero-content position-relative text-center">
            <h1 className="hardware-hero-heading text-white">
              Computer Hardware Solutions
            </h1>
          </div>
        </Container>
      </section>

      {/* Filter + Products */}
      <section className="hardware-filter-section py-5 position-relative">
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
                  onClick={() => setSelectedCategory("Storage Devices")}
                >
                  Storage Devices
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Display Solutions")}
                >
                  Display Solutions
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Connectivity & Storage")}
                >
                  Connectivity & Storage
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Cables & Transceivers")}
                >
                  Cables & Transceivers
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Office & Ergonomics")}
                >
                  Office & Ergonomics
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSelectedCategory("Duplication Systems")}
                >
                  Duplication Systems
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="storage-products mt-4">{renderCategoryContent()}</div>
        </Container>
      </section>
    </>
  );
};

export default ComputerHardware;
