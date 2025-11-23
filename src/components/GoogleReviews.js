import { useEffect } from "react";
import "./GoogleReviews.css";

const GoogleReviews = () => {
  useEffect(() => {
    // Check if Elfsight script already exists
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="google-reviews-container">
      {/* Elfsight Widget */}
      <div
        className="elfsight-app-12a273cc-854b-46b1-98a3-045c81ea593f"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
