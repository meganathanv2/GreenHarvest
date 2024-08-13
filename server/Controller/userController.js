const userModel = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const signUp = async (req, res) => {
    try {
       const {name,email,password}=req.body;
       const exits=await userModel.findOne({email})
       if(!exits){
              const user=await userModel.create({name,email,password:bcrypt.hashSync(password,10),role:'user'});
              await user.save();
              res.status(201).json({message:"User Created Successfully"});
              
       }
         else{
              res.status(400).json({message:"User Already Exists"});
         }
       
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Internal Server Error"});
    }
}

const login=async (req,res)=>{
    try{
       const {email,password,role}=req.body;
       const exists=await userModel.findOne({email});
       if(!exists){
        res.status(400).json({message:"user not found with this email"});
       }
       const isPasswordCorrect=bcrypt.compareSync(password,exists.password);
       if(isPasswordCorrect){
              const token=jwt.sign({id:exists._id,role:exists.role},'secret key',{expiresIn:'1h'});
                res.status(200).json({message:"Login Success",token});
       }
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Internal Server Error",err});
    }
}

module.exports = { signUp, login };
