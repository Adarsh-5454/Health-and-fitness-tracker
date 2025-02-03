import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";

export const getAllBlogs = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
};
