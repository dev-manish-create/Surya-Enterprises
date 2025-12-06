// PlumberService.jsx
import { Helmet } from "react-helmet";
import "./MarblePolishing.css"; // using same CSS structure

export default function PlumberService() {
  return (
    <div className="mp-container">
      <Helmet>
        <title>Professional Plumber Services | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises offers expert plumber services including leakage repair, pipe fitting, bathroom fittings installation, drain cleaning, tap replacement, and complete plumbing maintenance for homes, offices, and commercial spaces."
        />
        <meta
          name="keywords"
          content="plumber, leakage repair, pipe fitting, bathroom fittings installation, drain cleaning, tap repair, plumbing service"
        />
        <meta property="og:title" content="Professional Plumber Services | Surya Enterprises" />
        <meta
          property="og:description"
          content="Reliable plumbing services including leakage repair, tap installation, pipeline fixing, drain cleaning, and bathroom fittings installation."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Top Image */}
      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1761889248/plumber_bfuhgq.png"
        alt="Professional Plumber Fixing Pipe"
        className="mp-top-image"
      />

      {/* Title */}
      <h1 className="mp-title">Professional Plumber Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        At <strong>Surya Enterprises</strong>, we provide fast, reliable, and professional{" "}
        <strong>plumbing services</strong> for residences, commercial spaces, hotels, and offices. From
        small leakage repairs to complete plumbing installation, our trained experts ensure high-quality,
        long-lasting solutions.
      </p>

      {/* Process Section */}
      <section className="mp-section">
        <h2>Our Plumbing Service Process</h2>
        <p>Our systematic process ensures efficient and durable plumbing solutions:</p>
        <ul>
          <li><strong>Inspection:</strong> Identifying the issue and checking pipes, joints, and fittings.</li>
          <li><strong>Leakage Detection:</strong> Tools-based inspection for hidden leaks.</li>
          <li><strong>Pipe Repair / Replacement:</strong> Fixing or replacing damaged pipelines.</li>
          <li><strong>Tap & Fittings Installation:</strong> Installing bathroom, washbasin, and kitchen fittings.</li>
          <li><strong>Drain Cleaning:</strong> Clearing blockages using advanced tools.</li>
          <li><strong>Bathroom Plumbing:</strong> Shower, faucet, jet spray, flush tank repair & installation.</li>
          <li><strong>Testing:</strong> Checking water flow, pressure, and sealing.</li>
        </ul>
      </section>

      {/* Types of Services Section */}
      <section className="mp-section">
        <h2>Types of Plumber Services We Offer</h2>
        <p>We handle all types of residential and commercial plumbing needs:</p>
        <ul>
          <li><strong>Leakage Repair:</strong> Wall seepage, tap leakage, and pipeline leakage.</li>
          <li><strong>Pipe Fitting:</strong> New pipe installation and old pipe replacement.</li>
          <li><strong>Bathroom Fittings:</strong> Shower, flush, taps, mixers, jet spray installation.</li>
          <li><strong>Kitchen Plumbing:</strong> Sink pipe repair, tap installation, drainage correction.</li>
          <li><strong>Drain Blockage Removal:</strong> Clearing clogged lines and floor drains.</li>
          <li><strong>Water Tank Plumbing:</strong> Tank outlet, inlet, and valve replacement.</li>
          <li><strong>Commercial Plumbing:</strong> Offices, hotels, restaurants, retail stores.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Experienced and certified plumbers</li>
          <li>Use of quality pipes, fittings, and branded materials</li>
          <li>Quick same-day service availability</li>
          <li>Affordable pricing with full transparency</li>
          <li>Reliable and long-lasting repair work</li>
          <li>Suitable for homes, offices, hotels & more</li>
        </ul>
      </section>

      {/* Best Suited For */}
      <section className="mp-section">
        <h2>Best Suited For</h2>
        <div className="mp-grid">
          <div className="mp-box">Homes & Apartments</div>
          <div className="mp-box">Hotels & Banquet Halls</div>
          <div className="mp-box">Offices & Commercial Spaces</div>
          <div className="mp-box">Retail Stores & Restaurants</div>
        </div>
      </section>
    </div>
  );
}
