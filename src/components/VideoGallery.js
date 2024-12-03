import React from "react";
import vid1 from "./Assets/service vid 1.mp4";
import vid2 from "./Assets/service vid 2.mp4";
import vid3 from "./Assets/service vid 3.mp4";
import vid4 from "./Assets/service vid 4.mp4";
import vid5 from "./Assets/service vid 5.mp4";
import vid6 from "./Assets/service vid 6.mp4";
import vid7 from "./Assets/service vid 7.mp4";
import vid8 from "./Assets/service vid 8.mp4";


import "./VideoGallery.css";


const VideoGallery = () => {
    const videos = [
        { id: 1, title: "Italian Floor Honning", src: vid4 },
        { id: 2, title: "Tile floor cleaning ", src: vid2 },
        { id: 3, title: "Wooden floor polishing", src: vid3 },
        { id: 4, title: "Upholstery cleaning", src: vid1},
        { id: 5, title: "Carpet cleaning", src: vid5 },
        { id: 6, title: "Measuring results with Glossmeter", src: vid6 },
        { id: 7, title: "Italian Floor Polishing", src: vid7 },
        { id: 8, title: "Marble Floor crytallization", src: vid8 },
        

    ];

    return (
        <div className="video-gallery-container">
            <h2>Our Service Videos</h2>
            <div className="video-scroll-container">
                {videos.map((video) => (
                    <div key={video.id} className="video-card">
                        <video 
                            src={video.src} 
                            controls 
                            className="video-element"
                        />
                        <p className="video-title">{video.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
