import axios from "axios";
import { CartItemType } from "./CartItem";

export const fetchCartItems = async (): Promise<CartItemType[]> => {
  try {
    const response = await axios.get<CartItemType[]>("/api/cart"); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};
