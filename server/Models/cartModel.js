const mongoose = require('mongoose');

const cartSchema =new mongoose.Schema({
    id:{
        type:String
    },
    userId: {
        type: String,
        required: true
    },
    products: [{
        productId: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
})

module.exports = mongoose.model('Cart', cartSchema);

