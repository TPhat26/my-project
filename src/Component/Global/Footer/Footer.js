import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-logo-newsletter">
                    <div className="footer-logo">
                        <h2>We're Spilling the Beans...</h2>
                        
                    </div>
                   

                    <div className="footer-newsletter">
                        <p>NEWSLETTER SIGNUP</p>
                        <p>Get 15% off your next order by signing up for texts and emails!</p>
                        <Link to="/profile"><button className="signup-button">SIGN UP NOW</button></Link>
                    </div>
                </div>

                
                <div className="footer-links">
                    <FooterColumn title="Company" links={["Goodwill", "Careers", "Press", "Wholesale", "College Brand Ambassadors"]} />
                    <FooterColumn title="Help" links={["FAQs", "Return Policy", "Contact", "Check Balance: Cafe Gift Card"]} />
                    <FooterColumn title="Shop" links={["Find in Store", "Coffee", "Draft Lattes & Cold Brew", "Equipment & Kits", "Subscriptions"]} />
                    <FooterColumn title="Top Search Terms" links={["Decaf Coffee", "Dark Roasts", "Medium Roasts", "Espresso"]} />
                    <FooterColumn title="Connect With Us" links={["Facebook", "Twitter", "Pinterest", "Instagram", "YouTube", "TikTok"]} isSocial />
                </div>
            </div>
          
           
            <div className="footer-bottom">
                <p>Website Terms & Conditions | Terms & Conditions of Purchase | Accessibility Statement | Privacy Policy</p>
                <p>Copyright 2024, La Colombe Coffee Roasters. All Rights Reserved.</p>
                <p>Roasted with love in Philly</p>
            </div>
        </footer>
    );
};


const FooterColumn = ({ title, links, isSocial = false }) => (
    <div className="footer-column">
        <h3>{title}</h3>
        <ul className={isSocial ? 'social-links' : ''}>
            {links.map((link, index) => (
                <li key={index}>{link}</li>
            ))}
        </ul>
    </div>
);

export default Footer;
