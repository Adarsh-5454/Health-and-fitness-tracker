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
