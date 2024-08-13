const Cart = require('../Models/cartModel');
const Product = require('../Models/productModel');

const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId)
    const { productId, quantity } = req.body;
    
    let userCart = await Cart.findOne({ userId });

    if (userCart) {
      const productInCart = userCart.products.find(p => p.productId === productId);

      if (productInCart) {
        productInCart.quantity = (parseInt(productInCart.quantity) + parseInt(quantity)).toString();
      } else {
        userCart.products.push({ productId, quantity });
      }

      await userCart.save();
      res.status(200).send(userCart);
    } else {
      const newCart = new Cart({ userId, products: [{ productId, quantity }] });
      await newCart.save();
      res.status(200).send(newCart);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const userCart = await Cart.findOne({ userId });

    if (userCart) {
      let totalPrice = 0;
      const productDetails = [];

      for (const item of userCart.products) {
        const product = await Product.findOne({ id: item.productId });
        console.log(product)
        if (product) {
          const totalAmount = product.price * item.quantity;
          totalPrice += totalAmount;

          productDetails.push({
            id:product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            quantity: item.quantity,
            amount: totalAmount,
          });
        }
      }

      res.status(200).json({ Subtotal: totalPrice, products: productDetails });
    } else {
      res.status(404).json({ msg: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
 
    const {productId} = req.body;
    const userId = req.user.id;
    const userCart = await Cart.findOne({ userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    console.log(userCart.products)
  
    const arr=userCart.products.filter((item)=>{
      if(item.productId!=productId){
          return item.productId
      }
  })
  console.log(arr)
  userCart.products=arr
  await userCart.save()
  res.send(userCart)
};

module.exports = { addToCart, getItem, deleteProduct };
