import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";

export const searchBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { searchTerm } = req.query;

  if (!searchTerm) {
    res.status(400).json({ message: "Search term is required" });
    return;
  }

  try {
    const result = await Blog.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },

        { category: { $regex: searchTerm, $options: "i" } },
        { author: { $regex: searchTerm, $options: "i" } },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
