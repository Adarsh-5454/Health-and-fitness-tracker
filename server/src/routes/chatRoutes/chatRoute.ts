import express from "express";
import {
  postMessage,
  fetchMessages,
} from "../../controllers/chatController/chatController";

const router = express.Router();

// Route to send a message
router.post("/", postMessage);

// Route to get all messages between two users
router.get("/:userId1/:userId2", fetchMessages);

export default router;
