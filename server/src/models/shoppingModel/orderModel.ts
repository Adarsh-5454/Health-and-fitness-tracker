import mongoose, { Schema, Document } from "mongoose";

interface IOrderItem {
  product_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
  price: number;
  cart_image: string;
}

export interface IOrder extends Document {
  items: IOrderItem[];
  totalPrice: number;
  user: mongoose.Schema.Types.ObjectId;
  paymentMethod: string;
  status: string;
  cardDetails?: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
}

const orderSchema: Schema = new Schema(
  {
    items: [
      {
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        cart_image: { type: String },
      },
    ],
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: { type: String, enum: ["COD", "Card"], default: "COD" },
    status: { type: String, enum: ["Pending", "Confirmed", "Shipped", "Delivered"], default: "Pending" },
    cardDetails: {
      cardNumber: { type: String },
      expiryDate: { type: String },
      cvv: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", orderSchema);
