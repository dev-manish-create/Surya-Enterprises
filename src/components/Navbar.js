import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "./Nav-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo-container">
          <img src={navlogo} alt="Company Logo" className="logo" />
          <span className="company-name">Surya Enterprises</span>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

       
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contactus"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Ourservices"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/OurClients"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Our Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Gallery"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
