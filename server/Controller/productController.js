const productModel=require('../Models/productModel');
const { v4: uuidv4 } = require('uuid');
const addProduct=async (req,res)=>{
    try{
        const {name,price,image,category,description,rating}=req.body;
        console.log(name,price,image,category,description,rating);
        const product=await productModel.create({
            id:uuidv4(),
            name,
            price,
            image,
            category,
            description,
            rating});
        await product.save();
        res.status(201).json({message:"Product Created Successfully"});
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Internal Server Error"});
    }
}

const getProduct=async (req,res)=>{
    try{
        const product=await productModel.find();
        if(product){
            res.status(200).json({product});
        }

    }
    catch(err){
        console.log(err);
        res.status(400).json({message:"Internal Server Error"});
    }

}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, price, image, category, description, rating } = req.body;

        const updatedProduct = await productModel.findOneAndUpdate(
            { id }, 
            {
                name: name,
                price: price,
                image: image,
                category: category,
                description: description,
                rating: rating.map((rate) => ({
                    rate: rate.rate,
                    count: rate.count,
                })),
            },
            { new: true } 
        );

        if (updatedProduct) {
            res.status(200).json({ message: "Product Updated Successfully" });
        } else {
            res.status(404).json({ message: "Product Not Found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product=await productModel.find({id});
        if(product){
            await productModel.deleteOne({id});
            res.status(200).json({message:"Product Deleted Successfully"});
        }
        else{
            res.status(404).json({message:"Product Not Found"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports={addProduct,getProduct,updateProduct,deleteProduct};

