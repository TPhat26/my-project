import React from 'react';
import './CardContent.css'; 

const CardContent = () => {
    return (
        <div className="card-content">
            <h3 className="list-title">PURSUING EXCELLENT COFFEE FOR ALL</h3>
            <p>Coffee that goes from the roaster to the brewed cup in the shortest amount of time is the freshest, best tasting coffee—period.</p>

            <div className="card-container">
                <div className="card-content">
                    <img src="https://www.lacolombe.com/cdn/shop/files/Subscriptions_Shoot_2023_63.jpg?v=1724855723&width=800" alt="Subscription Coffee 1" />
                    <h3>SUBSCRIBE & SAVE</h3>
                    <p>Get our best deals on coffee and more when you create a new subscription. Extra discounts for prepaid subscriptions!</p>
                    <button class="explore-button"><span>EXPLORE SUBSCRIPTIONS</span></button>

                </div>

                <div className="card-content">
                    <img src="https://www.lacolombe.com/cdn/shop/files/HMPG_Bulk_Bag_2_1_1.jpg?v=1641223367&width=800" alt="Subscription Coffee 2" />
                    <h3>SUBSCRIBE & SAVE</h3>
                    <p>Get our best deals on coffee and more when you create a new subscription. Extra discounts for prepaid subscriptions!</p>
                    <button class="explore-button"><span>EXPLORE SUBSCRIPTIONS</span></button>

                </div>

                <div className="card-content">
                    <img src="https://www.lacolombe.com/cdn/shop/files/CaptureRIP-20243150_Hero_5628b1ba-2204-4658-bdfb-4da75b241458.jpg?v=1726155341&width=800" alt="Subscription Coffee 3" />
                    <h3>SUBSCRIBE & SAVE</h3>
                    <p>Get our best deals on coffee and more when you create a new subscription. Extra discounts for prepaid subscriptions!</p>
                    <button class="explore-button"><span>EXPLORE SUBSCRIPTIONS</span></button>

                </div>
            </div>
        </div>
    );
};

export default CardContent;
