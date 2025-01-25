import { Request, Response } from "express";
import Cart from "../../models/shoppingModel/cartModel";
import Product from "../../models/shoppingModel/productModel";

export const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, quantity } = req.body;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return; // Ensure the function exits here
    }

    // Find or create a cart
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [] });
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find(
      (items) => items.product_id.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity; // Update quantity
    } else {
      cart.items.push({ product_id: productId, quantity }); // Add new item
    }

    // Recalculate the total price
    // cart.totalPrice = cart.items.reduce((total, item) => {
    //   const productPrice =
    //     product.price.discounted || product.price.original || 0;
    //   return total + productPrice * item.quantity;
    // }, 0);

    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Failed to add item to cart", error });
  }
};

export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const cart = await Cart.findOne().populate("items.product_id");

    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart", error });
  }
};  