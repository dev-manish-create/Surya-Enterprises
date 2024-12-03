import React from "react";
import jaypee_vasant from "./Clients/japyee vasant 2.avif";
import lalit_Kolkata from "./Clients/lalit kolkata.jpg";
import lalit_goa from "./Clients/lalit-goa.jpg";
import lalit_mangar from "./Clients/lalit-mangar.jpg";
import lalit_srinagar from "./Clients/lalit-srinagar.jpg";
import bikaner_rajasthan from "./Clients/Narendra-Bhawan-Bikaner.webp";
import raddision_ludhiana from "./Clients/raddison-ludhiana.jpg";
import ramada_chandigarh from "./Clients/ramada-plaza.jpg";
import lalit_delhi from "./Clients/the lailt delhi 2.webp";
import ashoka_banglore from "./Clients/the-lalit-ashok-banglore.jpg";
import lalit_jaipur from "./Clients/the-lalit-jaipur.jpg";
import "./OurClients.css";

const OurClients = () => {
  const clients = [
    { id: 1, name: "Jaypee Vasant Continental Delhi", photo: jaypee_vasant },
    { id: 2, name: "The Lalit New Delhi", photo: lalit_delhi },
    { id: 3, name: "The Lalit Jaipur", photo: lalit_jaipur },
    { id: 4, name: "The Lalit Great Eastern Kailash Kolkata", photo: lalit_Kolkata },
    { id: 5, name: "The Lalit Goa", photo: lalit_goa },
    { id: 6, name: "The Lalit Hotel Mangar Haryana", photo: lalit_mangar },
    { id: 7, name: "Raddison Blu Hotel Ludhiana", photo: raddision_ludhiana },
    { id: 8, name: "Narendra Bhawan Bikaner Rajasthan", photo:bikaner_rajasthan },
    { id: 9, name: "The Ashoka Banglore", photo: ashoka_banglore},
    { id: 10, name: "The Lalit Grand Srinagar", photo: lalit_srinagar },
    { id: 11, name: "Ramada Plaza Chandigarh", photo: ramada_chandigarh },
    
  ];

  return (
    <div className="clients-container">
      <h1>Our Clients</h1>
      <h3>We extend our deepest gratitude to all of our clients who have trusted us with their marble floor polishing, housekeeping, and cleaning needs. Your continued support allows us to deliver top-class services, and we are honored to be a part of maintaining the beauty and cleanliness of your spaces. From our team to yours, thank you for choosing us. We look forward to serving you for many more years to come.</h3>
      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.photo} alt={client.name} />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
