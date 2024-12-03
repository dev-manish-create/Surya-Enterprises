import React from "react";
import teamphoto from "./Assets/Ajay team.png";
import "./WhyChooseUS.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="content">
          <div className="image-container">
            {/* Add an image relevant to your business */}
            <img 
              src={teamphoto} 
              alt="Why Choose Us" 
              className="why-image" 
            />
          </div>
          <div className="text-container">
            <h3 className="content-title">Experience Excellence</h3>
            <p className="content-description">
            At Surya Enterprises, the essence of success is trust, and we ensure that trust is rewarded in everything we do. Our clients know that we stand for quality, consistency and professionalism. Transparency and genuine communication help build long-term relationships and it is in our best interest, so we want you to share step by step. From the moment you book a service with us to the final inspection, your satisfaction is our primary concern. The expert team at Surya Enterprises not only learns the latest cleaning and maintenance techniques, they also share our passion for excellence. We use only the best equipment and eco-friendly products to deliver the best results, but we never compromise on safety and security. Whether it’s a one-time service or a long-term maintenance plan, you can trust Surya Enterprises to deliver results that exceed your expectations. When you choose us, you don’t just get a cleaning service; you get a partner who cares about your location as much as you do. We understand the uniqueness of each client, each location, and then we take the time to better understand your unique needs so we can tailor everything to best suit your needs. Our personal approach, combined with our complete commitment to excellence, has made us the cleaning choice for many satisfied customers. Make a difference at Surya Enterprises today and let us transform your space into a clean, thoughtful space.
            </p>
            <ul className="reasons-list">
              {/* Add reasons with icons for visual appeal */}
              <li><span>✔</span> Unmatched Expertise : With years of experience, we bring unparalleled knowledge and skill to every project.</li>
              <li><span>✔</span> Customized solutions : Every client is unique, and so are their needs. We tailor our services to deliver the perfect results for you.</li>
              <li><span>✔</span> Reliable and Punctual : We value your time and strive to provide efficient, timely, and hassle-free services.</li>
              <li><span>✔</span> Affordable Excellance : Premium quality doesn’t have to come with a hefty price tag. Our services are competitively priced to offer the best value.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
