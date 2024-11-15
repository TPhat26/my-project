import React from 'react';
import './ImageBanner.css';

const ImageBanner = () => {
    return (
        <div className="image-banner">
            <div className="content-box">
                <h1>Our Story</h1>
                <p>A lot has changed since '63, but our philosophy never has. We're passionate about delivering the best handcrafted products and take pride in the journey from seed to cup.</p>
                <a href="/shop" className="learn-more-link">Shop Now</a>
            </div>
        </div>
    );
};

export default ImageBanner;
