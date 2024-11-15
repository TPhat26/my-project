import React, { useState, useEffect } from 'react';
import './Cart.css';
import { UseCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
const Cart = () => {

    const { cart, handleQuantity, handleDele } = UseCart();
    console.log(cart);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={item.id}>
                            <td>
                                <div className="cart-product">
                                    <img src={item.img} alt={item.name} />
                                    <span>{item.name}</span>
                                </div>
                            </td>
                            <td>
                            <div className="quantity">
                                    <span type="minus" onClick={() => handleQuantity("minus", index)}>
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </span>
                                    <input type="text" name="quantity" value={item.quantity} disabled="disabled" />
                                    <span type="plus" onClick={() => handleQuantity("plus", index)}>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </td>
                            <div className="price1">
                                <span>{item.price * item.quantity}</span> $
                            </div>
                            <div className="pricecore" style={{ display: 'none' }}>
                                {cart.reduce((prev, current) =>{
                                return prev + current.quantity;
                            }, 0)}
                            </div>
                            <td>
                            <div className="delete">
                                <a href="">
                                    <i className="fa-solid fa-trash-can" onClick={() => handleDele(index)}></i>
                                </a>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-footer">
                <div className="order-notes">
                    <label>Order Notes</label>
                    <textarea placeholder="Add any special instructions here..." />
                </div>
                <div className="cart-summary">
                    <p>Subtotal: ${cart.reduce((prev, current) =>{
                                return prev + current.quantity * current.price;
                            }, 0)}</p>
                    <p>Shipping & taxes calculated at checkout</p>
                    <Link to="/order" className="s_button">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> ORDER NOW
        </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
