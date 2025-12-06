import { Helmet } from "react-helmet";
import "./MarblePolishing.css";

export default function GraniteFloorPolishing() {
  return (
    <>
      <Helmet>
        <title>Granite Floor Polishing Services | Diamond Grinding & High-Gloss Shine</title>

        <meta
          name="description"
          content="Professional granite floor polishing, grinding, and restoration services. Get premium shine, scratch removal, and long-lasting durability with Surya Enterprises."
        />

        <meta
          name="keywords"
          content="granite polishing, granite floor polishing, granite grinding, granite cleaning, stone polishing services, granite restoration"
        />

        <link
          rel="canonical"
          href="https://www.suryaenterprisses.com/services/granite-floor-polishing"
        />
      </Helmet>

      <div className="mp-container">
        
        {/* Top Image */}
        <img
          src="https://res.cloudinary.com/djjtva8k1/image/upload/v1764919102/Granite_floor_polishing_w6zsrs.jpg"
          alt="Granite Floor Polishing"
          className="mp-top-image"
        />

        {/* Title */}
        <h1 className="mp-title">Granite Floor Polishing Services</h1>

        {/* Intro */}
        <p className="mp-intro">
          Granite is a premium and highly durable natural stone, but over time it becomes dull due to
          scratches, hard water stains, and foot traffic. Surya Enterprises provides expert{" "}
          <strong>granite floor polishing, grinding, and restoration</strong> using industrial-grade machines
          and high-quality diamond pads to restore the natural shine of your granite floors.
        </p>

        {/* Why Choose Us */}
        <div className="mp-section">
          <h2>Why Choose Our Granite Polishing Services?</h2>
          <p>
            Granite is harder than marble and requires special grinding and polishing equipment. Our
            professional team ensures perfect finishing without harming the stone surface.
          </p>

          <ul>
            <li>Deep diamond grinding for heavy scratches</li>
            <li>Honing to restore smooth and even texture</li>
            <li>High-gloss mirror polishing</li>
            <li>Granite sealing for long-term protection</li>
            <li>Advanced machines & skilled technicians</li>
          </ul>
        </div>

        {/* Process Section */}
        <div className="mp-section">
          <h2>Our Granite Polishing Process</h2>

          <div className="mp-grid">
            <div className="mp-box">Inspection & Surface Assessment</div>
            <div className="mp-box">Granite Deep Cleaning</div>
            <div className="mp-box">Diamond Grinding to Remove Scratches</div>
            <div className="mp-box">Honing for Smooth Finish</div>
            <div className="mp-box">Polishing to High-Gloss Shine</div>
            <div className="mp-box">Crystal Shield Coating</div>
            <div className="mp-box">Final Buffing & Quality Verification</div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mp-section">
          <h2>Benefits of Granite Floor Polishing</h2>

          <ul>
            <li>Restores natural glossy finish</li>
            <li>Removes dullness, stains & surface scratches</li>
            <li>Makes granite floors look new again</li>
            <li>Improves floor durability and lifespan</li>
            <li>Enhances appearance of homes, hotels & offices</li>
          </ul>
        </div>

        {/* Best Suited For */}
        <div className="mp-section">
          <h2>Best Suited For</h2>

          <div className="mp-grid">
            <div className="mp-box">Residential Homes & Apartments</div>
            <div className="mp-box">Hotels & Banquet Halls</div>
            <div className="mp-box">Office Spaces & Showrooms</div>
            <div className="mp-box">Commercial Buildings & Malls</div>
          </div>
        </div>

        {/* Bottom Image */}
        {/* <img
          src="/images/granite-polish-hero.jpg"
          alt="Granite Polishing Work"
          className="mp-hero-image"
        /> */}
      </div>
    </>
  );
}
