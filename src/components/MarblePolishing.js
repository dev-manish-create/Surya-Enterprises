import { Helmet } from "react-helmet";

import "./MarblePolishing.css";

export default function MarblePolishing() {
  return (
    <div className="mp-container">
      <Helmet>
        <title>Professional Marble Polishing Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises offers expert marble polishing services with advanced techniques like diamond polishing, crystallization, grinding & honing. Perfect for homes, hotels, offices & commercial spaces."
        />
      </Helmet>

      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1761723158/service_3_btmve2.jpg"
        alt="Marble Polishing Work"
        className="mp-top-image"
      />

      

      <h1 className="mp-title">Professional Marble Polishing Services</h1>

      <p className="mp-intro">
        At <strong>Surya Enterprises</strong>, we bring back the natural shine, smoothness, and beauty of your
        marble floors using advanced polishing technology and skilled workmanship. Whether your marble has lost its
        gloss, developed scratches, stains, or dull patches — our expert team restores it to a premium, glossy finish.
      </p>

      <section className="mp-section">
        <h2>Our Marble Polishing Process</h2>
        <p>We follow a multi-step professional process to ensure long-lasting shine and perfection:</p>
        <ul>
          <li><strong>Inspection & Assessment:</strong> Identifying damages, scratches, and surface condition.</li>
          <li><strong>Grinding (If Needed):</strong> Removing deep scratches, stains, and uneven surfaces.</li>
          <li><strong>Honing:</strong> Smoothing the surface using industrial-grade diamond pads.</li>
          <li><strong>Polishing:</strong> Restoring high gloss using diamond polishing techniques.</li>
          <li><strong>Crystallization:</strong> Adding a protective glossy layer to enhance shine.</li>
          <li><strong>Sealing:</strong> Providing long-term protection from stains and wear.</li>
        </ul>
      </section>

      <section className="mp-section">
        <h2>Types of Marble Polishing & Techniques</h2>
        <p>Based on the condition of your marble, we offer multiple polishing methods:</p>
        <ul>
          <li><strong>Diamond Polishing:</strong> Mirror-like shine using diamond abrasives.</li>
          <li><strong>Crystallization Polishing:</strong> Chemical shine ideal for commercial floors.</li>
          <li><strong>Grinding & Polishing:</strong> Best for old and damaged marble.</li>
          <li><strong>Mirror Finish Polishing:</strong> Ultra-high gloss luxury finish.</li>
          <li><strong>Honing:</strong> Matte/satin elegant finish.</li>
        </ul>
      </section>

      <section className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Highly skilled and experienced technicians</li>
          <li>Advanced machines & industrial-grade diamond pads</li>
          <li>Affordable pricing with premium results</li>
          <li>Guaranteed high-gloss mirror finish</li>
          <li>Fast, clean, and professional service</li>
          <li>Trusted by hotels, offices & residential clients</li>
        </ul>
      </section>

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