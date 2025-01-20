import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  // getProductById,
} from "../../controllers/shoppingController/productController";

const router = express.Router();

// Get all users
router.get("/", getProducts);

// Get a single User
// router.post("/:id", getProductById);

// Add a new user
router.post("/", createProduct);

// update all users
router.patch("/:id", updateProduct);

// update all users
router.delete("/:id", deleteProduct);

export default router;
