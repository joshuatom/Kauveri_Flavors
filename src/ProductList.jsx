import React from 'react';
import ProductCard from './ProductCard';
import { products } from './products';

const ProductList = ({ searchQuery, addToCart }) => {
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="product-section container">
            <h2 className="section-title">Our Collection</h2>
            {filteredProducts.length > 0 ? (
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <p>No products found matching "{searchQuery}"</p>
                </div>
            )}
        </section>
    );
};

export default ProductList;
