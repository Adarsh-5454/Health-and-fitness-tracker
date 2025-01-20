import express from "express";
import {
  deleteBlog,
  postBlog,
  searchBlog,
  updateBlog,
  uploader,
} from "../../controllers/blogController/blogController";

const router = express.Router();

// create new blog

router.get("/search", searchBlog);
router.post("/", uploader.single("image"), postBlog);
router.delete("/:id", deleteBlog);
router.patch("/:id", uploader.single("image"), updateBlog);

export default router;
