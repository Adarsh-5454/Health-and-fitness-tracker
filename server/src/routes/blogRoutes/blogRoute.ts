import express from "express";
import {
   deleteBlog,
   postBlog,
   updateBlog,
   uploader,
} from "../../controllers/blogController/blogController";

const router = express.Router();

// create new blog

router.post("/", uploader.single("image"), postBlog);
router.delete("/:id", deleteBlog);
router.put("/:id", updateBlog);

export default router;
