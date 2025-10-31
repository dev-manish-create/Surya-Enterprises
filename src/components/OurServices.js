import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OurServices.css";

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/services/get-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading services...</p>;

  return (
    <div className="our-services">
      <p className="intro-text">
        At<strong> Surya Enterprises</strong>, we’re here to handle all your cleaning and maintenance needs—big or small. 
        We offer a variety of services to ensure every part of your space gets the attention it deserves.
      </p>

      <h2 className="services-header">Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div className="service-item" key={service._id}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h1 className="service-title">{service.title}</h1>
              <p className="service-description">{service.description}</p>
              {/* <button
                className="book-service-btn"
                onClick={() => navigate("/contactus")}
              >
                Book Now!
              </button> */}
              <Link to="/contactus" className="book-service-btn" style={{textDecoration : "none"}}>
                Book Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
