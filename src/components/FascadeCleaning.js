import { Helmet } from "react-helmet";
import "./MarblePolishing.css";

export default function GlassFacadeCleaning() {
  return (
    <div className="mp-container">

      <Helmet>
        <title>Glass & Facade Cleaning Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Professional glass and facade cleaning services using rope access, scaffolding, boom lifts and safe cleaning solutions for high-rise buildings, offices, showrooms and commercial spaces."
        />
      </Helmet>

      {/* Top Image */}
      <img
        src='https://res.cloudinary.com/djjtva8k1/image/upload/v1764843656/Glass-fascade-cleaning_yofzhv.png'
        alt="Glass Facade Cleaning"
        className="mp-top-image"
      />

      {/* Title */}
      <h1 className="mp-title">Professional Glass & Facade Cleaning Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        At <strong>Surya Enterprises</strong>, we specialize in safe and professional 
        <strong>glass & facade cleaning services</strong> for high-rise buildings, commercial complexes, 
        showrooms, and corporate offices. Using advanced equipment and international safety standards, 
        we ensure streak-free, shiny, and spotless facades that enhance your property's appearance.
      </p>

      {/* Process Section */}
      <div className="mp-section">
        <h2>Our Glass & Facade Cleaning Process</h2>
        <ul>
          <li>Inspection of building height, structure & access points</li>
          <li>Selection of method: rope access, scaffolding or boom lift</li>
          <li>Dust removal from facade panels & glass surfaces</li>
          <li>Application of glass-friendly cleaning chemicals</li>
          <li>High-pressure or soft water cleaning (as required)</li>
          <li>Scrubbing & squeegee wiping for streak-free shine</li>
          <li>Final rinse & quality inspection</li>
        </ul>
      </div>

      {/* Types of Facade Cleaning */}
      <div className="mp-section">
        <h2>Types of Glass & Facade Cleaning We Offer</h2>

        <div className="mp-grid">
          <div className="mp-box">High-Rise Glass Cleaning</div>
          <div className="mp-box">Commercial Facade Cleaning</div>
          <div className="mp-box">Rope Access / Spider Cleaning</div>
          <div className="mp-box">Aluminium Panel & ACP Cleaning</div>
          <div className="mp-box">Window Glass Cleaning</div>
          <div className="mp-box">Showroom Glass Cleaning</div>
          <div className="mp-box">Building Exterior Washing</div>
          <div className="mp-box">Pressure Washing for Facades</div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Trained professionals experienced in height work</li>
          <li>Use of rope access, scaffolding & boom-lift methods</li>
          <li>Safe, eco-friendly chemicals for all glass types</li>
          <li>100% streak-free cleaning guarantee</li>
          <li>Strict adherence to safety protocols</li>
          <li>Affordable cleaning packages for all property sizes</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img
        src="https://images.unsplash.com/photo-1584270354949-1d19f8a81b40?q=80&w=1920&auto=format&fit=crop"
        alt="Facade Cleaning Professionals"
        className="mp-hero-image"
      /> */}

      {/* Best Suited For */}
      <div className="mp-section">
        <h2>Best Suited For</h2>
        <div className="mp-grid">
          <div className="mp-box">Corporate Buildings</div>
          <div className="mp-box">Shopping Malls & Showrooms</div>
          <div className="mp-box">Hotels & Hospitality Spaces</div>
          <div className="mp-box">Commercial Complexes & High-Rises</div>
        </div>
      </div>

    </div>
  );
}
