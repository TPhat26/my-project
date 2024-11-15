import React from 'react';
import "./CardFavorites.css";

const CardFavorites = () => {
    return (
        <div className="card-favorites-container">
            <h3>EXPLORE FAN FAVORITES</h3>
            <div className="card-favorites-columns">
                <div className="card-favorites">
                    <img src="https://www.lacolombe.com/cdn/shop/files/CorsicaNizza.gif?v=1712345418&width=1000" alt="Premium Roasted Coffee" />
                    <div className="card-title-favorites">
                        <h3>PREMIUM ROASTED COFFEE</h3>
                        <p>Fresh roasted coffee that has been carefully crafted by our coffee experts to deliver the taste you love, no matter how you drink it.</p>
                        <button>SHOP ROASTER BEST SELLERS</button>
                    </div>
                </div>

                <div className="card-favorites">
                    <img src="https://www.lacolombe.com/cdn/shop/files/RTD_9ozDouble_DTC3.jpg?v=1711739370&width=1000" alt="Cafe-Quality Lattes" />
                    <div className="card-title-favorites">
                        <h3>CAFE-QUALITY LATTES</h3>
                        <p>Our signature crafted cold, frothy latte with the undeniable taste and texture of a truly cold cafe latte.</p>
                        <button>SHOP DRAFT NEW ARRIAL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFavorites;
