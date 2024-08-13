const express = require('express');
const router = express.Router();
const cartController = require('../Controller/cartController');

router.get('/get', cartController.getItem);
router.post('/add', cartController.addToCart);
router.delete('/delete/:id', cartController.deleteProduct);

module.exports = router;
