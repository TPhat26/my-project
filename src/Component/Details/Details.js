import React, { useState, useEffect } from 'react';
import { UseCart } from '../Context/CartContext';
import useFetch from '../../features/useFetch';
import { useParams } from 'react-router-dom';
import "./Details.css";

const Detail = () => {
    const { slug:id} = useParams();

    console.log(id);
    const [detail,setdetail] = useState({});
    const url = `https://672226612108960b9cc31a9d.mockapi.io/CoffeeShop/${id}`;
    const getProduct = async () => {
        try {
            const res = await fetch(url);
            
            const data = await res.json();
            console.log(data);
            
            setdetail(data);
        } catch (err) {
            
            setdetail("Not found"); 
        }
    };

    useEffect(() => {
        getProduct();
    }, [url]);
console.log(detail);

   
    
    const { handleAddCart } = UseCart();
    const [count, setCount] = useState(1);
    const [type, setType] = useState('Standard');

    if (!detail) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-detail">
            <div className="product-img">
            <img src={detail.img} alt="" />

            </div>
            <div className="product-info">
                <h1 className="product-name">{detail.name}</h1>
                <p className="price">{detail.price}$</p>
                <div className="reviews">
                    <span>★★★★★</span> <span>22 reviews</span>
                </div>

                <div className="type-selection">
                    <span>Type:</span>
                    <button
                        className={type === 'Standard' ? 'selected' : ''}
                        onClick={() => setType()}
                    >
                        Standard
                    </button>
                    <button
                        className={type === 'Decaf' ? 'selected' : ''}
                        onClick={() => setType()}
                    >
                        Decaf
                    </button>
                </div>

                <div className="quantity-control">
                    <span>Quantity:</span>
                    <div className="quantity-buttons">
                        <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
                        <span>{count}</span>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                </div>

                <button className="add-to-cart" onClick={() => handleAddCart(detail, count)}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default Detail;
