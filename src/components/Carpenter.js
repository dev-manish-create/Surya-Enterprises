import { Helmet } from "react-helmet";
import "./MarblePolishing.css";


const CarpenterService = () => {
  return (
    <div className="mp-container">
      <Helmet>
  <title>Carpenter Services | Woodwork, Repairs & Custom Furniture | Surya Enterprises</title>
  <meta
    name="description"
    content="Surya Enterprises provides professional carpenter services including wood repairs, door fitting, modular furniture fixing, cupboard installation, polishing, and custom woodwork for homes and offices."
  />
  <meta
    name="keywords"
    content="carpenter service, wood repair, furniture repair, door repair, wooden work, home carpenter, office carpenter, modular furniture installation"
  />
  <meta property="og:title" content="Carpenter Services | Surya Enterprises" />
  <meta
    property="og:description"
    content="Expert carpenter services for homes, offices & commercial spaces. Door repairs, furniture fixing, wooden work, custom carpentry & more."
  />
  <meta property="og:type" content="website" />
</Helmet>

      
      {/* Top Image */}
      <img src='https://res.cloudinary.com/djjtva8k1/image/upload/v1761889249/carpenter_zi31tp.png' alt="Carpenter Service" className="mp-top-image" />

      {/* Title */}
      <h1 className="mp-title">Professional Carpenter Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        Surya Enterprises offers expert carpenter services for homes, offices, apartments, and commercial spaces. 
        From repairs to new installations, our skilled carpenters deliver high-quality craftsmanship with attention to detail.
      </p>

      {/* Section - Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Our Carpenter Services?</h2>
        <p>We ensure quality work, timely delivery, and durable construction results.</p>

        <ul>
          <li>Experienced and Skilled Carpenters</li>
          <li>High-Quality Workmanship</li>
          <li>Fast and Reliable Service</li>
          <li>Affordable Pricing</li>
          <li>Custom Solutions for Every Requirement</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img src={carpenterWork} 
      alt="Carpentry Work" 
      className="mp-hero-image" /> */}

      {/* Services We Provide */}
      <div className="mp-section">
        <h2>Carpentry Services We Provide</h2>
        <div className="mp-grid">
          <div className="mp-box">Door Repair & Installation</div>
          <div className="mp-box">Modular Kitchen Work</div>
          <div className="mp-box">Wardrobe & Cabinet Fitting</div>
          <div className="mp-box">Wooden Floor Repair</div>
          <div className="mp-box">Furniture Repair & Polishing</div>
          <div className="mp-box">Custom Woodwork Solutions</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mp-section">
        <h2>Benefits of Our Carpenter Services</h2>
        <ul>
          <li>Long-lasting materials used</li>
          <li>Neat and professional finishing</li>
          <li>Quick response and scheduling</li>
          <li>Perfect for home & office maintenance</li>
          <li>Elegant and durable designs</li>
        </ul>
      </div>

    </div>
  );
};

export default CarpenterService;
