const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
    userid : {
        type:String,
        required:true
    },
    name : {
        type:String,
        required:true
    },
    email :{
        type :String,
        required : true
    },
    address : {
        type:String,
        required:true
    },
    phoneno : {
        type : String,
        required:true
    },
    products :{
        type: Array,
        required : true
    },
    totalamount :{
        type:Number,
        required:true
    },
    orderdate :{
        type : Date,
        default:Date.now
    },
    estimatedate : {
        type: Date,
        default: function() {
            return new Date(Date.now()+10*24*60*60*1000); 
        }
    }
})

const Order = mongoose.model('order',orderModel);
module.exports = Order;