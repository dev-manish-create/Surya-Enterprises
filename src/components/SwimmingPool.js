import { Helmet } from "react-helmet";
import "./MarblePolishing.css"; // using the same css

const SwimmingPoolCleaning = () => {
  return (
    <div className="mp-container">
      <Helmet>
        <title>Swimming Pool Cleaning & Maintenance | Surya Enterprises</title>
        <meta
          name="description"
          content="Professional swimming pool cleaning and maintenance services including vacuuming, water treatment, chemical balancing, tile cleaning, filtration system servicing, and debris removal."
        />
      </Helmet>

      {/* Top Image */}
      <img
        src="https://res.cloudinary.com/djjtva8k1/image/upload/v1760429929/img31_wyrzsn.jpg"
        alt="Swimming Pool Cleaning"
        className="mp-top-image"
      />

      {/* Title */}
      <h1 className="mp-title">Swimming Pool Cleaning & Maintenance Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        Surya Enterprises offers complete swimming pool cleaning and maintenance
        solutions to ensure your pool stays hygienic, crystal-clear, and safe for
        swimming. Whether it's a residential pool, hotel pool, clubhouse, or
        commercial facility — we provide highly professional and reliable pool care
        services.
      </p>

      {/* Section 1 */}
      <div className="mp-section">
        <h2>Our Swimming Pool Cleaning Process</h2>
        <ul>
          <li>Skimming & removal of floating debris</li>
          <li>Thorough vacuuming of floor & wall surfaces</li>
          <li>Tile scrubbing and algae removal</li>
          <li>Cleaning filters, pumps & drain systems</li>
          <li>Chemical balancing for safe pH levels</li>
          <li>Deep cleaning with anti-algae treatment</li>
          <li>Water quality testing & purification</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mp-section">
        <h2>Types of Pool Cleaning Services</h2>

        <div className="mp-grid">
          <div className="mp-box">Regular Pool Cleaning Service</div>
          <div className="mp-box">Deep Cleaning & Algae Treatment</div>
          <div className="mp-box">Vacuum & Tile Scrubbing Service</div>
          <div className="mp-box">Water Treatment & Chlorination</div>
          <div className="mp-box">Filter & Pump Maintenance</div>
          <div className="mp-box">Full Pool Restoration Service</div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mp-section">
        <h2>Why Choose Surya Enterprises?</h2>
        <ul>
          <li>Experienced & trained pool cleaning experts</li>
          <li>Advanced cleaning tools & filtration techniques</li>
          <li>Eco-friendly and safe chemicals</li>
          <li>Affordable pricing & professional service</li>
          <li>Timely maintenance visits</li>
          <li>100% satisfaction guaranteed</li>
        </ul>
      </div>

      {/* Hero Image */}
      

      {/* Section 4 */}
      <div className="mp-section">
        <h2>Who Can Benefit From Our Services?</h2>
        <ul>
          <li>Homes & Apartments</li>
          <li>Hotels & Resorts</li>
          <li>Clubs & Fitness Centers</li>
          <li>Schools & Universities</li>
          <li>Commercial Swimming Pools</li>
          <li>Sports Complexes</li>
        </ul>
      </div>
    </div>
  );
};

export default SwimmingPoolCleaning;
