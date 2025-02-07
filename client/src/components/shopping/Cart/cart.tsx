import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { fetchCartItems } from "./fetchCartItems";
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

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch Cart Items
  useEffect(() => {
    const getCartItems = async () => {
      try {
        setLoading(true);
        const items = await fetchCartItems();
        if (items) {
          setCartItems(items);
        }
      } catch (error) {
        setError("Failed to fetch cart items.");
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };
    getCartItems();
  }, []);

  // ✅ Update Quantity
  const handleQuantityChange = async (
    productId: string,
    newQuantity: number
  ) => {
    if (!productId) {
      console.error("Product ID is undefined!", productId);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/shoppingRoutes/cart/item/update/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: newQuantity }),
        }
      );

      if (!response.ok) throw new Error("Failed to update quantity");

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product_id._id === productId
            ? { ...item, quantity: Math.max(1, newQuantity) }
            : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // ✅ Remove Item from Cart
  const handleDeleteItem = async (productId: string) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/shoppingRoutes/cart/item/delete/${productId}`
      );

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product_id.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // ✅ Calculate Totals
  const totalMRP = cartItems.reduce(
    (acc, item) => acc + item.product_id.price.original * item.quantity,
    0
  );

  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.product_id.price.original - item.product_id.price.discounted) *
        item.quantity,
    0
  );

  const totalPayable = totalMRP - totalDiscount;

  return (
    <div className="flex flex-col px-4 md:px-24 sm:flex-row">
      <div className="flex-grow">
        {loading ? (
          <p>Loading cart...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDeleteItem}
            />
          ))
        )}
      </div>
      <CartTotal
        totalMRP={totalMRP}
        totalDiscount={totalDiscount}
        totalPayable={totalPayable}
      />
    </div>
  );
};

export default Cart;
