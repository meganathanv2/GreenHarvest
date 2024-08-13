const mongoose=require('mongoose');

const userModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:8,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user',
        required:true
    }
})

const User=mongoose.model('user',userModel);
module.exports=User;