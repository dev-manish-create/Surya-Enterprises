import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./MarblePolishing-Delhi.css";



const hotelLinks = [
  { name: "Jaypee Vasant Continental Delhi", url: "https://www.jaypeehotels.com" },
  { name: "The Lalit New Delhi", url: "https://www.thelalit.com" },
  { name: "The Lalit Jaipur", url: "https://www.thelalit.com" },
  { name: "The Lalit Great Eastern Kolkata", url: "https://www.thelalit.com" },
  { name: "The Lalit Goa", url: "https://www.thelalit.com" },
  { name: "The Lalit Mangar Haryana", url: "https://www.thelalit.com" },
  { name: "Raddison Blu Hotel Ludhiana", url: "https://www.radissonhotels.com" },
  { name: "Narendra Bhawan Bikaner Rajasthan", url: "https://www.narendrabhawan.com" },
  { name: "The Ashoka Bangalore", url: "https://www.theashokgroup.com" },
  { name: "The Lalit Grand Srinagar", url: "https://www.thelalit.com" },
  { name: "Ramada Plaza Chandigarh", url: "https://www.ramada.com" },
];

const MarblePolishingDelhi = () => {
  return (
    <div className="mpd">

      {/* SEO Helmet */}
      <Helmet>
        <title>Marble Polishing Service in Delhi | Expert Floor Restoration</title>
        <meta
          name="description"
          content="Professional marble polishing service in Delhi. Detailed grinding, honing, polishing & crystallization using Italian machines. 12+ years experience restoring marble floors."
        />
        <meta
          name="keywords"
          content="marble polishing delhi, marble floor polishing service delhi, italian marble polishing, floor grinding delhi, marble maintenance, crystallization service delhi"
        />
        <link
          rel="canonical"
          href="https://www.suryaenterprisses.com/services/marble-polishing-delhi"
        />
      </Helmet>

      {/* HERO */}
      <header className="mpd-hero">
        <div className="mpd-hero-content">
          <h1>Marble Polishing Service in Delhi</h1>
          <p>Restore Natural Shine • Remove Scratches • Premium Floor Restoration</p>
        </div>
      </header>

      {/* INTRO */}
      <section className="mpd-container">
        <h2>Professional Marble Polishing in Delhi – Complete Floor Restoration</h2>

        <p>
          <NavLink to="/services/marble-polishing" style={{ textDecoration: "none", color: "#1bc5c8" }}>Marble polishing</NavLink> is the most effective way to restore the natural shine, smoothness
          and beauty of marble floors. Over time, marble loses its gloss due to foot traffic,
          stains, scratches, dullness, acid spills, and daily usage. Our professional marble
          polishing service in Delhi uses international-grade machines, diamond abrasives,
          and industrial-grade polishing powders to revive your marble floors to a mirror-finish.
        </p>

        <p>
          At <NavLink to="/" style={{ textDecoration: "none", color: "#1bc5c8" }}>Surya Enterprises</NavLink>, we specialize in polishing, grinding,
          honing, crystallization, and repairing all types of marble including Italian Marble,
          Indian Marble, Imported Marble, and Heritage Stones. We provide services for luxury
          hotels, corporate buildings, residential homes, villas, banquet halls and commercial
          spaces for more than <strong>12+ years</strong>.
        </p>

        <div className="mpd-images">
          <img src="https://res.cloudinary.com/djjtva8k1/image/upload/v1764920995/marble-polishing-delhi-2_whjdll.jpg" alt="Marble Polishing Delhi" />
          <img src='https://res.cloudinary.com/djjtva8k1/image/upload/v1764920995/marblel-polishing-delhi-1_yyw1z6.jpg'alt="Marble Floor Restoration Delhi" />
        </div>
      </section>

      {/* WHAT IS MARBLE POLISHING */}
      <section className="mpd-section">
        <h2>What Exactly Is Marble Polishing?</h2>

        <p>
          <NavLink to="/services/marble-polishing" style={{ textDecoration: "none", color: "#1bc5c8" }}>Marble polishing</NavLink> is a specialized stone-restoration technique that smoothens the
          surface, removes scratches, and enhances shine using abrasive diamond pads and
          polishing chemicals. Polishing restores the stone’s reflective properties, giving
          it a glossy, mirror-like appearance.
        </p>

        <p>
          The process involves removing microscopic layers of the stone surface and creating
          a compact, reflective finish. The more the surface is refined, the higher the shine.
        </p>

        <h3>Types of Marble Polishing We Offer:</h3>
        <ul>
          <li><strong>Standard Polishing</strong> – Mild shine using polishing powder</li>
          <li><strong>Diamond Polishing</strong> – Deep shine using diamond abrasives</li>
          <li><strong>Mirror Finish Polishing</strong> – High-gloss, glass-like reflection</li>
          <li><strong>Crystallization</strong> – Chemical hardening for long-lasting shine</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="mpd-section">
        <h2>Our Step-by-Step Marble Polishing Process</h2>

        <p>
          Our marble polishing procedure follows an internationally recommended multi-stage
          process ensuring flawless finishing, long-lasting shine, and complete restoration.
        </p>

        <ol>
          <li>
            <strong>1. Floor Inspection & Testing:</strong>  
            We check for cracks, stains, lippage, deep scratches and determine the hardness
            of the marble to decide the polishing grade.
          </li>

          <li>
            <strong>2. Machine Grinding:</strong>  
            Heavy-duty grinding removes deep scratches, high edges, stains, lippage and
            uneven surfaces. Imported Italian diamond abrasives are used.
          </li>

          <li>
            <strong>3. Honing:</strong>  
            The surface is refined using medium-grit diamonds to prepare the floor for
            polishing. This step smoothens the stone texture.
          </li>

          <li>
            <strong>4. Diamond Polishing:</strong>  
            Fine-grit diamond pads restore the natural reflection and shine of marble.
            This makes the surface smooth, glossy and premium-looking.
          </li>

          <li>
            <strong>5. Crystallization:</strong>  
            A chemical reaction is done on the surface to harden the marble and increase
            its shine. This gives a long-lasting glossy, glass-like finish.
          </li>

          <li>
            <strong>6. Sealing & Protection:</strong>  
            We apply a protective sealer to prevent future stains, scratches and absorption
            of liquids.
          </li>
        </ol>
      </section>

      {/* TOOLS & TECHNOLOGY */}
      <section className="mpd-section">
        <h2>Tools, Machines & Techniques We Use</h2>

        <p>
          We use industrial-grade European machines and high-quality diamond abrasives to
          ensure maximum shine with zero surface damage.
        </p>

        <ul>
          <li>Italian Single Disc & Heavy-Duty Grinding Machines</li>
          <li>Diamond Abrasive Pads (50–3000 Grit)</li>
          <li>Industrial Polishing Powders & Crystallizers</li>
          <li>Planetary Grinding Machines</li>
          <li>Vacuum Wet-Clean Extraction System</li>
          <li>Marble Resin, Fillers & Crack Repair Tools</li>
        </ul>

        <p>
          Our team follows industry standard practices used by top hotels and corporate
          facilities worldwide.
        </p>
      </section>

      {/* HOTELS */}
      <section className="mpd-section">
        <h2>Hotels Where We Provide Marble Polishing & Maintenance</h2>

        <p>We proudly serve luxury hotels across India.</p>

        <ul className="mpd-hotels">
          {hotelLinks.map((h, i) => (
            <li key={i}>
              <a href={h.url} target="_blank" rel="noopener noreferrer">
                {h.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mpd-section">
        <h2>Why Choose Surya Enterprises?</h2>

        <ul className="mpd-benefits">
          <li>12+ Years Experience in Marble Polishing</li>
          <li>Highly Trained, Professional Technicians</li>
          <li>Imported Italian Machines & Diamond Pads</li>
          <li>Mirror Finish Guarantee</li>
          <li>Dust-Free, Noise-Free, Hassle-Free Work</li>
          <li>Affordable Pricing & Transparent Service</li>
          <li>Trusted by 5-Star Hotels Across India</li>
          <li>On-Time Completion Without Any Mess</li>
        </ul>
      </section>
    </div>
  );
};

export default MarblePolishingDelhi;
