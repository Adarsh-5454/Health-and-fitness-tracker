import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";

export const postBlog = async (req: Request, res: Response): Promise<void> => {
  const { title, description, author, category, createdAt } = req.body;

  if (!title || !description || !category || !author) {
    res.status(400).json({ message: "All fields are required." });
    return;
  }

  if (!req.file) {
    res.status(400).json({ message: "Please upload an image" });
    return;
  }
  // Input validation

  try {
    const createBlog: IBlog = new Blog({
      title,
      description,
      image: req.file.path, // save the image path
      category,
      author,
      createdAt,
    });

    const savedBlog = await createBlog.save();
    res.status(201).json({ message: "Blog created successfully", savedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error posting blog" });
  }
};
