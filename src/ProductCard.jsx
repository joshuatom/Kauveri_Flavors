import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">₹{product.price}</span>
                    <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
