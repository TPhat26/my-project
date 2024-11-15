import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
       
    };

    return (
        <div className="slider-container">
            <div className="slider-overlay">
                <div className="slider-content">
                    <h3>LAST CHANCE</h3>
                    <p>FROM ORIGIN TO YOUR CUP AS FAST AS 10 DAYS</p>
                    <button className="shop-button">
                    <Link to="/shop">See What's New</Link>
                    </button>
                </div>
            </div>
            <Slider {...settings}>
                <div>
                    <video autoPlay muted className="slider-video">
                        <source src="https://videos.pexels.com/video-files/2675515/2675515-hd_1920_1080_30fps.mp4" type="video/mp4" />
                        
                    </video>
                </div>
                <div>
                    <video autoPlay muted className="slider-video">
                        <source src="https://videos.pexels.com/video-files/2849950/2849950-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                        
                    </video>
                </div>
                <div>
                    <video autoPlay muted className="slider-video">
                        <source src="https://videos.pexels.com/video-files/2849945/2849945-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                        
                    </video>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
