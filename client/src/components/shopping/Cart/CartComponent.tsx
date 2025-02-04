import React, { useState, useEffect } from "react";
import axios from "axios";

// Define TypeScript interfaces
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  cart_image: string;
}

const CartComponent: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get<{ items: CartItem[] }>(
          "http://localhost:5000/api/shoppingRoutes/cart/item"
        );

        // Check if the response contains the expected structure
        if (response.data && Array.isArray(response.data.items)) {
          setCartItems(response.data.items); // Extract and set the items array
        } else {
          console.error("Invalid response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      {cartItems.map(({ product, quantity, cart_image }) => (
        <div key={product.id}>
          {product && product.image ? (
            <img src={product.image || cart_image} alt={product.name} />
          ) : (
            <p>No image available</p>
          )}
          <h3>{product.name}</h3>
          <p>Quantity: {quantity}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
