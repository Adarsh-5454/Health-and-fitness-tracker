import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
  rating: number;
  category: string;
  specifications: {
    color: string;
    material: string;
    product_dimensions: string;
    pattern: string;
    sleeve: string;
    size: string;
  };
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: {
    original: { type: Number, required: true },
    discounted: { type: Number, required: true },
  },
  rating: { type: Number, required: true, min: 0, max: 5 },
  category: { type: String, required: true },
  specifications: {
    color: { type: String, required: true },
    material: { type: String },
    sleeve: { type: String },
    size: { type: String },
  },
});

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
