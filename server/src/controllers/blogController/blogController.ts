import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";

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

export const deleteBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blogId = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    res.status(200).json({ message: "Blog deleted successfully", deletedBlog });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Error deleting blog" });
  }
};

export const updateBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blogId = req.params.id;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
  }
};
