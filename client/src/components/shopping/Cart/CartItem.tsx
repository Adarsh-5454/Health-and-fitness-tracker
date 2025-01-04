import React from "react";

const CartItem = () => {
   return (
      <div className="flex flex-col w-8/12 space-y-4 p-4">
         {/* Cart Item 1 */}
         <div className="flex w-full max-w-4xl h-44 rounded-lg shadow-md p-4 space-x-4">
            {/* Product Image */}
            <div className="w-36 h-36 rounded-lg border border-gray-200 overflow-hidden">
               <img
                  src="src/assets/shopping/banner.jpg"
                  alt="Adjustable Dumbbells Set"
                  className="w-full h-full object-cover rounded-lg"
               />
            </div>

            {/* Product Details */}
            <div className="flex-1 relative">
               {/* Delete Button */}
               <button className="absolute right-0 top-0 text-3xl text-gray-500 hover:text-gray-700">
                  ×
               </button>

               {/* Product Name */}
               <span className="text-xl font-medium">
                  Adjustable Dumbbells Set
               </span>

               {/* Quantity Controls */}
               <div className="mt-4 flex items-center space-x-2">
                  <span className="text-sm text-gray-500">QTY:</span>
                  <button className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     -
                  </button>
                  <span>1</span>
                  <button className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     +
                  </button>
               </div>

               {/* Price */}
               <div className="mt-3">
                  <span className="text-xl font-bold">₹7499</span>
                  <span className="ml-2 text-gray-500 line-through">₹8999</span>
               </div>
            </div>
         </div>

         {/* Cart Item 2 */}
         <div className="flex w-full max-w-4xl h-44 rounded-lg shadow-md p-4 space-x-4">
            {/* Product Image */}
            <div className="w-36 h-36 rounded-lg border border-gray-200 overflow-hidden">
               <img
                  src="src/assets/shopping/thredmill.png"
                  alt="Treadmill"
                  className="w-full h-full object-cover rounded-lg"
               />
            </div>

            {/* Product Details */}
            <div className="flex-1 relative">
               {/* Delete Button */}
               <button className="absolute right-0 top-0 text-3xl text-gray-500 hover:text-gray-700">
                  ×
               </button>

               {/* Product Name */}
               <span className="text-xl font-medium">
                  Adjustable Dumbbells Set
               </span>

               {/* Quantity Controls */}
               <div className="mt-4 flex items-center space-x-2">
                  <span className="text-sm text-gray-500">QTY:</span>
                  <button className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     -
                  </button>
                  <span>1</span>
                  <button className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     +
                  </button>
               </div>

               {/* Price */}
               <div className="mt-3">
                  <span className="text-xl font-bold">₹7499</span>
                  <span className="ml-2 text-gray-500 line-through">₹8999</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
