import { Helmet } from "react-helmet";

import "./MarblePolishing.css"; // Using same styling

export default function DeepCleaning() {
  return (
    <div className="mp-container">
      <Helmet>
        <title>Home & Office Deep Cleaning Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Professional deep cleaning services including kitchen, bathroom, floor scrubbing, sanitization, dust removal, appliance cleaning, and full home/office disinfection."
        />
      </Helmet>

      {/* Top Image */}
      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1765048440/Deep-cleaning_sv5ni6.png"
        alt="Deep Cleaning Service"
        className="mp-top-image"
      />

      {/* Title */}
      <h1 className="mp-title">Professional Deep Cleaning Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        Surya Enterprises provides highly professional <strong> deep cleaning services </strong> for homes, offices, commercial spaces, and apartments. Our trained cleaning
        experts use advanced equipment, eco-friendly chemicals, and a detailed cleaning
        process to give your space a fresh & hygienic makeover.
      </p>

      {/* Cleaning Process */}
      <div className="mp-section">
        <h2>Our Deep Cleaning Process</h2>
        <ul>
          <li>Complete dusting & cobweb removal</li>
          <li>Deep vacuuming & mopping of all areas</li>
          <li>Bathroom deep cleaning & sanitization</li>
          <li>Kitchen degreasing & appliance cleaning</li>
          <li>Window, grills & sliding door cleaning</li>
          <li>Floor scrubbing with professional machines</li>
          <li>Disinfection & anti-bacterial treatment</li>
          <li>Furniture cleaning & polishing (external)</li>
        </ul>
      </div>

      {/* Types of Services */}
      <div className="mp-section">
        <h2>Deep Cleaning Services We Offer</h2>

        <div className="mp-grid">
          <div className="mp-box">Full Home Deep Cleaning</div>
          <div className="mp-box">Kitchen Deep Cleaning</div>
          <div className="mp-box">Bathroom Deep Cleaning</div>
          <div className="mp-box">Office Deep Cleaning</div>
          <div className="mp-box">Post-Construction Cleaning</div>
          <div className="mp-box">Sofa/Carpet Deep Cleaning</div>
          <div className="mp-box">Floor Machine Scrubbing</div>
          <div className="mp-box">Commercial Space Cleaning</div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Trained and professional deep cleaning staff</li>
          <li>Eco-friendly & safe cleaning chemicals</li>
          <li>Advanced vacuum, scrubbing & steaming machines</li>
          <li>Affordable and transparent pricing</li>
          <li>Perfect for move-in / move-out cleaning</li>
          <li>100% quality service with customer satisfaction</li>
        </ul>
      </div>

      {/* Hero Image */}
      

      {/* Who Benefits */}
      <div className="mp-section">
        <h2>Best Suited For</h2>
        <ul>
          <li>Homes & Apartments</li>
          <li>Offices & Corporate Spaces</li>
          <li>Showrooms & Retail Stores</li>
          <li>Hotels & Hospitality</li>
          <li>Schools & Institutes</li>
          <li>Restaurants & Cafeterias</li>
        </ul>
      </div>
    </div>
  );
}
