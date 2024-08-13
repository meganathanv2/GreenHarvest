const express = require('express');
const router = express.Router();
const cartController = require('../Controller/cartController');
const auth=require('../middleware/auth')

router.get('/get',auth, cartController.getItem);
router.post('/add', auth,cartController.addToCart);
router.post('/delete',auth, cartController.deleteProduct);

module.exports = router;
