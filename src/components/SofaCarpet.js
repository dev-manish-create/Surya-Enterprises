// SofaCarpetCleaning.jsx
import { Helmet } from "react-helmet";

import "./MarblePolishing.css";


export default function SofaCarpetCleaning() {
  return (
    <div className="mp-container">
      <Helmet>
        <title>Sofa & Carpet Shampooing Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises offers deep sofa cleaning, carpet shampooing, stain removal, and fabric sanitization using professional machines and eco-friendly chemicals. Safe for homes, hotels & offices."
        />
      </Helmet>

      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1765048443/sofa-carpet_hktt0c.png"
        alt="Sofa-Carpet Cleaning Service"
        className="mp-top-image"
      />

      

      <h1 className="mp-title">Professional Sofa & Carpet Shampooing Services</h1>

      <p className="mp-intro">
        At <strong>Surya Enterprises</strong>, we provide expert <strong>sofa cleaning</strong> and <strong>carpet
        shampooing</strong> services using industry-grade machines and advanced cleaning solutions. Our deep
        cleaning process removes dirt, stains, germs, bad odour, allergens, and restores fabric freshness.
      </p>

      {/* Cleaning Process */}
      <section className="mp-section">
        <h2>Our Sofa & Carpet Cleaning Process</h2>
        <p>We follow a professional multi-step cleaning and sanitization process:</p>
        <ul>
          <li><strong>Pre-Inspection:</strong> Checking stains, fabric type, and cleaning requirements.</li>
          <li><strong>Dry Vacuuming:</strong> Removing dust, pet hair, and loose dirt using industrial vacuum.</li>
          <li><strong>Foam/Shampoo Application:</strong> Using fabric-safe, non-toxic cleaning agents.</li>
          <li><strong>Deep Scrubbing:</strong> Mechanized scrubbing for deep dirt removal.</li>
          <li><strong>Hot Water Extraction:</strong> Extracting dirt and shampoo using a suction machine.</li>
          <li><strong>Spot Treatment:</strong> Special treatment for tough stains and odor.</li>
          <li><strong>Sanitization:</strong> Anti-bacterial and deodorizing spray for freshness.</li>
          <li><strong>Final Grooming:</strong> Brushing fabric for a smooth and fresh finish.</li>
        </ul>
      </section>

      {/* Types of Services */}
      <section className="mp-section">
        <h2>Types of Sofa & Carpet Cleaning</h2>
        <p>We offer cleaning services for all types of upholstery and carpets:</p>
        <ul>
          <li><strong>Sofa Shampooing:</strong> Fabric, leather, and recliner sofa deep cleaning.</li>
          <li><strong>Carpet Shampooing:</strong> Deep cleaning for home, hotel, and office carpets.</li>
          <li><strong>Mattress Cleaning:</strong> Dust mite and odor removal.</li>
          <li><strong>Chair & Upholstery Cleaning:</strong> Restaurant, office, and banquet furniture.</li>
          <li><strong>Rug Cleaning:</strong> Persian, woolen, and modern rug washing.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Advanced cleaning machines and tools</li>
          <li>Fabric-safe, eco-friendly cleaning solutions</li>
          <li>Trained cleaning professionals</li>
          <li>Stain removal and deep sanitization</li>
          <li>Affordable pricing for all cleaning packages</li>
          <li>Trusted by homes, offices & hospitality clients</li>
        </ul>
      </section>

      {/* Best Suited For */}
      <section className="mp-section">
        <h2>Best Suited For</h2>
        <div className="mp-grid">
          <div className="mp-box">Homes & Apartments</div>
          <div className="mp-box">Hotels & Banquet Halls</div>
          <div className="mp-box">Offices & Commercial Spaces</div>
          <div className="mp-box">Showrooms & Retail Stores</div>
        </div>
      </section>
    </div>
  );
}