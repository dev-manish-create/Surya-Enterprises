// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import navlogo from "./Nav-logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

 
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

  
//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
        
//         <div className="logo-container">
//           <img src={navlogo} alt="Company Logo" className="logo" />
//           <span className="company-name">Surya Enterprises</span>
//         </div>

//         <div className="menu-toggle" onClick={toggleMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>

       
//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? "active-link" : undefined)}
//               onClick={handleLinkClick}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Contactus"
//               className={({ isActive }) => (isActive ? "active-link" : undefined)}
//               onClick={handleLinkClick}
//             >
//               Contact Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Ourservices"
//               className={({ isActive }) => (isActive ? "active-link" : undefined)}
//               onClick={handleLinkClick}
//             >
//               Our Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/OurClients"
//               className={({ isActive }) => (isActive ? "active-link" : undefined)}
//               onClick={handleLinkClick}
//             >
//               Our Clients
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Gallery"
//               className={({ isActive }) => (isActive ? "active-link" : undefined)}
//               onClick={handleLinkClick}
//             >
//               Gallery
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/Blogs"
//               className={({ isActive }) => (isActive ? "active-link" : undefined)}
//               onClick={handleLinkClick}
//             >
//               Blogs
//             </NavLink>
//           </li>

//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// New Navbar with services dropdown menu 
import { useState } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "./Nav-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo-container">
          <img src={navlogo} alt="Company Logo" className="logo" />
          <span className="company-name">Surya Enterprises</span>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* HOME */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="dropdown">
  <button
    className="dropdown-btn"
    onClick={() => setServicesDropdown(!servicesDropdown)}
  >
    Our Services ▾
  </button>

  {servicesDropdown && (
    <ul className="dropdown-menu">
      <li>
        <NavLink
          to="/Ourservices"
          onClick={handleLinkClick}
        >
          All Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services/marble-polishing"
          onClick={handleLinkClick}
        >
          Marble Polishing
        </NavLink>
      </li>

      

      <li>
        <NavLink
          to="/services/kota-stone-polishing"
          onClick={handleLinkClick}
        >
          Kota Stone Polishing
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/italian-marble-polishing"
          onClick={handleLinkClick}
        >
          Italian Marble Polishing 
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/granite-floor-polishing"
          onClick={handleLinkClick}
        >
          Granite Floor Polishing
        </NavLink>
      </li>

       <li>
        <NavLink
          to="/services/floor-grinding-maintenance-crystallization"
          onClick={handleLinkClick}
        >
        Floor Grinding/Crystallization
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/housekeeping"
          onClick={handleLinkClick}
        >
          Housekeeping Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/sofa-carpet-cleaning"
          onClick={handleLinkClick}
        >
          Sofa & Carpet Shampooing
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/pool-cleaning"
          onClick={handleLinkClick}
        >
          Swimming Pool Cleaning
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/deep-cleaning"
          onClick={handleLinkClick}
        >
          Deep Cleaning
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/High-pressure-cleaning"
          onClick={handleLinkClick}
        >
          High Pressure cleaning
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/office-maintenance"
          onClick={handleLinkClick}
        >
          Office Maintenance
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/tiles-cleaning"
          onClick={handleLinkClick}
        >
          Tiles cleaning
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/wooden-floor-cleaning"
          onClick={handleLinkClick}
        >
          Wooden Floor Polishing
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/glass-and-fascade-cleaning"
          onClick={handleLinkClick}
        >
          Glass and Fascade cleaning
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/carpenter"
          onClick={handleLinkClick}
        >
          Carpenter
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/electrician"
          onClick={handleLinkClick}
        >
          Electrician
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/plumber"
          onClick={handleLinkClick}
        >
          Plumber
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/pest-control"
          onClick={handleLinkClick}
        >
          Pest control 
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/full-home-move-in-cleaning"
          onClick={handleLinkClick}
        >
          Full Home/Move in cleaning
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/Bathroom-cleaning"
          onClick={handleLinkClick}
        >
          Bathroom cleaning
        </NavLink>
      </li>

    



    </ul>
  )}
</li>


          {/* OTHER LINKS */}
          <li>
            <NavLink
              to="/OurClients"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Our Clients
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Gallery"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Blogs"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contactus"
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
              onClick={handleLinkClick}
            >
              Contact Us
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

