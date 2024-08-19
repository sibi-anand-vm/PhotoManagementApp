import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbaar.css';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="responsive-navbar">
      <div className="logo">
        <Link to="/">Jorah's Gallery</Link>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default ResponsiveNavbar;
