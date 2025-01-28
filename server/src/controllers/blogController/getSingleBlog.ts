import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";
import multer from "multer";
import fs from "fs";

export const getSingleBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const singleBlogId = req.params.id;
  try {
    const singleBlog = await Blog.findById(singleBlogId);

    res.status(200).json({
      message: "Blog found",
      singleBlog,
    });
  } catch (error) {
    res.status(404).json({ message: "Blog not found" });
  }
};
