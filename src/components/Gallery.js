import React from "react";
import img1 from './Assets/img1.jpeg';
import img10 from './Assets/img10.jpg';
import img11 from './Assets/img11.jpg';
import img12 from './Assets/img12.avif';
import img14 from './Assets/img14.avif';
import img21 from "./Assets/img21.jpeg";
import img22 from "./Assets/img22.jpeg";
import img23 from "./Assets/img23.jpeg";
import img24 from "./Assets/img24.jpeg";
import img25 from "./Assets/img25.jpeg";
import img26 from "./Assets/img26.jpeg";
import img27 from "./Assets/img27.jpeg";
import img28 from "./Assets/img28.jpeg";
import img29 from "./Assets/img29.jpeg";
import img3 from './Assets/img3.jpeg';
import img30 from "./Assets/img30.jpeg";
import img31 from "./Assets/img31.jpeg";
import img32 from "./Assets/img32.jpeg";
import img34 from "./Assets/img34.jpeg";
import img35 from "./Assets/img35.jpeg";
import img37 from "./Assets/img37.jpeg";
import img38 from "./Assets/img38.jpeg";
import img39 from "./Assets/img39.jpeg";
import img41 from "./Assets/img41.jpeg";


import "./Gallery.css";



const Gallery = () => {
  const images = [
    { id: 1, src:`${img1}`, alt: "" },
    { id: 2, src:`${img14}`, alt: "" },
    { id: 3, src:`${img3}`, alt: "" },
    { id: 4, src:`${img10}` , alt: "" },
    { id: 5, src:`${img11}` , alt: "" },
    { id: 6, src:`${img12}`, alt: "" },
    { id: 7, src:`${img41}`, alt: "" },
    { id: 8, src:`${img39}`, alt: "" },
    { id: 9, src:`${img38}`, alt: "" },
    { id: 10, src:`${img37}`, alt: "" },
    { id: 11, src:`${img35}`, alt: "" },
    { id: 12, src:`${img34}`, alt: "" },
    { id: 13, src:`${img21}` , alt: "" },
    { id: 14, src:`${img22}` , alt: "" },
    { id: 15, src:`${img23}` , alt: "" },
    { id: 16, src:`${img24}` , alt: "" },
    { id: 17, src:`${img25}` , alt: "" },
    { id: 18, src:`${img26}` , alt: "" },
    { id: 19, src:`${img27}` , alt: "" },
    { id: 20, src:`${img28}` , alt: "" },
    { id: 21, src:`${img29}` , alt: "" },
    { id: 22, src:`${img30}` , alt: "" },
    { id: 23, src:`${img31}` , alt: "" },
    { id: 24, src:`${img32}` , alt: "" },
    



  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Work Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-card" key={image.id}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="overlay">
              <p className="overlay-text">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
