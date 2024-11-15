import { Link } from 'react-router-dom';
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Direct Trade Coffee</h1>
                <p>Exceptional coffee depends upon great partnerships.</p>
                <div className="hero-buttons">
                    <Link to="/aboutus"><button className="hero-button">About our Direct Trade Program</button></Link>
                    <Link to="/shop"><button className="hero-button">Shop Direct Trade Coffee</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
