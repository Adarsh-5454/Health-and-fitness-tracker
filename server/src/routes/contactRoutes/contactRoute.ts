import express from "express";
import { sendMessage } from "../../controllers/contactController/sendMessage";

const router = express.Router();

router.post("/message", sendMessage);

export default router;
