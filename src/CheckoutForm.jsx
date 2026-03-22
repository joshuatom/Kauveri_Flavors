import React, { useState } from 'react';

const CheckoutForm = ({ onPlaceOrder, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPlaceOrder(formData);
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Checkout Details</h3>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your delivery address"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                />
            </div>
            <div className="checkout-actions">
                <button type="button" className="cancel-btn" onClick={onCancel}>Back to Cart</button>
                <button type="submit" className="place-order-btn">Place Order</button>
            </div>
        </form>
    );
};

export default CheckoutForm;
