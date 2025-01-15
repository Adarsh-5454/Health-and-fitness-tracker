import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
   title: string;
   description: string;
   image: string;
   category: string;
   author: string;
   createdAt: Date;
}

const blogSchema: Schema = new Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   image: { type: String, required: true },
   category: { type: String, required: true },
   author: { type: String, required: true },
   createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model<IBlog>("Blog", blogSchema);
export default Blog;
