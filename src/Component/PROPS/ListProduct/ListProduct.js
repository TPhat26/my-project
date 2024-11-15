import React, { useEffect, useState } from 'react';

import './ListProduct.css';
import CardProduct from './CardProduct';



const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://672226612108960b9cc31a9d.mockapi.io/CoffeeShop');
            const data = await response.json();
            setProducts(data);
         };
        fetchData();
      }, []);
    
    return (
        <div className='list-product-container'>
            <h3 className="list-title">ROASTED FAVORITES</h3>
            <div className='list-product'>
                
                
                {products.map((product) => (
                    <CardProduct 
                    key={product.id}
                    id={product.id}
                    img={product.images}
                    title={product.title}
                    name={product.name}
                    price={product.price}
                    />
                ))}
            </div>
            
         </div>
        


        
    );
};

export default ListProduct;
