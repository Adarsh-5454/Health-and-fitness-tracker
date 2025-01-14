import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";
import { v2 as cloudinary } from "cloudinary";

export const postBlog = async (req: Request, res: Response): Promise<void> => {
  const { title, discription, image, author, category, createdAt } = req.body;

  // Input validation

  try {
    const createBlog: IBlog = new Blog({
      title,
      discription,
      image,
      category,
      author,
      createdAt,
    });

    const savedBlog = await createBlog.save();
    res.status(201).json({ message: "Blog created successfully", savedBlog });
  } catch (error) {
    console.error("Error posting blog:", error);
    res.status(500).json({ message: "Error posting blog" });
  }
};
cloudinary.config({
  cloud_name: "dcklufz4q",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
