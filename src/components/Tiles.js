import { Helmet } from "react-helmet";
import "./MarblePolishing.css";



const TilesCleaningService = () => {
  return (
    <div className="mp-container">

      <Helmet>
        <title>Tiles Cleaning & Floor Scrubbing Service | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises provides professional tiles cleaning, grout cleaning, deep floor scrubbing, stain removal, and restoration services using industrial machines and advanced chemicals."
        />
      </Helmet>

      {/* Top Image */}
      <img src='https://res.cloudinary.com/djjtva8k1/image/upload/v1761723158/service_3_btmve2.jpg' alt="Tiles Cleaning Service" className="mp-top-image" />

      {/* Title */}
      <h1 className="mp-title">Professional Tiles Cleaning Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        Surya Enterprises specializes in <strong>Tiles Cleaning</strong> and <strong>Grout Restoration</strong> using
        high-quality chemicals and industrial scrubbing machines. Whether your tiles look dull, stained,
        greasy, or covered with dirt buildup — our expert team restores their natural shine and brightness.
        We clean all types of tiles, including ceramic, vitrified, porcelain, and bathroom anti-skid tiles.
      </p>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Our Tiles Cleaning Service?</h2>
        <p>We ensure smooth, shiny, and hygienic floors with professional cleaning.</p>
        <ul>
          <li>Industrial-grade floor scrubbing machines</li>
          <li>Removal of stains, dirt and chemical deposits</li>
          <li>Deep grout cleaning and restoration</li>
          <li>Anti-skid tile deep cleaning for bathrooms & balconies</li>
          <li>Safe and effective cleaning chemicals</li>
          <li>Trained, experienced and professional team</li>
        </ul>
      </div>

      {/* Work Image */}
      {/* <img src={tileWork} alt="Tiles Deep Cleaning Work" className="mp-hero-image" /> */}

      {/* Cleaning Process */}
      <div className="mp-section">
        <h2>Our Tiles Deep Cleaning Process</h2>
        <ul>
          <li><strong>Inspection:</strong> Identifying stains, dirt buildup and dull areas.</li>
          <li><strong>Dry Dust Removal:</strong> Sweeping & vacuuming the entire floor.</li>
          <li><strong>Chemical Treatment:</strong> Applying tile-friendly cleaning agents.</li>
          <li><strong>Machine Scrubbing:</strong> Deep cleaning using industrial scrubbers.</li>
          <li><strong>Grout Cleaning:</strong> Removing stubborn dirt from tile gaps.</li>
          <li><strong>Stain Treatment:</strong> Spot cleaning for dark patches & hard stains.</li>
          <li><strong>Water Extraction:</strong> Removing dirty water and detergent.</li>
          <li><strong>Final Rinse:</strong> Leaving tiles fresh, clean and shiny.</li>
        </ul>
      </div>

      {/* Suitable For */}
      <div className="mp-section">
        <h2>Best Suited For</h2>
        <div className="mp-grid">
          <div className="mp-box">Homes & Apartments</div>
          <div className="mp-box">Hotels & Banquet Halls</div>
          <div className="mp-box">Offices & Commercial Spaces</div>
          <div className="mp-box">Showrooms & Retail Stores</div>
        </div>
      </div>
      
    </div>
  );
};

export default TilesCleaningService;
