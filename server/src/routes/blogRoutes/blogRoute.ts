import express from "express";
import {
   searchBlog,
   updateBlog,
   uploader,
} from "../../controllers/blogController/blogController";
import { postBlog } from "../../controllers/blogController/postBlog";
import { getSingleBlog } from "../../controllers/blogController/getSingleBlog";
import { deleteBlog } from "../../controllers/blogController/deleteBlog";

const router = express.Router();

// create new blog

router.get("/search", searchBlog);
router.get("/single/:id", getSingleBlog);
router.post("/", uploader.single("image"), postBlog);
router.delete("/:id", deleteBlog);
router.patch("/:id", uploader.single("image"), updateBlog);

export default router;
