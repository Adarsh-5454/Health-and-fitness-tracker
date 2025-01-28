import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";

export const deleteBlog = async (
   req: Request,
   res: Response
): Promise<void> => {
   const blogId = req.params.id;
   try {
      const deletedBlog = await Blog.findByIdAndDelete(blogId);
      res.status(200).json({
         message: "Blog deleted successfully",
         deletedBlog,
      });
   } catch (error) {
      res.status(500).json({ message: "Error deleting blog" });
   }
};
