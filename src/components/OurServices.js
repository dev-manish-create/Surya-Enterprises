import React from "react";
import service2 from "./Assets/service 2.jpeg";
import service3 from "./Assets/service 3.jpeg";
import service14 from "./Assets/service14.jpeg";
import service15 from "./Assets/service15.jpeg";
import service16 from "./Assets/service16.jpeg";
import service18 from "./Assets/service18.jpeg";
import service19 from "./Assets/service19.jpeg";
import service20 from "./Assets/service20.jpeg";
import service21 from "./Assets/service21.jpeg";
import service22 from "./Assets/service22.jpeg";
import service4 from "./Assets/service4.jpeg";
import "./OurServices.css";
const services = [
  {
    title: "Marble floor|kota stone|Italian floor| Granite floor Grinding Polishing and maintenance",
    description: "Restore the timeless elegance of your floors with our expert grinding and polishing services. Whether it’s marble, italian, granite or Kota stone, we use advanced techniques to remove stains, scratches, and dullness, leaving your floors with a flawless mirror-like finish.",
    image: service4, 
  },
  {
    title: "Housekeeping Services",
    description: "Keeping your space immaculate and organized has never been easier. Our trained professionals provide thorough and efficient housekeeping solutions for residential and commercial properties, ensuring a clean, hygienic, and stress-free environment.",
    image: service19,
  },
  {
    title: "Carpet Cleaning",
    description: "Deep cleaning solutions for carpets, removing dirt, stains, and allergens effectively.",
    image: service18, 
  },
  {
    title: "Sofa/chair Shampooing",
    description: "Revitalize your upholstery with our deep cleaning services. From sofas and chairs to carpets, we eliminate dirt, stains, and allergens, ensuring a fresh and healthy environment for you.",
    image: service20, 
  },
  {
    title: "Wooden Floor Polishing",
    description: "Bring back the luster of your wooden floors with our expert maintenance and polishing services. We ensure your wood surfaces stay protected, vibrant, and scratch-free for years to come.",
    image: service2, 
  },
  {
    title: "Tiles cleaning ",
    description: "We offer tiles floor  services to make your tiles floor look shiny and outstanding.",
    image: service3, 
  },
  {
    title: "Glass and Facade cleaning ",
    description: "Maintain the pristine look of your building’s exterior with our glass and facade cleaning services. We use state-of-the-art equipment and techniques to clean high-rise windows and facades, enhancing curb appeal and creating lasting impressions.",
    image: service14, 
  },
  {
    title: "Deep cleaning ",
    description: "A thorough cleaning solution for every nook and cranny. Our deep cleaning services include everything from floors and desks to fans, chairs, computers, and more, ensuring a completely sanitized and spotless space.",
    image: service15, 
  },
  {
    title: "Office maintenance ",
    description: "Boost workplace productivity with our reliable office maintenance services. From desks and chairs to flooring and lighting, we ensure a professional, clean, and welcoming atmosphere for your team and clients.",
    image: service16, 
  },
  {
    title: "High Pressure cleaning ",
    description: "From patios to driveways, our high-pressure cleaning service removes dirt, grime, and moss, revitalizing your outdoor areas and restoring their original beauty.",
    image: service22, 
  },
  {
    title: "Swimming pool cleaning and maintenance ",
    description: "we specialize in providing top-notch swimming pool cleaning and maintenance services to ensure your pool stays in pristine condition year-round. Whether you own a residential pool or a commercial one, our team is equipped to handle all your pool care needs with precision and expertise.",
    image: service21, 
  },

];

const OurServices = () => {
  return (
    <div className="our-services">
      <p>At Surya Enterprises, we’re here to handle all your cleaning and maintenance needs—big or small. We offer a variety of services to make sure every part of your space gets the attention it deserves. Our housekeeping services take the hassle out of daily cleaning, leaving your home or office looking spotless and feeling fresh.

If your floors have lost their shine, don’t worry—we’ve got you covered. Our marble, granite, and Kota floor polishing services will bring them back to life by removing stains, scratches, and marks. Your floors will look as good as new!

Outdoor spaces can get really dirty from weather and daily use, but our high-pressure cleaning service works wonders. Whether it’s your patio, driveway, or other outdoor surfaces, we’ll have them looking clean and refreshed in no time. Inside, our deep cleaning services go the extra mile, making sure every fan, desk, chair, and corner is dust-free and allergy-proof.

For businesses, we know that first impressions count. That’s why our glass and facade cleaning service will make your building’s exterior shine, leaving a clean and polished look that will wow your clients and visitors.

And when it comes to your furniture, we’ve got you covered too! Our sofa, chair, and carpet cleaning services are just what you need to get rid of stains, dirt, and allergens, giving your furniture a fresh, clean look. If you have wooden floors, we’ll help keep them looking great and lasting longer with our maintenance and polishing services.

At Surya Enterprises, we love what we do. Our aim is to make your space feel clean, cozy, and somewhere you can truly be proud of.</p>
      <h2 className="services-header">Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
