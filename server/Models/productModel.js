const mongoose=require('mongoose');

const productModel=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:[{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }],

})

const Product=mongoose.model('product',productModel);
module.exports=Product;