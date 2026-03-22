import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const CartModal = ({ cartItems, setCart, onClose, onPlaceOrder }) => {
    const [step, setStep] = useState('cart');

    const totalAmount = cartItems.reduce(
        (total, item) => total + Number(item.price || 0),
        0
    );

    const handleCheckoutClick = () => {
        setStep('checkout');
    };

    const handleBackToCart = () => {
        setStep('cart');
    };

    // ❌ Remove single item
    const removeItem = (indexToRemove) => {
        const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
        setCart(updatedCart); // ✅ Firebase auto-save will trigger
    };

    // 🧹 Clear cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal-content">

                {/* Header */}
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                {/* CART VIEW */}
                {step === 'cart' && (
                    cartItems.length === 0 ? (
                        <p className="empty-cart-msg">Your cart is empty.</p>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="cart-item">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="cart-item-image"
                                        />

                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p>₹{item.price}</p>
                                        </div>

                                        {/* ❌ Remove button */}
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeItem(index)}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="cart-footer">
                                <h3>Total: ₹{totalAmount}</h3>

                                <div className="cart-actions">
                                    <button className="clear-btn" onClick={clearCart}>
                                        Clear Cart
                                    </button>

                                    <button
                                        className="checkout-btn"
                                        onClick={handleCheckoutClick}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                )}

                {/* CHECKOUT VIEW */}
                {step === 'checkout' && (
                    <CheckoutForm
                        onPlaceOrder={onPlaceOrder}
                        onCancel={handleBackToCart}
                    />
                )}
            </div>
        </div>
    );
};

export default CartModal;