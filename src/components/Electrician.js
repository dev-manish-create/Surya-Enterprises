import "./MarblePolishing.css";

import { Helmet } from "react-helmet";

const ElectricianService = () => {
  return (
    <div className="mp-container">

      <Helmet>
        <title>Professional Electrician Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises offers certified electrician services including wiring, repairs, lighting installation, appliance fitting, and emergency electrical support for homes, offices, and commercial spaces."
        />
      </Helmet>

      {/* Top Image */}
      <img src='https://res.cloudinary.com/djjtva8k1/image/upload/v1761889249/electrician_jwdggj.png' alt="Electrician Service" className="mp-top-image" />

      {/* Title */}
      <h1 className="mp-title">Professional Electrician Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        Surya Enterprises provides safe, reliable, and expert electrician services for homes, offices,
        commercial buildings, and apartments. From minor repairs to full electrical installations,
        our certified electricians ensure quality work with complete safety.
      </p>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Our Electrician Services?</h2>
        <p>Your safety and satisfaction are our top priorities.</p>
        <ul>
          <li>Certified & Experienced Electricians</li>
          <li>Quick Fault Detection & Repair</li>
          <li>Safe & High-Quality Workmanship</li>
          <li>Affordable and Transparent Pricing</li>
          <li>Emergency Electrical Support Available</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img src={electricianWork} alt="Electrical Work" className="mp-hero-image" /> */}

      {/* Services We Provide */}
      <div className="mp-section">
        <h2>Electrical Services We Provide</h2>
        <div className="mp-grid">
          <div className="mp-box">Wiring & Rewiring</div>
          <div className="mp-box">Switchboard Repair & Installation</div>
          <div className="mp-box">Lighting Installation</div>
          <div className="mp-box">Fan, AC & Appliance Fitting</div>
          <div className="mp-box">Short Circuit Fixing</div>
          <div className="mp-box">Power Backup & Inverter Setup</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mp-section">
        <h2>Benefits of Our Electrical Services</h2>
        <ul>
          <li>Guaranteed safety and compliance</li>
          <li>Use of branded and durable materials</li>
          <li>Fast and professional service</li>
          <li>Ideal for homes, offices & commercial spaces</li>
          <li>Reliable long-term electrical solutions</li>
        </ul>
      </div>

    </div>
  );
};

export default ElectricianService;
