const jwt=require('jsonwebtoken');

const auth=(req,res,next)=>{
    const authHeader=req.header('Authorization');
    const token=authHeader.split(' ')[1];
    console.log(token);
    if(!token){
        return res.status(401).json({msg:'Token is required'}); 
    }
    try{
        const decoded=jwt.verify(token,"secret key");
        req.user=decoded;
        next();
        console.log(decoded); 
    }
    catch(err){
        console.log(err);
        return res.status(401).json({msg:'Token is not valid'});
    }
}

module.exports=auth;