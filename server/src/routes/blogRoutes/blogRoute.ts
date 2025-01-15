import express from "express";
import {
  deleteBlog,
  postBlog,
} from "../../controllers/blogController/blogController";

const router = express.Router();

// create new blog

router.post("/", postBlog);
router.delete("/:id", deleteBlog);

export default router;
