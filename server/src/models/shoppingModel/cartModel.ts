import mongoose, { Schema, Document, Mongoose } from "mongoose";

interface ICartItem {
  product_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
  Price: number;
}

export interface ICart extends Document {
  items: ICartItem[];
  totalPrice: number;
}

const cartItemSchema: Schema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  Price: { type: Number },
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
    totalPrice: { type: Number },
  },
  { timestamps: true }
);

cartSchema.pre<ICart>("save", function (next) {
  this.totalPrice = this.items.reduce((total, item) => {
    return total + item.Price * item.quantity;
  }, 0);
  next();
});

export default mongoose.model<ICart>("Cart", cartSchema);
