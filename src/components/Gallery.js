import { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 images initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/gallery/list"); // your API endpoint
        const data = await res.json();
        setImages(data.data || []);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      prev === images.length ? 8 : images.length
    );
  };

  if (loading) {
    return <div className="gallery-loading">Loading gallery...</div>;
  }

  if (!images.length) {
    return <div className="gallery-empty">No images available</div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Work Gallery</h1>

      <div className="gallery-grid">
        {images.slice(0, visibleCount).map((img, index) => (
          <div className="gallery-card" key={img._id || index}>
            <img src={img.url} alt={img.title || "Gallery Image"} className="gallery-image" />
            <div className="overlay">
              <p className="overlay-text">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      {images.length > 8 && (
        <button className="show-more-btn" onClick={handleShowMore}>
          {visibleCount === images.length ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Gallery;
