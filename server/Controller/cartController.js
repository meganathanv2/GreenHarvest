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
  try {
    const productId = req.body;
    const userId = req.user.id;
    const userCart = await Cart.findOne({ userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const productIndex = userCart.products.findIndex(p => p.productId.toString() === productId);

    if (productIndex !== -1) {
      if (userCart.products.length <= 1) {
        await Cart.deleteOne({ userId });
        return res.status(200).json({ msg: "Cart deleted successfully" });
      } else {
        userCart.products.splice(productIndex, 1);
        await userCart.save();
        return res.status(200).json({ msg: "Product deleted successfully" });
      }
    }

    res.status(404).json({ msg: "Product not found in the cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { addToCart, getItem, deleteProduct };
