
import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.css';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        postalCode: '',
        townCity: '',
        province: '',
        phoneNumber: '',
        useAsBillingAddress: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/order/orders', formData);
            alert('Order placed successfully!');
            console.log(response.data);
        } catch (error) {
            alert('Error placing order');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                <label>Street Address</label>
                <input type="text" name="streetAddress" required value={formData.streetAddress} onChange={handleChange} />
            </div>
            <div>
                <label>Postal Code</label>
                <input type="text" name="postalCode" required value={formData.postalCode} onChange={handleChange} />
            </div>
            <div>
                <label>Town/City</label>
                <input type="text" name="townCity" required value={formData.townCity} onChange={handleChange} />
            </div>
            <div>
                <label>Province</label>
                <select name="province" required value={formData.province} onChange={handleChange}>
                    <option value="" disabled>Select</option>
                    <option value="province1">Province 1</option>
                    <option value="province2">Province 2</option>
                </select>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div>
                <label>
                    <input type="checkbox" name="useAsBillingAddress" checked={formData.useAsBillingAddress} onChange={handleChange} />
                    Use as billing address
                </label>
            </div>
            <button type="submit">Next</button>
        </form>
    );
};

export default OrderForm;
