import express from "express";
import { uploader } from "../../controllers/blogController/blogMulter";
import { postBlog } from "../../controllers/blogController/postBlog";
import { getSingleBlog } from "../../controllers/blogController/getSingleBlog";
import { deleteBlog } from "../../controllers/blogController/deleteBlog";
import { searchBlog } from "../../controllers/blogController/searchBlog";
import { updateBlog } from "../../controllers/blogController/updateBlog";
import { getAllBlogs } from "../../controllers/blogController/getAllBlogs";

const router = express.Router();

// create new blog

router.get("/", getAllBlogs);
router.get("/search", searchBlog);
router.get("/single/:id", getSingleBlog);
router.post("/", uploader.single("image"), postBlog);
router.delete("/:id", deleteBlog);
router.patch("/:id", uploader.single("image"), updateBlog);

export default router;
