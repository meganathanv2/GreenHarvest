// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    postalCode: { type: String, required: true },
    townCity: { type: String, required: true },
    province: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    useAsBillingAddress: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
