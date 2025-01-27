import mongoose, { Schema, Document } from "mongoose";

interface ICartItem {
  product_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  items: ICartItem[];
}

const cartItemSchema: Schema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference the model name as a string
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensure a minimum quantity
  },
});

const cartSchema: Schema = new Schema(
  {
    items: {
      type: [cartItemSchema],
      validate: {
        validator: (items: ICartItem[]) => items.length > 0,
        message: "Cart must have at least one item",
      },
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

export default mongoose.model<ICart>("Cart", cartSchema);
