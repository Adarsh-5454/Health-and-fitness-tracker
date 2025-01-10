import React from "react";
import Button from "../../Button/Button";

export const CartTotal = () => {
   return (
      <div className="mt-3 w-full  sm:w-1/4 max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
         <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-base font-semibold mb-3 sm:mb-4">
               Price Details (4 items)
            </h3>
            <div className="space-y-2 sm:space-y-4">
               {/* Total MRP */}
               <div className="flex justify-between">
                  <span className="text-gray-600">Total MRP</span>
                  <span className="font-medium">₹111299.00</span>
               </div>
               {/* Total Discount */}
               <div className="flex justify-between">
                  <span className="text-gray-600">Total Discount</span>
                  <span className="text-primary-dark">-₹10799.00</span>
               </div>
               {/* Total Payable */}
               <div className="flex justify-between border-t border-gray-300  pt-4">
                  <span className="text-base font-bold">Total Payable</span>
                  <span className="text-base font-bold">₹101599.00</span>
               </div>
               {/* Confirm Order Button */}

               <Button label={"Confirm Order"} />
            </div>
         </div>
      </div>
   );
};

export default CartTotal;
