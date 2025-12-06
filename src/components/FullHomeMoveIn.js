import { Helmet } from "react-helmet";
import "./MarblePolishing.css";



const FullHomeMoveInService = () => {
  return (
    <div className="mp-container">

      <Helmet>
        <title>Full Home / Move-In Cleaning Service | Surya Enterprises</title>
        <meta
          name="description"
          content="Surya Enterprises provides professional full home deep cleaning and move-in cleaning services including kitchen, bathroom, floor scrubbing, dusting, sanitization, and complete home hygiene restoration."
        />
      </Helmet>

      {/* Top Image */}
      <img src='https://res.cloudinary.com/djjtva8k1/image/upload/v1761895488/Full_Home_Move-in_Cleaning_kda6zw.png' alt="Move In Cleaning" className="mp-top-image" />

      {/* Title */}
      <h1 className="mp-title">Full Home / Move-In Cleaning Services</h1>

      {/* Intro */}
      <p className="mp-intro">
        Moving into a new home or refreshing an existing one? Surya Enterprises offers a complete
        <strong> Full Home Cleaning</strong> and <strong>Move-In Cleaning Service</strong> designed to give your space a
        fresh, hygienic, and spotless look. Our trained team ensures deep cleaning of every room,
        corner, and surface using professional-grade machines and eco-friendly chemicals.
      </p>

      {/* Why Choose Us */}
      <div className="mp-section">
        <h2>Why Choose Our Full Home / Move-In Cleaning?</h2>
        <p>Your home deserves the highest level of cleanliness and shine.</p>
        <ul>
          <li>Professional deep cleaning for every room</li>
          <li>Stain removal & chemical treatment where required</li>
          <li>Floor scrubbing with industrial machines</li>
          <li>Safe, eco-friendly cleaning solutions</li>
          <li>Trained & experienced cleaning staff</li>
          <li>Ideal for new homes & pre-move households</li>
        </ul>
      </div>

      {/* Hero Image */}
      {/* <img src={moveinWork} alt="Deep Home Cleaning Work" className="mp-hero-image" /> */}

      {/* Cleaning Process */}
      <div className="mp-section">
        <h2>Our Full Home Deep Cleaning Process</h2>
        <ul>
          <li><strong>Dusting & Vacuuming:</strong> Fans, lights, windows, doors, and all surfaces.</li>
          <li><strong>Kitchen Deep Cleaning:</strong> Degreasing, shelf cleaning, tiles scrubbing.</li>
          <li><strong>Bathroom Sanitization:</strong> Descaling, stain removal, disinfecting.</li>
          <li><strong>Floor Scrubbing:</strong> Machine scrubbing for tiles & marble.</li>
          <li><strong>Cobweb & Corner Cleaning:</strong> High-reach areas & tough corners.</li>
          <li><strong>Furniture & Upholstery Cleaning:</strong> Dust removal & vacuuming.</li>
          <li><strong>Balcony / Utility Cleaning:</strong> Scrubbing & hygienic washing.</li>
          <li><strong>Final Disinfection:</strong> Sanitization for complete hygiene.</li>
        </ul>
      </div>

      {/* Types of Move-In / Deep Cleaning */}
      <div className="mp-section">
        <h2>Services Included in Move-In / Full Home Cleaning</h2>
        <div className="mp-grid">
          <div className="mp-box">Living Room Cleaning</div>
          <div className="mp-box">Bedroom Cleaning</div>
          <div className="mp-box">Bathroom Deep Cleaning</div>
          <div className="mp-box">Kitchen Deep Cleaning</div>
          <div className="mp-box">Floor Deep Scrubbing</div>
          <div className="mp-box">Balcony / Utility Cleaning</div>
          <div className="mp-box">Furniture Dusting</div>
          <div className="mp-box">Full House Sanitization</div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mp-section">
        <h2>Benefits of Move-In / Full Home Cleaning</h2>
        <ul>
          <li>Ready-to-live hygienic home</li>
          <li>Removes dust, stains, bacteria, grease & allergens</li>
          <li>Makes every room fresh and spotless</li>
          <li>Perfect for renters, homeowners, and new buyers</li>
          <li>Ideal before shifting furniture and appliances</li>
        </ul>
      </div>

    </div>
  );
};

export default FullHomeMoveInService;
