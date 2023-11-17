const Product = require('../models/Product');
const Cart = require('../models/Cart');

module.exports = {
  addCart: async (req, res) => {
    const userId = req.user.id;
    const { cartItem, quantity } = req.body;
    try {
      const cart = await Cart.findOne({ userId });
      if (cart) {
        const existingProduct = cart.products.find(
          (product) => product.cartItem.toString() === cartItem
        );

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.products.push({ cartItem, quantity: 1 });
        }
        await cart.save();
        res.status(200).json("Productos agregados al carrito");
      } else {
        const newCart = new Cart({
          userId,
          products: [{ cartItem, quantity: 1 }],
        });

        await newCart.save();
        res.status(200).json("Productos agregados al carrito");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCart: async (req, res) => {
    const userId = req.user.id;
    try {
      const cart = await Cart.findOne({ userId });
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteItem: async (req, res) => {
    const cartItemId = req.params.cartItem; 

    try {
      const updateCart = await Cart.findOneAndUpdate(
        { userId: req.user.id, 'products._id': cartItemId },
        { $pull: { products: { _id: cartItemId } } },
        { new: true }
      );
      if (!updateCart) {
        return res.status(404).json({ message: "Item no encontrado" });
      }
      res.status(200).json(updateCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
