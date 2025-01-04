import React from "react";
import Button from "../../Button/Button";

export const CartTotal = () => {
   return (
      <div className="mt-3 w-96 max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
         <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
               Price Details (2 items)
            </h3>
            <div className="space-y-4">
               {/* Total MRP */}
               <div className="flex justify-between">
                  <span className="text-gray-600">Total MRP</span>
                  <span className="font-medium">₹2998.00</span>
               </div>
               {/* Total Discount */}
               <div className="flex justify-between">
                  <span className="text-gray-600">Total Discount</span>
                  <span className="text-primary-dark">-₹1720.00</span>
               </div>
               {/* Total Payable */}
               <div className="flex justify-between border-t pt-4">
                  <span className="text-lg font-bold">Total Payable</span>
                  <span className="text-lg font-bold">₹1278.00</span>
               </div>
               {/* Confirm Order Button */}

               <Button label={"Confirm Order"} />
            </div>
         </div>
      </div>
   );
};

export default CartTotal;
