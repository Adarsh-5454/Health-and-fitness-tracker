import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  searchProduct,
} from "../../controllers/shoppingController/productController";
import { uploader } from "../../controllers/shoppingController/shoppingMulter";

const router = express.Router();

// Get all users
router.get("/", getProducts);

router.get("/search", searchProduct);

// Get a single User
router.get("/:id", getProductById);

// Add a new user
router.post("/", uploader.single("image"), createProduct);

// update all users
router.patch("/:id", updateProduct);

// update all users
router.delete("/:id", deleteProduct);

export default router;
