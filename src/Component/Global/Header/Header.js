import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import "./Header.css";
import { UseCart } from '../../Context/CartContext';

const Header = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const menuRef = useRef();
    
    const iconRef = useRef();
    const { cart } = UseCart();
    console.log(cart);
    

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/shop/${e.target.querySelector("input").value}`);
        e.target.querySelector("input").value = "";
    };
    
    

    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="header-left">
                    <nav className={`menu ${menu ? 'active' : ''}`} ref={menuRef}>
                        <ul className="nav-links">
                            <li><Link to="/" className="nav-link">HOME</Link></li>
                            <li className="dropdown-container">
                                <Link to="/shop" className="nav-link">SHOP</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/shop/AllProduct" className="dropdown-link">All Drink</Link></li>
                                    <li><Link to="/shop/bestseller" className="dropdown-link">Best Seller</Link></li>
                                    <li><Link to="/shop/new" className="dropdown-link">New</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/aboutus" className="nav-link">ABOUT US</Link></li>
                            <li><Link to="/wholesale" className="nav-link">WHOLESALE</Link></li>
                        </ul>
                        <form className="search-form" onSubmit={handleSearch}>
                            <input type="search" placeholder="Search" className="search-input" />
                        </form>
                    </nav>
                    <div className="header-icons">
                        <Link to="/cart" className='cart'>
                        <i className="fa-solid fa-cart-shopping">
                            {cart.reduce((prev, current) => prev + current.quantity, 0) > 0 && (
                            <span className='cart-count'>
                                {cart.reduce((prev, current) => prev + current.quantity, 0)}
                            </span>
                            )}
                        </i>
                        </Link>
                        <Link to="/profile" className="profile">
                            <i className="fa-solid fa-user"></i>
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={() => setMenu(!menu)}>
                        <i ref={iconRef} className={`fa-solid ${menu ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
