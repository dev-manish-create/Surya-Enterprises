import { Helmet } from "react-helmet";
import "./MarblePolishing.css";

export default function FloorGrindingMaintenance() {
  return (
    <>
      <Helmet>
        <title>Floor Grinding, Maintenance & Crystallization | Professional Stone Care</title>

        <meta
          name="description"
          content="Expert floor grinding, polishing, maintenance and crystallization services for marble, granite, Italian, and other natural stone floors. Restore shine and remove scratches with Surya Enterprises."
        />

        <meta
          name="keywords"
          content="floor grinding, floor maintenance, floor crystallization, marble crystallization, granite grinding, stone polishing, floor restoration"
        />

        <link
          rel="canonical"
          href="https://www.suryaenterprisses.com/services/floor-grinding-maintenance-crystallization"
        />
      </Helmet>

      <div className="mp-container">
        
        {/* Top Image */}
        <img
          src="https://res.cloudinary.com/djjtva8k1/image/upload/v1764919537/floor-grinding-maintenance_hb02gm.jpg"
          alt="Professional Floor Grinding and Maintenance Work"
          className="mp-top-image"
        />

        {/* Title */}
        <h1 className="mp-title">Floor Grinding / Maintenance / Crystallization</h1>

        {/* Intro */}
        <p className="mp-intro">
          At <strong>Surya Enterprises</strong>, we specialize in{" "}
          <strong>floor grinding, restoration, maintenance, and crystallization</strong> for all types of natural
          stone floors including marble, granite, Italian, mosaic, and concrete floors.  
          Our industrial-grade machines and expert technicians ensure flawless finishing, long-lasting shine,
          and complete floor rejuvenation.
        </p>

        {/* Why Floor Grinding is Important */}
        <div className="mp-section">
          <h2>Why Choose Floor Grinding & Crystallization?</h2>
          <p>
            Grinding removes scratches, dullness, stains and uneven areas while crystallization adds a durable,
            glossy, mirror-like shine. This complete process enhances both beauty and strength of your floor.
          </p>

          <ul>
            <li>Removes scratches, stains & dull patches</li>
            <li>Flattens uneven or wavy floors</li>
            <li>Restores original natural stone shine</li>
            <li>Strengthens surface with crystallization</li>
            <li>Improves durability and floor lifespan</li>
          </ul>
        </div>

        {/* Process Section */}
        <div className="mp-section">
          <h2>Our Floor Grinding & Crystallization Process</h2>
          <div className="mp-grid">
            <div className="mp-box">Initial Surface Inspection</div>
            <div className="mp-box">Deep Cleaning & Stain Removal</div>
            <div className="mp-box">Diamond Grinding (Heavy & Medium)</div>
            <div className="mp-box">Honing for Smooth Surface</div>
            <div className="mp-box">Polishing with Industrial Pads</div>
            <div className="mp-box">Crystallization for High Gloss</div>
            <div className="mp-box">Buffing & Final Mirror Shine</div>
          </div>
        </div>

        {/* Maintenance Services */}
        <div className="mp-section">
          <h2>Floor Maintenance Services We Provide</h2>
          <ul>
            <li>Daily/Monthly Floor Cleaning</li>
            <li>Periodic Polishing</li>
            <li>Floor Scrubbing & Buffing</li>
            <li>Sealing to protect stone surface</li>
            <li>Crystallization for extra gloss</li>
            <li>Worn-out floor restoration</li>
          </ul>
        </div>

        {/* Best Suited For */}
        <div className="mp-section">
          <h2>Best Suited For</h2>
          <div className="mp-grid">
            <div className="mp-box">Residential Homes & Flats</div>
            <div className="mp-box">Hotels & Banquet Halls</div>
            <div className="mp-box">Shopping Malls & Showrooms</div>
            <div className="mp-box">Corporate Offices & Commercial Spaces</div>
          </div>
        </div>

        {/* Bottom Image */}
        {/* <img
          src="/images/floor-grinding-hero.jpg"
          alt="Floor Crystallization and Polishing"
          className="mp-hero-image"
        /> */}
      </div>
    </>
  );
}
