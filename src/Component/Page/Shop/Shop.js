import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './Shop.css';
import CardProduct from '../../PROPS/ListProduct/CardProduct';

const Shop = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [error, setError] = useState();
    const [products, setProduct] = useState([]);
    const { slug: keysearch } = useParams();
    console.log(keysearch);
    const url='https://672226612108960b9cc31a9d.mockapi.io/CoffeeShop';
    const [filteredProducts, setFilteredProducts] = useState([]);
    const getProduct = async () => {
        try {
            const res = await fetch(url);
            
            const data = await res.json();
            setProduct(data);
        } catch (err) {
            setError(err.message);
            setProduct("Not found"); 
        }
    };

    useEffect(() => {
        getProduct();
    }, [url]);
   console.log(products);
   
    useEffect(() => {
        if (category === 'bestseller') {
            setFilteredProducts(products.filter(item => item.category === 'BestSeller'));
        } else if (category === 'new') {
            setFilteredProducts(products.filter(item => item.category === 'New'));
        }
        else if (keysearch) {
            setFilteredProducts(products.filter(item => item.title === keysearch));
        }
         else {
            setFilteredProducts(products); 
        }
    }, [category, products]); 
console.log(filteredProducts);

  
    return (
        <div className="shop-container">
            <h1>Shop</h1>
            <div className="tabs">
                <button
                    className={category === undefined ? 'active' : ''}
                    onClick={() => navigate('/shop')}
                >
                    All Product
                </button>
                <button
                    className={category === 'bestseller' ? 'active' : ''}
                    onClick={() => navigate('/shop/bestseller')}
                >
                    Best Seller
                </button>
                <button
                    className={category === 'new' ? 'active' : ''}
                    onClick={() => navigate('/shop/new')}
                >
                    New
                </button>
            </div>
            <div className="product-grid">
                {filteredProducts.map((item) => (
                    <CardProduct 
                        key={item.id} 
                        id={item.id}
                        title={item.name} 
                        name={item.title}
                        img={item.img} 
                        sale={item.sale} 
                        price={item.price}
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;
