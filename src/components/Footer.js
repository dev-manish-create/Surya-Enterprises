import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import companyLogo from "./Nav-logo.png"; // Update with the path to your logo

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Logo and Slogan */}
                <div className="footer-logo">
                    <img src={companyLogo} alt="Surya Enterprises Logo" />
                    <h3>SERVING FOR CUSTOMERS SATISFACTION</h3>
                    <h4>Expert Marble Floor Polishing | Housekeeping services | Carpet & Sofa Cleaning | Wooden floor maintenance & polishing | Facade cleanign services | Deep cleaning services </h4>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <a
                        href="https://www.instagram.com/suryaenterprises_108?igsh=M200OHQyMGpzYjBv" // Replace with your Instagram URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button instagram"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://wa.me/919220489443" // Replace with your WhatsApp link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button whatsapp"
                    >
                        WhatsApp
                    </a>
                </div>
                <p>📍 Address: 16/212 Trilok puri, New Delhi-110091 </p>
                <p>📞 <a href="tel:+919220489443" style={{textDecoration:'none',color:'#1bc5c8'}}>+919220489443</a> |
                    ✉️ <a href="suryaenterprises108@gmail.com" style={{textDecoration:'none',color:'#1bc5c8'}}>suryaenterprises108@gmail.com</a>
                </p>
            </div>

            {/* Copyright Text */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SURYA ENTERPRISES. All rights reserved. | Developed By Manish Singh <NavLink to="/privacypolicy">|Privacy Policy | Terms & conditions|</NavLink></p>
            </div>
        </footer>
    );
};

export default Footer;
