import React from 'react';
import { Link } from 'react-router-dom';
import { UseCart } from '../../Context/CartContext';

const CardProduct = ({id,title,name,img,sale,price}) => {
    const { handleAddCart} = UseCart();
    return (
        <>
         <Link to={`/product/${id}`} className="card-product" >
                
                <div className="thumb">
                    <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <h6>{name}</h6>
                <p>${price}</p>
                <p>{sale}</p>
                <button className='add-to-cart-button' onClick={() => handleAddCart({id, img, title, price,sale}, 1)}>Add to cart</button>
            </Link>
            
        </>

    )
};
export default CardProduct;