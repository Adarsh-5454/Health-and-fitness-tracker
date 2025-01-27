import express from "express";
import {
  addToCart,
  getCart,
  //   removeFromCart,
} from "../../controllers/shoppingController/cartController";

const router = express.Router();

router.post("/", addToCart);
router.get("/item", getCart);

export default router;
