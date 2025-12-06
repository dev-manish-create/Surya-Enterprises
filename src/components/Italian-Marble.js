import { Helmet } from "react-helmet";

const ItalianMarblePolishing = () => {
  return (
    <>
      <Helmet>
        <title>
          Italian Marble Polishing Services | Diamond Grinding & High-Gloss Mirror Finishing
        </title>

        <meta
          name="description"
          content="Premium Italian marble polishing, grinding & crystallization service. Restore shine, remove scratches, and achieve a high-gloss mirror finish. Book Surya Enterprises professional polishing experts."
        />

        <meta
          name="keywords"
          content="Italian marble polishing, Italian floor polishing, marble grinding Delhi, diamond polishing, marble crystallization, mirror finish marble"
        />

        <link
          rel="canonical"
          href="https://www.suryaenterprisses.com/services/italian-marble-polishing"
        />
      </Helmet>

      <div className="mp-container">
        
        {/* Top Image */}
        <img
          src="https://res.cloudinary.com/djjtva8k1/image/upload/v1764918934/Italian-marble_ad7j18.jpg"
          alt="Italian Marble Polishing"
          className="mp-top-image"
        />

        {/* Title */}
        <h1 className="mp-title">Italian Marble Polishing Services</h1>

        {/* Intro */}
        <p className="mp-intro">
          Italian marble is one of the most premium and elegant flooring materials. To keep its natural
          beauty intact, it requires expert grinding and high-gloss polishing using premium diamond pads.
          Surya Enterprises specializes in <strong>Italian marble polishing, grinding, honing, and mirror finishing</strong>,
          delivering luxurious shine and long-lasting protection.
        </p>

        {/* Why Choose Us */}
        <div className="mp-section">
          <h2>Why Choose Our Italian Marble Polishing Service?</h2>
          <p>
            Italian marble is delicate and needs professional handling. Our trained team uses industry-grade 
            machines and advanced techniques to restore its natural brilliance.
          </p>

          <ul>
            <li>Premium diamond grinding for scratch removal</li>
            <li>Honing for smooth and even surface</li>
            <li>Mirror-like glossy polishing</li>
            <li>High-quality chemical crystallization</li>
            <li>Non-slippery finish with long durability</li>
          </ul>
        </div>

        {/* Process Section */}
        <div className="mp-section">
          <h2>Our Italian Marble Polishing Process</h2>

          <div className="mp-grid">
            <div className="mp-box">Inspection & Surface Preparation</div>
            <div className="mp-box">Deep Cleaning & Dust Removal</div>
            <div className="mp-box">Diamond Grinding to Remove Scratches</div>
            <div className="mp-box">Honing for Smooth Finish</div>
            <div className="mp-box">High-Gloss Polishing</div>
            <div className="mp-box">Crystallization & Sealing</div>
            <div className="mp-box">Final Buffing & Quality Check</div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mp-section">
          <h2>Benefits of Italian Marble Polishing</h2>

          <ul>
            <li>Restores natural shine and premium appearance</li>
            <li>Removes dullness, stains, and scratches</li>
            <li>Gives a mirror-like reflective finish</li>
            <li>Increases life and durability of marble</li>
            <li>Improves beauty of home, office & hotels</li>
          </ul>
        </div>

        {/* Bottom Hero Image */}
        {/* <img
          src="/images/italian-marble-hero.jpg"
          alt="Italian Marble Restoration"
          className="mp-hero-image"
        /> */}

      </div>
    </>
  );
};

export default ItalianMarblePolishing;
