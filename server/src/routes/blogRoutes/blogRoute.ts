import express from "express";
import { postBlog } from "../../controllers/blogController/blogController";

const router = express.Router();

// create new blog

router.post("/", postBlog);

export default router;
