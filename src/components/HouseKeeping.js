// HousekeepingService.jsx
import { Helmet } from "react-helmet";
import "./MarblePolishing.css";

export default function HousekeepingService() {
  return (
    <div className="mp-container">
      <Helmet>
        <title>Professional Housekeeping Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises provides expert housekeeping services including home cleaning, office maintenance, and commercial space management. Reliable, professional, and affordable."
        />
      </Helmet>

      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1761723226/service15_alsyec.jpg"
        alt="Housekeeping Service"
        className="mp-top-image"
      />

      

      <h1 className="mp-title">Professional Housekeeping Services</h1>

      <p className="mp-intro">
        At <strong>Surya Enterprises</strong>, we offer comprehensive housekeeping solutions to keep your home, office, or commercial space clean, organized, and hygienic. Our trained staff ensures a spotless environment with attention to every detail.
      </p>

      <section className="mp-section">
        <h2>Our Housekeeping Process</h2>
        <p>We follow a systematic process for effective cleaning and maintenance:</p>
        <ul>
          <li><strong>Initial Inspection:</strong> Assessing cleaning requirements and areas of focus.</li>
          <li><strong>Dusting & Sweeping:</strong> Removing dirt, dust, and debris from all surfaces.</li>
          <li><strong>Floor Cleaning:</strong> Mopping, vacuuming, and polishing floors based on material.</li>
          <li><strong>Surface Sanitization:</strong> Disinfecting frequently touched surfaces for hygiene.</li>
          <li><strong>Organizing & Tidying:</strong> Arranging items neatly and maintaining order.</li>
          <li><strong>Final Inspection:</strong> Ensuring everything meets our quality standards.</li>
        </ul>
      </section>

      <section className="mp-section">
        <h2>Types of Housekeeping Services</h2>
        <p>We provide a variety of services tailored to your space and needs:</p>
        <ul>
          <li><strong>Residential Cleaning:</strong> Complete home cleaning, dusting, and sanitization.</li>
          <li><strong>Office Cleaning:</strong> Professional office cleaning and maintenance.</li>
          <li><strong>Commercial Cleaning:</strong> Cleaning and upkeep for shops, showrooms, and hotels.</li>
          <li><strong>Deep Cleaning:</strong> Intensive cleaning for carpets, upholstery, and floors.</li>
          <li><strong>Regular Maintenance:</strong> Scheduled cleaning to keep spaces consistently clean.</li>
        </ul>
      </section>

      <section className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Experienced and trained housekeeping staff</li>
          <li>Eco-friendly and safe cleaning products</li>
          <li>Affordable pricing with premium results</li>
          <li>Flexible scheduling for homes and businesses</li>
          <li>Reliable, professional, and timely service</li>
          <li>Trusted by residential, commercial, and hospitality clients</li>
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
