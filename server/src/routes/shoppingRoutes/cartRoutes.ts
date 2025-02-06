import express from "express";
import {
  addToCart,
  getCart,
  updateCart,
  deleteCart,
  deleteCartItem,
  //   removeFromCart,
} from "../../controllers/shoppingController/cartController";

const router = express.Router();

router.post("/", addToCart);
router.get("/item", getCart);
router.patch("/item/:id", updateCart);
router.delete("/item/:id", deleteCart);
router.delete("/item/delete/:cartItemId", deleteCartItem);

export default router;
