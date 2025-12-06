import { Helmet } from "react-helmet";
import "./MarblePolishing.css";

export default function OfficeMaintenance() {
  return (
    <div className="mp-container">

      <Helmet>
        <title>Office Maintenance Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Professional office maintenance services including daily cleaning, deep cleaning, pantry care, restroom sanitization, floor cleaning, dusting, and facility upkeep for corporate and commercial spaces."
        />
      </Helmet>

      {/* Top Image */}
      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1764950054/office_maintenance_wczdpy.png"
        alt="Office Maintenance Service"
        className="mp-top-image"
      />

      {/* Title */}
      <h1 className="mp-title">Professional Office Maintenance Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        Surya Enterprises offers reliable and professional <strong>office maintenance services</strong> 
        designed to create a clean, hygienic, and productive work environment. From daily cleaning 
        to deep maintenance tasks, our trained team ensures your workplace stays spotless, organized, 
        and well-maintained throughout the day.
      </p>

      {/* Office Maintenance Process */}
      <div className="mp-section">
        <h2>Our Office Maintenance Process</h2>
        <ul>
          <li>Daily sweeping, dusting & mopping of all areas</li>
          <li>Workstation, desk & computer dusting</li>
          <li>Washroom cleaning & sanitization</li>
          <li>Pantry cleaning & basic upkeep</li>
          <li>Glass & window cleaning (interior)</li>
          <li>Carpet vacuuming & spot cleaning</li>
          <li>Reception & waiting area maintenance</li>
          <li>Trash collection & disposal</li>
        </ul>
      </div>

      {/* Types of Office Maintenance Services */}
      <div className="mp-section">
        <h2>Office Maintenance Services We Offer</h2>

        <div className="mp-grid">
          <div className="mp-box">Daily Office Cleaning</div>
          <div className="mp-box">Deep Office Cleaning</div>
          <div className="mp-box">Restroom Sanitization</div>
          <div className="mp-box">Pantry Management</div>
          <div className="mp-box">Floor Scrubbing & Polishing</div>
          <div className="mp-box">Carpet Vacuuming</div>
          <div className="mp-box">Glass & Partition Cleaning</div>
          <div className="mp-box">Electrical & Minor Repairs</div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Trained and professional cleaning staff</li>
          <li>Reliable weekly/monthly maintenance plans</li>
          <li>Eco-friendly chemicals & safe cleaning methods</li>
          <li>Flexible timing to suit office hours</li>
          <li>Affordable corporate cleaning contracts</li>
          <li>100% quality assurance & service consistency</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
        alt="Office Cleaning Team"
        className="mp-hero-image"
      /> */}

      {/* Best Suited For */}
      <div className="mp-section">
        <h2>Best Suited For</h2>
        <div className="mp-grid">
          <div className="mp-box">Corporate Offices</div>
          <div className="mp-box">IT & Tech Companies</div>
          <div className="mp-box">Co-working Spaces</div>
          <div className="mp-box">Showrooms & Commercial Spaces</div>
        </div>
      </div>

    </div>
  );
}
