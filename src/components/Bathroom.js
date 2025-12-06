import { Helmet } from "react-helmet";
import "./MarblePolishing.css";



const BathroomCleaningService = () => {
  return (
    <div className="mp-container">

      <Helmet>
        <title>Bathroom Deep Cleaning Service | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises provides professional bathroom deep cleaning services including descaling, stain removal, sanitization, tile scrubbing, and complete washroom hygiene restoration. Ideal for homes, hotels and offices."
        />
      </Helmet>

      {/* Top Image */}
      <img src='https://res.cloudinary.com/djjtva8k1/image/upload/v1761895488/washroom_cleaning_lddcps.png' alt="Bathroom Cleaning Service" className="mp-top-image" />

      {/* Title */}
      <h1 className="mp-title">Professional Bathroom Deep Cleaning Services</h1>

      {/* Introduction */}
      <p className="mp-intro">
        Surya Enterprises offers expert <strong>Bathroom Deep Cleaning</strong> designed to make your
        washrooms 100% hygienic, fresh, and sparkling clean. We remove stains, hard water marks,
        soap scum, dirt buildup, and germs using advanced chemicals and professional tools.
        Our trained team ensures every corner of your bathroom shines like new.
      </p>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Our Bathroom Cleaning Service?</h2>
        <p>A deep-cleaned and fully sanitized bathroom ensures better hygiene and comfort.</p>
        <ul>
          <li>Tile & floor scrubbing with industrial machines</li>
          <li>Removal of lime scale, hard-water stains & deposits</li>
          <li>Deep cleaning of WC, washbasin, faucets & shower area</li>
          <li>Degreasing and cleaning of exhaust fan & fittings</li>
          <li>Safe & eco-friendly chemical treatment</li>
          <li>Complete bathroom sanitization & deodorization</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img src={bathWork} alt="Bathroom Deep Cleaning Work" className="mp-hero-image" /> */}

      {/* Deep Cleaning Process */}
      <div className="mp-section">
        <h2>Our Bathroom Deep Cleaning Process</h2>
        <ul>
          <li><strong>Inspection:</strong> Identifying stains, deposits and cleaning needs.</li>
          <li><strong>Dry & Wet Dusting:</strong> Removing dust, cobwebs and loose dirt.</li>
          <li><strong>Tile & Grout Scrubbing:</strong> Deep machine scrubbing for shine.</li>
          <li><strong>WC & Washbasin Cleaning:</strong> Stain removal and polishing.</li>
          <li><strong>Faucet & Tap Cleaning:</strong> Removing calcium and salt deposits.</li>
          <li><strong>Shower Area Cleaning:</strong> Soap scum & scale removal.</li>
          <li><strong>Glass Cleaning:</strong> Removing water marks & soap stains.</li>
          <li><strong>Final Sanitization:</strong> Germ-free and fresh-smelling bathroom.</li>
        </ul>
      </div>

      {/* Suitable For */}
      <div className="mp-section">
        <h2>Best Suited For</h2>
        <div className="mp-grid">
          <div className="mp-box">Homes & Apartments</div>
          <div className="mp-box">Hotels & Guest Houses</div>
          <div className="mp-box">Offices & Commercial Spaces</div>
          <div className="mp-box">Showrooms & Retail Stores</div>
        </div>
      </div>

    </div>
  );
};

export default BathroomCleaningService;
