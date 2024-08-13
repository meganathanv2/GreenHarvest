const express = require('express');
const router = express.Router();
const ProductController = require('../Controller/ProductController');
const auth=require('../middleware/auth');

router.get('/getproduct',ProductController.getProduct);
router.post('/addproduct',ProductController.addProduct);
router.put('/updateproduct/:id',ProductController.updateProduct);
router.delete('/deleteproduct/:id',ProductController.deleteProduct);

module.exports = router;