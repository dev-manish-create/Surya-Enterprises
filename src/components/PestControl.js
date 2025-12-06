import { Helmet } from "react-helmet";
import "./MarblePolishing.css";


const PestControlService = () => {
  return (
    <div className="mp-container">

      <Helmet>
        <title>Pest Control Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises provides professional pest control services including termite treatment, cockroach control, bed bug extermination, rodent control, and mosquito control for homes, offices, and commercial properties."
        />
      </Helmet>

      {/* Top Image */}
      <img src='https://res.cloudinary.com/djjtva8k1/image/upload/v1761889249/pest_control_lkouyi.png' alt="Pest Control Service" className="mp-top-image" />

      {/* Page Title */}
      <h1 className="mp-title">Professional Pest Control Services</h1>

      {/* Introduction */}
      <p className="mp-intro">
        Surya Enterprises provides safe, effective, and professional <strong>pest control services</strong>
        to protect your home and workplace from harmful pests. We use certified chemicals,
        eco-friendly methods, and advanced equipment to ensure long-lasting protection.
        Our trained technicians follow industry-standard procedures to eliminate pests safely.
      </p>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Our Pest Control Services?</h2>
        <p>We ensure complete protection and safe pest removal.</p>
        <ul>
          <li>Safe, eco-friendly and certified chemicals</li>
          <li>Experienced & trained pest control technicians</li>
          <li>Long-lasting results with guaranteed treatments</li>
          <li>Advanced spraying, fogging & gel application</li>
          <li>Affordable pricing with custom packages</li>
          <li>Suitable for homes, offices & commercial buildings</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img src={pestWork} alt="Pest Control Work" className="mp-hero-image" /> */}

      {/* Types of Pest Control Services */}
      <div className="mp-section">
        <h2>Types of Pest Control Services We Offer</h2>
        <div className="mp-grid">
          <div className="mp-box">Cockroach Control</div>
          <div className="mp-box">Termite Treatment (Pre & Post Construction)</div>
          <div className="mp-box">Bed Bug Control</div>
          <div className="mp-box">Rodent / Rat Control</div>
          <div className="mp-box">Mosquito / Fly Control</div>
          <div className="mp-box">Ant Control Treatment</div>
          <div className="mp-box">General Pest Control</div>
          <div className="mp-box">Kitchen Deep Pest Treatment</div>
        </div>
      </div>

      {/* Service Benefits */}
      <div className="mp-section">
        <h2>Benefits of Our Pest Control Service</h2>
        <ul>
          <li>Effective removal of pests from all corners</li>
          <li>Safe for children, pets, and elderly</li>
          <li>Odorless and non-toxic solutions available</li>
          <li>Ideal for residential, commercial & industrial spaces</li>
          <li>Guaranteed protection with proper monitoring</li>
        </ul>
      </div>

    </div>
  );
};

export default PestControlService;
