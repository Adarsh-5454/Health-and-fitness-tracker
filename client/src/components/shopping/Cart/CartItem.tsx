import React from "react";

export interface Product {
  id: string;
  name: string;
  image: string;
}

export interface CartItemType {
  id: string;
  product_id: Product;
  quantity: number;
  price: {
    discounted: number;
    original: number;
  };
}

interface CartItemProps {
  prev: CartItemType;
  onQuantityChange: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ prev, onQuantityChange }) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      onQuantityChange(prev.id, newQuantity);
    }
  };
  return (
    <div className="flex flex-col w-full sm:w-3/4 space-y-4 p-1 sm:space-y-4 sm:p-4">
      <div className="flex w-full max-w-4xl h-fit sm:h-44 rounded-lg shadow-md p-2 sm:p-4 space-x-2 sm:space-x-4">
        <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-lg border border-gray-200 overflow-hidden">
          <img
            src={prev.product_id.image}
            alt={prev.product_id.name}
            className="w-full h-full object-cover rounded sm:rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start text-sm sm:text-xl font-medium">
            <span className="w-11/12">{prev.product_id.name}</span>
            <button className="w-1/12 text-xl sm:text-3xl text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
          <div className="mt-1 sm:mt-4 flex items-center space-x-2">
            <button
              className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              onClick={() => handleQuantityChange(prev.quantity - 1)}
            >
              -
            </button>
            <span>{prev.quantity}</span>
            <button
              className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              onClick={() => handleQuantityChange(prev.quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="mt-1 sm:mt-3">
            <span className="ml-2 text-xs sm:text-base text-gray-500 line-through">
              ₹{prev.price.discounted}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
