import express from "express";
import {
  addToCart,
  getCart,
  updateCart,
  //   removeFromCart,
} from "../../controllers/shoppingController/cartController";

const router = express.Router();

router.post("/", addToCart);
router.get("/item", getCart);
router.patch("/item/:id", updateCart);

export default router;
