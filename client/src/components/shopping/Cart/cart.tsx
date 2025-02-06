import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { fetchCartItems } from "./fetchCartItems";

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

   useEffect(() => {
      const getCartItems = async () => {
         try {
            const items = await fetchCartItems();
            if (items) {
               setCartItems(items);
            }
         } catch (error) {
            console.error("Error fetching cart items:", error);
         }
      };

      getCartItems();
   }, []);

   const handleQuantityChange = (productId: string, newQuantity: number) => {
      setCartItems((prevItems) =>
         prevItems.map((item) =>
            item.product_id.id === productId
               ? { ...item, quantity: Math.max(1, newQuantity) } // Ensures min quantity is 1
               : item
         )
      );
   };
   const handleDeleteItem = async (productId: string) => {
      try {
         const response = await fetch(
            `http://localhost:5000/api/shoppingRoutes/cart/item/delete/${productId}`,
            {
               method: "DELETE",
            }
         );

         if (!response.ok) throw new Error("Failed to delete item");

         setCartItems((prevItems) =>
            prevItems.filter((item) => item.product_id._id !== productId)
         );
      } catch (error) {
         console.error("Error deleting item:", error);
      }
   };

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
      <div className="flex flex-col sm:flex-row">
         <div className="flex-grow">
            {cartItems.map((item) => (
               <CartItem
                  key={item.id}
                  cartItem={item}
                  onQuantityChange={handleQuantityChange}
                  onDelete={handleDeleteItem}
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
