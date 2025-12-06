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
                    <h4>
                        <NavLink to='/services/marble-polishing' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Expert Marble Floor Polishing</NavLink> | 
   
                        <NavLink to='/services/housekeeping' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Housekeeping services</NavLink> | 
   
                        <NavLink to='/services/sofa-carpet-cleaning' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Carpet & Sofa Cleaning</NavLink> | 
   
                        <NavLink to='/services/wooden-floor-cleaning' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Wooden floor maintenance & polishing</NavLink> | 
   
                        <NavLink to='/services/glass-and-fascade-cleaning' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Facade cleanign services</NavLink> | 
   
                        <NavLink to='services/pool-cleaning' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Swimming Pool cleaning and Maintenace</NavLink> | 
   
                        <NavLink to='/services/tiles-cleaning' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Tiles cleaning</NavLink> | 
   
                        <NavLink to='/services/pest-control' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Pest Control</NavLink> | 
   
                        <NavLink to='/services/full-home-move-in-cleaning' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Full Home/Move in cleaning</NavLink> | 
   
                        <NavLink to='/services/Bathroom-cleaning' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Bathroom cleaning</NavLink>  |

                        <NavLink to='/services/kota-stone-polishing' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Kota Stone Polishing</NavLink>  |
                        <NavLink to='/services/italian-marble-polishing' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Italian Marble Polishing</NavLink>  |
                        <NavLink to='/services/granite-floor-polishing' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Granite Floor  Polishing</NavLink>  |
                        <NavLink to='/services/floor-grinding-maintenance-crystallization' style={{ textDecoration: "none", color: "#1bc5c8" }}>   Floor Grinding / Maintenance / Crystallization</NavLink>  |


                    </h4>



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
                <p>
                    <strong>Address:</strong>{" "}
                    <a style={{ textDecoration: "none", color: "#1bc5c8" }}
                        href="https://maps.app.goo.gl/FozkQ5HuoHbnSVvA9" // Replace with your real link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        16/212 Trilok puri,Main Vasundra Raod New Delhi-110091
                    </a>
                </p>

                <p>📞 <a href="tel:+919220489443" style={{ textDecoration: 'none', color: '#1bc5c8' }}>+919220489443</a> |
                    ✉️ <a href="mailto:suryaenterprises108@gmail.com" style={{ textDecoration: 'none', color: '#1bc5c8' }}>suryaenterprises108@gmail.com</a>
                </p>
            </div>

            {/* Copyright Text */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SURYA ENTERPRISES. All rights reserved. |<a href="https://www.linkedin.com/in/manish-singh-765558217" target="_blank" rel="noopener noreferrer" style={{ color: '#1bc5c8', textDecoration: "none" }}> Developed by Manish singh </a>

                    <NavLink to="/privacypolicy" style={{ textDecoration: "none", color: "#1bc5c8" }} > | Privacy Policy | Terms & conditions |</NavLink></p>
            </div>
        </footer>
    );
};

export default Footer;
