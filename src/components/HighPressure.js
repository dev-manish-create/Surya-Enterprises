import { Helmet } from "react-helmet";
import "./MarblePolishing.css";

export default function HighPressureCleaning() {
  return (
    <div className="mp-container">

      <Helmet>
        <title>High Pressure Cleaning Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Professional high-pressure cleaning for pathways, tiles, parking areas, building exteriors, boundary walls, floors and more. Deep dirt removal using industrial pressure jet machines."
        />
      </Helmet>

      {/* Top Image */}
      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1761723230/service22_xijgyy.jpg"
        alt="High Pressure Jet Cleaning"
        className="mp-top-image"
      />

      {/* Heading */}
      <h1 className="mp-title">High Pressure Cleaning Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        <strong>Surya Enterprises</strong> offers professional <strong>high-pressure jet cleaning</strong> services
        using advanced industrial-grade machines. Our deep cleaning technique removes
        stubborn dirt, algae, oil stains, mud, cement marks, and years of deposits
        from all types of surfaces—making them look fresh and new again.
      </p>

      {/* Cleaning Process */}
      <div className="mp-section">
        <h2>Our High Pressure Cleaning Process</h2>
        <ul>
          <li>Inspection of surface type and dirt intensity</li>
          <li>Surface pre-rinsing using water jet</li>
          <li>Application of cleaning agent (if required)</li>
          <li>High-pressure jet washing (2000–3500 PSI)</li>
          <li>Scrubbing for tough stains & oil marks</li>
          <li>Final rinsing for complete dirt removal</li>
          <li>Surface drying & quality inspection</li>
        </ul>
      </div>

      {/* Types of Pressure Washing */}
      <div className="mp-section">
        <h2>Where High-Pressure Cleaning Works Best</h2>

        <div className="mp-grid">
          <div className="mp-box">Driveways & Parking Areas</div>
          <div className="mp-box">Tiles, Marble & Stone Floors</div>
          <div className="mp-box">Building Exteriors</div>
          <div className="mp-box">Boundary Walls</div>
          <div className="mp-box">Garden & Pathways</div>
          <div className="mp-box">Industrial Surfaces</div>
          <div className="mp-box">Basements & Ramps</div>
          <div className="mp-box">Swimming Pool Deck Areas</div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Industrial-grade high-pressure jet machines</li>
          <li>Safe cleaning for all tile, marble & stone surfaces</li>
          <li>Removes dirt, mud, oil, algae & stains</li>
          <li>Experienced and trained cleaning team</li>
          <li>Eco-friendly and chemical-free cleaning options</li>
          <li>Best pricing for home & commercial spaces</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img
        src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop"
        alt="Jet Wash High Pressure Cleaning"
        className="mp-hero-image"
      /> */}

      {/* Best Suited */}
      <div className="mp-section">
        <h2>Best Suited For</h2>
        <div className="mp-grid">
          <div className="mp-box">Homes & Apartments</div>
          <div className="mp-box">Commercial Properties</div>
          <div className="mp-box">Hotels & Banquet Halls</div>
          <div className="mp-box">Showrooms & Retail Spaces</div>
        </div>
      </div>

    </div>
  );
}
