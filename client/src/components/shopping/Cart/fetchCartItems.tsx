import axios from "axios";

interface Product {
  id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
}

interface CartItemType {
  id: string;
  product_id: Product;
  quantity: number;
}

export const fetchCartItems = async (): Promise<CartItemType[]> => {
  try {
    const response = await axios.get<{ items: CartItemType[] }>(
      "http://localhost:5000/api/shoppingRoutes/cart/item"
    );

    if (response.data && Array.isArray(response.data.items)) {
      return response.data.items;
    } else {
      console.error("Invalid API response:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};
