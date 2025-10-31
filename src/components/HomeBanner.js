// HomePage.js
import React, { useEffect, useState } from 'react';
import slide1 from "./Assets/floor1.jpeg"; // Check file path and name
import slide3 from "./Assets/floor6.jpeg"; // Check file path and name
import slide2 from "./Assets/floor7.jpeg";
import "./HomeBanner.css"; // Import the CSS file

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slide1,
      title: "Best Marble Polishing services",
      description: "Your Trusted Partner for Excellence",
    },
    {
      image: slide2,
      title: "Quality Products & Services",
      description: "Experience Unparalleled Quality",
    },
    {
      image: slide3,
      title: "Customer Satisfaction Guaranteed",
      description: "We Value Your Trust",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="homepage-container">
      <div className="banner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            
            <div className="Intro">
                <h1>WELCOME TO SURYA ENTERPISES</h1>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a href='/contactus' className='contact-btn call'>CONTACT NOW!</a>
            </div>
          </div>
        ))}
       
      </div>
      <div className="contact-buttons">
        <a href="tel:+919220489443" className="contact-btn call">Call</a>
        <a href="mailto:suryaenterprises108@gmail.com" className="contact-btn mail">Mail</a>
        <a href="https://wa.me/919220489443" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">WhatsApp</a>
        <a href="https://www.instagram.com/suryaenterprises_108?igsh=M200OHQyMGpzYjBv" target="_blank" rel="noopener noreferrer" className="contact-btn instagram">Instagram</a>
      </div>
      
    </div>
  );
};

export default HomeBanner;
