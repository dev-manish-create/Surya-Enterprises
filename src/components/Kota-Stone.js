import { Helmet } from "react-helmet";

const KotaStonePolishing = () => {
  return (
    <>
      <Helmet>
        <title>Kota Stone Polishing Services | Professional Kota Floor Grinding & Restoration</title>
        <meta
          name="description"
          content="Professional Kota stone polishing, grinding & restoration services. Restore shine, remove scratches & make your Kota flooring look brand new. Book Surya Enterprises today."
        />
        <meta
          name="keywords"
          content="Kota stone polishing, Kota stone grinding, Kota stone restoration, floor polishing services, stone grinding Delhi, Kota floor repair"
        />
        <link rel="canonical" href="https://www.suryaenterprisses.com/services/kota-stone-polishing" />
      </Helmet>

      <div className="mp-container">

        {/* Top Image */}
        <img
          src="https://res.cloudinary.com/djjtva8k1/image/upload/v1760429934/img35_szavtj.jpg"
          alt="Kota Stone Polishing"
          className="mp-top-image"
        />

        {/* Heading */}
        <h1 className="mp-title">Kota Stone Polishing Services</h1>

        {/* Intro */}
        <p className="mp-intro">
          Surya Enterprises provides premium <strong>Kota stone polishing, grinding, and restoration</strong> 
          services designed to bring out a natural, mirror-like shine while increasing durability and 
          lifespan. Whether your Kota stone flooring is dull, uneven, or stained — our experts restore it 
          beautifully using professional-grade machines and diamond abrasives.
        </p>

        {/* Why Choose Section */}
        <div className="mp-section">
          <h2>Why Choose Our Kota Stone Polishing?</h2>
          <p>
            Kota stone requires specialized treatment, and our trained experts ensure long-lasting, 
            stunning finishes with zero damage.
          </p>

          <ul>
            <li>Highly professional grinding and polishing machines</li>
            <li>Brings natural gloss back to Kota floors</li>
            <li>Removes scratches, stains, and unevenness</li>
            <li>Deep cleaning with industrial-grade solutions</li>
            <li>Smooth, durable, slip-resistant finish</li>
          </ul>
        </div>

        {/* Our Process */}
        <div className="mp-section">
          <h2>Our Kota Stone Polishing Process</h2>

          <div className="mp-grid">
            <div className="mp-box">Surface Inspection & Cleaning</div>
            <div className="mp-box">Grinding with Diamond Pads</div>
            <div className="mp-box">Smoothening & Levelling</div>
            <div className="mp-box">High-Gloss Polishing</div>
            <div className="mp-box">Buffing & Final Touch</div>
            <div className="mp-box">Quality Check</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mp-section">
          <h2>Benefits of Kota Stone Polishing</h2>
          <ul>
            <li>Restores natural beauty and shine</li>
            <li>Increases durability and lifespan</li>
            <li>Removes dullness, stains & scratches</li>
            <li>Makes flooring smooth and elegant</li>
            <li>Improves the overall look of homes & offices</li>
          </ul>
        </div>

        {/* Bottom Hero Image */}
        {/* <img
          src="/images/kota-hero.jpg"
          alt="Kota Stone Restoration"
          className="mp-hero-image"
        /> */}

      </div>
    </>
  );
};

export default KotaStonePolishing;
