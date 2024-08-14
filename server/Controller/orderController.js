// controllers/orderController.js
const Order = require('../Models/orderModel');

exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};
