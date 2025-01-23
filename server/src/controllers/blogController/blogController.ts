import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";
import multer from "multer";
import fs from "fs";

// multer configuration

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/blogs");
  },
  filename: (req, file, cb) => {
    const name = `${Date.now()}-${file.originalname}`;
    cb(null, name);
  },
});
export const uploader = multer({ storage });

// blog updation

export const updateBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blogId = req.params.id;

  try {
    const existingBlog = await Blog.findById(blogId);

    if (!existingBlog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    if (req.file) {
      if (existingBlog.image) {
        fs.unlink(existingBlog.image, (err) => {
          if (err) {
            console.error("Error deleting old image:", err);
          }
        });
      }

      existingBlog.image = req.file.path;
    }

    const { title, description, category, author } = req.body;

    if (title) existingBlog.title = title;
    if (description) existingBlog.description = description;
    if (category) existingBlog.category = category;
    if (author) existingBlog.author = author;

    const updatedBlog = await existingBlog.save();

    res.status(200).json({
      message: "Blog updated successfully",
      updatedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog" });
  }
};
