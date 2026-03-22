import React from 'react';

const Footer = ({ onOpenCart }) => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Kauveri Flavors. All rights reserved.</p>
                <div className="social-links">
                    <button className="cart-btn" onClick={onOpenCart}>Go to Cart</button>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
