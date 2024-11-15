// src/MediaIntro.js
import React from 'react';
import './MediaIntro.css';

const MediaIntro = () => {
    const mediaItems = [
        {
            id: 1,
            title: "Coffee Aesthetics",
            description: "A beautiful arrangement of coffee cups and beans.",
            img: "https://media-library.stackla.com/10/lacolombe/2024-02/65bba0b045be4a52e44058ee/4e228b90-c108-11ee-9be2-3319403825a5.jpg?format=webp",
            link: "https://www.instagram.com/p/DBRDwtfvLEt/?img_index=1" 
        },
        {
            id: 2,
            title: "Coffee Brewing",
            description: "The art of brewing coffee.",
            img: "https://media-library.stackla.com/10/lacolombe/2023-08/64d4e15d7dcce7772bb8b0bf_10b7f690-377f-11ee-949a-2bb0935d206d.jpeg?format=webp",
            link: "https://www.instagram.com/p/DBCx4eSzrmL/?img_index=1"
        },
        {
            id: 3,
            title: "Coffee and Friends",
            description: "Enjoying coffee with friends.",
            img: "https://media-library.stackla.com/10/lacolombe/2024-04/661a859ab066ea501e3a37c8/ff9b2680-f997-11ee-b2d1-c71809df1573.jpg?format=webp",
            link: "https://www.instagram.com/p/C-hj-oiPXfA/?img_index=1"
        },
    ];

    return (
        <div className="media-intro">
            <h2>FOLLOW US ON SOCIAL</h2>
            <div className="media-grid">
                {mediaItems.map((media) => (
                    <a key={media.id} href={media.link} >
                        <div className="media-item">
                            <img src={media.img} alt={media.title} />
                            <div className="overlay">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MediaIntro;
