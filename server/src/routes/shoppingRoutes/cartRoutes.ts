import express from "express";
import {
  addToCart,
  getCart,
  updateCart,
  deleteCart,
  deleteCartItem,
  updateCartQuantity, // ✅ Added this new function
} from "../../controllers/shoppingController/cartController";

const router = express.Router();

router.post("/", addToCart);
router.get("/item", getCart);
router.patch("/item/:id", updateCart);
router.patch("/item/update/:productId", updateCartQuantity); // ✅ Route for updating quantity
router.delete("/item/:id", deleteCart);
router.delete("/item/delete/:cartItemId", deleteCartItem);

export default router;
