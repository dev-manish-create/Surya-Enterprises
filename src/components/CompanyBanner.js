import React from "react";
import "./CompanyBanner.css";


const CompanyBanner = (props) => {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img
          src={props.banner} // Replace with your banner image URL
          alt="Company Banner"
        />
      </div>
      <div className="banner-content">
        <h1>WELCOME TO<br/> SURYA ENTERPRISES</h1>
        <p>
          <strong>
          SURYA ENTERPRISES provides premium cleaning and maintenance services as per your requirement. Our services includes expert housekeeping, marble , granite, Kota floor grinding and polishing, high pressure cleaning for outdoor areas. We also provide deep cleaning, glass and facade cleaning, sofa, chair, carpet and wooden floor cleaning. Using eco friendly products and high technology we provide quality work to get the shine, hygiene and beauty back in your places. You can trust Surya Enterprises for best floor polishing, office maintenance and upholstery cleaning services so your surroundings will always be looking great.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default CompanyBanner;
