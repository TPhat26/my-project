import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slideshow.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from '../../../PROPS/ListProduct/CardProduct';



const Slideshow = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://672226612108960b9cc31a9d.mockapi.io/CoffeeShop');
            const data = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);

   
    const settings = {
        dots: false, 
        infinite: false, 
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className="slideshow-container">
            <h3>TRY SOMETHING NEW</h3>
            <Slider {...settings}>
            {products.map((product) => (
                        <CardProduct id={product.id}
                        img={product.img} 
                        name={product.name}
                        title={product.title} 
                        price={product.price} 
                        
                        ></CardProduct>
                    ))}
                
                    
                        
                    
            </Slider>
        </div>
    );
};

export default Slideshow;
