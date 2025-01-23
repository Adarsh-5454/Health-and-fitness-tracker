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
