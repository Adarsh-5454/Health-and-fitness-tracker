import express from "express";
import {
  getAllUsers,
  createUser,
  loginUser,
} from "../controllers/userController";

const router = express.Router();

// Get all users
router.get("/", getAllUsers);

// Add a new user
router.post("/signup", createUser);

router.post("/login", loginUser);

export default router;
