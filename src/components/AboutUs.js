import React from "react";
import "./AboutUs.css";
import companyLogo from "./Nav-logo.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-logo">
        <img
          src= {companyLogo}    // Replace with your company logo URL
          alt="Company Logo"
        />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <h2>SERVING FOR CUSTOMER SATISFACTION</h2>
        <p>
          <b>SURYA ENTERPRISES</b> was founded in the year 2012 by <b>MR. AJAY SINGH</b>, 
          who has vast experience in  Housekeeping & Marble Floor Maintenance, Granite Floor, Wooden Floor Polishing, Carpet Shampooing, Sofa Shampooing, Pest Control & Glass Cleaning Services, and Façade Cleaning. Serving top-notch corporates across India, our endeavor is to achieve the highest standards of quality through expertise, experience, and a willingness to adopt new techniques to overcome challenges daily.
        </p>
        <p>
          We develop creative solutions to satisfy our customers. Our business 
          provides world-class services using new technologies, latest machines, 
          and chemicals (Taski Machines & Chemicals). Our cleaning equipment and 
          consumables effectively reduce dust, noise emissions, chemical waste, 
          and energy usage. Our commitment to the preservation of the natural 
          environment led to the creation of ‘Surya Enterprises.’
        </p>
        <p>
          We also believe in investing in our employees by training them in the 
          latest techniques, ensuring that our customers receive the best services.
        </p>
        <p>
        At Surya Enterprises we don’t just clean spaces we create environments that inspire confidence, productivity and peace of mind. Our mission is to deliver the best cleaning and maintenance solutions for residential and commercial clients so your spaces look their best. From marble floors to crystal clear windows we bring expertise and passion to every job we do.

With years of experience and a team of dedicated professionals we have built a reputation as a trusted partner for all things cleaning and maintenance. What sets us apart is our commitment to quality and attention to detail. We don’t just meet expectations we exceed them. Whether it’s restoring the natural shine of your marble floors, deep cleaning your office space or high pressure cleaning your outdoor areas you can count on us to transform your space and make it look beautiful.

We do it like this: state of the art technology, eco friendly and customer focused. We customise every service to your needs so you get results. At Surya Enterprises your satisfaction is not a goal it’s a promise.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
