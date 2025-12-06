import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import './AllServices.css';

const services = [
  { name: "Marble Polishing", path: "/services/marble-polishing" },
  {name: "Kota Stone Polishing",path: "/services/kota-stone-polishing"},
  {name: "Italian Marble polishing",path: "/services/italian-marble-polishing"},
  {name: "Granite Floor Polishing",path: "/services/granite-floor-polishing"},
  {name: "Floor Grinding/Crystallization",path:"/services/floor-grinding-maintenance-crystallization"},
  { name: "Housekeeping Services", path: "/services/housekeeping" },
  { name: "Sofa & Carpet Shampooing", path: "/services/sofa-carpet-cleaning" },
  { name: "Swimming Pool Cleaning", path: "/services/pool-cleaning" },
  { name: "Deep Cleaning", path: "/services/deep-cleaning" },
  { name: "High Pressure Cleaning", path: "/services/High-pressure-cleaning" },
  { name: "Office Maintenance", path: "/services/office-maintenance" },
  { name: "Tiles Cleaning", path: "/services/tiles-cleaning" },
  { name: "Wooden Floor Polishing", path: "/services/wooden-floor-cleaning" },
  { name: "Glass and Fascade Cleaning", path: "/services/glass-and-fascade-cleaning" },
  { name: "Carpenter", path: "/services/carpenter" },
  { name: "Electrician", path: "/services/electrician" },
  {name : "Plumber", path: "/services/plumber"},
  { name: "Pest Control", path: "/services/pest-control" },
  { name: "Full Home / Move-In Cleaning", path: "/services/full-home-move-in-cleaning" },
  { name: "Bathroom Cleaning", path: "/services/bathroom-cleaning" },
];

export default function ServicesList() {
  return (
    <div className="services-container">
        <Helmet>
  <title>Our Services | Surya Enterprises | Cleaning, Polishing & Maintenance</title>
  <meta
    name="description"
    content="Explore all professional services offered by Surya Enterprises including marble polishing, housekeeping, sofa cleaning, carpet shampooing, deep cleaning, pest control, electrical services, carpenter work, swimming pool cleaning, tiles cleaning, wooden floor polishing & more."
  />
  <meta
    name="keywords"
    content="cleaning services, polishing services, marble polishing, sofa cleaning, carpet shampooing, deep cleaning, pest control, electrician, carpenter, housekeeping, office maintenance"
  />
  <meta property="og:title" content="All Services | Surya Enterprises" />
  <meta
    property="og:description"
    content="Full list of cleaning, polishing, maintenance & repair services. Trusted by homes, offices, hotels & commercial clients."
  />
  <meta property="og:type" content="website" />
</Helmet>

      <h2 className="services-title">Our Professional Services</h2>
      <p className="services-sub">
        Premium cleaning, maintenance and polishing services designed to keep your home & workplace spotless.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <NavLink key={index} to={service.path} className="service-card">
            <div className="service-inner">
              <h3>{service.name}</h3>
              <span className="service-arrow">→</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
