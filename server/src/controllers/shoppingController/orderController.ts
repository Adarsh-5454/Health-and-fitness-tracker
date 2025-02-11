import { Request, Response } from "express";
import Cart from "../../models/shoppingModel/cartModel";
import Order from "../../models/shoppingModel/orderModel";

// ✅ Simple card validation function
const isValidCard = (
  cardNumber: string,
  expiryDate: string,
  cvv: string
): boolean => {
  const cardRegex = /^[0-9]{16}$/; // 16-digit card number
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
  const cvvRegex = /^[0-9]{3,4}$/; // 3 or 4 digit CVV

  return (
    cardRegex.test(cardNumber) &&
    expiryRegex.test(expiryDate) &&
    cvvRegex.test(cvv)
  );
};

// ✅ Create Order (No User Required)
export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cartId, paymentMethod, cardNumber, expiryDate, cvv } = req.body;

    // Find cart by cartId
    const cart = await Cart.findById(cartId);
    if (!cart || cart.items.length === 0) {
      res.status(400).json({ message: "Cart is empty or not found" });
      return;
    }

    // Validate payment method
    let orderData: any = {
      items: cart.items.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        Price: item.Price, // ✅ Matching Cart Model
        cart_image: item.cart_image,
      })),
      totalPrice: cart.totalPrice,
      paymentMethod,
      status: "Pending",
    };

    if (paymentMethod === "Card") {
      if (
        !cardNumber ||
        !expiryDate ||
        !cvv ||
        !isValidCard(cardNumber, expiryDate, cvv)
      ) {
        res.status(400).json({ message: "Invalid card details" });
        return;
      }
      orderData.cardDetails = { cardNumber, expiryDate, cvv };
    }

    // Create order
    const order = new Order(orderData);
    await order.save();

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Failed to place order", error });
  }
};

// ✅ Get Orders
export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await Order.find().populate("items.product_id");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};

// ✅ Update Order Status
export const updateOrderStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: "Failed to update order", error });
  }
};
