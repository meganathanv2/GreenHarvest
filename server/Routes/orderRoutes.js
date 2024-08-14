// routes/orderRoutes.js
const express = require('express');
const { createOrder } =require('../Controller/orderController')
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/orders',auth, createOrder);

module.exports = router;
