import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import '../styles/BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} aria-label="Back to top">
        <FaChevronUp />
      </button>
    </div>
  );
};

export default BackToTop;