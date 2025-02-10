import express from "express";
import { createOrder, getOrders, updateOrderStatus } from "../../controllers/shoppingController/orderController";

const router = express.Router();

router.post("/order", createOrder); // Place order (COD or Card)
router.get("/order", getOrders); // Get all orders
router.patch("/:orderId", updateOrderStatus); // Update order status

export default router;