import { Helmet } from "react-helmet";
import "./MarblePolishing.css"; // reuse the same CSS

export default function WoodenFloorPolishing() {
  return (
    <div className="mp-container">
      <Helmet>
        <title>Wooden Floor Polishing Service | Surya Enterprises</title>
        <meta
          name="description"
          content="Professional wooden floor polishing, sanding, buffing and restoration by Surya Enterprises. Restore shine, remove scratches and protect hardwood floors for homes and commercial spaces."
        />
      </Helmet>

      {/* Top Image */}
      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1761723159/service_2_e8t9sr.jpg"
        alt="Wooden floor polishing top"
        className="mp-top-image"
      />

      {/* Title */}
      <h1 className="mp-title">Wooden Floor Polishing Service</h1>

      {/* Intro */}
      <p className="mp-intro">
        At <strong>Surya Enterprises</strong> we restore the natural beauty and durability of
        wooden floors using professional sanding, buffing and polishing techniques. Our
        experienced team removes scratches, evens out wear, and applies protective finishes
        to give your hardwood floors a long-lasting, premium shine.
      </p>

      {/* Process Section */}
      <div className="mp-section">
        <h2>Our Wooden Floor Polishing Process</h2>
        <ul>
          <li><strong>Inspection & Assessment:</strong> We evaluate floor condition, finish type and damage.</li>
          <li><strong>Deep Cleaning:</strong> Remove dust, grit and contaminants before any sanding.</li>
          <li><strong>Sanding:</strong> Use progressive grit sanding to remove scratches and level the surface.</li>
          <li><strong>Buffing:</strong> Smooth the surface and prepare it for finish application.</li>
          <li><strong>Polishing / Coating:</strong> Apply polish, oil, lacquer or polyurethane for protection and gloss.</li>
          <li><strong>Final Inspection:</strong> Quality check and touch-ups for a flawless finish.</li>
        </ul>
      </div>

      {/* Types & Techniques */}
      <div className="mp-section">
        <h2>Types of Wooden Floor Polishing & Techniques</h2>

        <div className="mp-grid">
          <div className="mp-box">
            <h3>Restorative Sanding & Polishing</h3>
            <p>Full sanding for heavily worn or scratched floors followed by a protective finish.</p>
          </div>

          <div className="mp-box">
            <h3>Light Buffing & Recoating</h3>
            <p>For floors with minor wear — buff and apply a fresh coat for renewed shine.</p>
          </div>

          <div className="mp-box">
            <h3>Oil & Wax Finishing</h3>
            <p>Natural-look finishes that enhance grain and provide subtle sheen and protection.</p>
          </div>

          <div className="mp-box">
            <h3>Polyurethane / Lacquer Coating</h3>
            <p>Durable high-gloss or satin finishes for heavy-traffic commercial or residential areas.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Skilled floor technicians with years of experience</li>
          <li>Professional sanding machines & buffing tools</li>
          <li>High-quality finishes (oil, wax, lacquer, polyurethane)</li>
          <li>Dust-minimizing sanding & clean work process</li>
          <li>Transparent pricing and timely service</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img
        src="./images/wooden-work.jpg"
        alt="Wooden floor polishing work"
        className="mp-hero-image"
      /> */}

      {/* Suitable For */}
      <div className="mp-section">
        <h2>Suitable For</h2>
        <div className="mp-grid">
          <div className="mp-box">Homes & Apartments</div>
          <div className="mp-box">Hotels & Banquet Halls</div>
          <div className="mp-box">Offices & Commercial Spaces</div>
          <div className="mp-box">Showrooms & Retail Stores</div>
        </div>
      </div>
    </div>
  );
}
