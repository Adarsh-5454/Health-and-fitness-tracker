import React from "react";

interface CartTotalProps {
  totalMRP: number;
  totalDiscount: number;
  totalPayable: number;
}

export interface CartTotalType {
  totalMRP: number;
  totalDiscount: number;
  totalPayable: number;
}

const CartTotal: React.FC<CartTotalProps> = ({
  totalMRP,
  totalDiscount,
  totalPayable,
}) => {
  return (
    <div className="mt-3 w-full sm:w-1/4 max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="text-base font-semibold mb-3 sm:mb-4">Price Details</h3>
        <div className="space-y-2 sm:space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Total MRP</span>
            <span className="font-medium">₹{totalMRP.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Discount</span>
            <span className="text-primary-dark">
              -₹{totalDiscount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-4">
            <span className="text-base font-bold">Total Payable</span>
            <span className="text-base font-bold">
              ₹{totalPayable.toFixed(2)}
            </span>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
