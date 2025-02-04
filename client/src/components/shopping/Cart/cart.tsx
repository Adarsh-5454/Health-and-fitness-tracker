import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { fetchCartItems } from "./fetchCartItems";
import { CartItemType } from "./CartItem";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const getCartItems = async () => {
      const items = await fetchCartItems();
      setCartItems(items);
    };

    getCartItems();
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalMRP = cartItems.reduce(
    (acc, item) => acc + item.price.original * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc + (item.price.original - item.price.discounted) * item.quantity,
    0
  );
  const totalPayable = totalMRP - totalDiscount;

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-grow">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            prev={item}
            onQuantityChange={handleQuantityChange}
          />
        ))}
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
