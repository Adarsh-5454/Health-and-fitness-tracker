import React from "react";

const CartItem = () => {
   return (
      <div className="  flex flex-col w-full  sm:w-3/4 space-y-4 p-1 sm:space-y-4 sm:p-4">
         {/* Cart Item 1 */}
         <div className="flex w-full max-w-4xl h-fit sm:h-44 rounded-lg shadow-md p-2 sm:p-4 space-x-2 sm:space-x-4">
            <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-lg border border-gray-200 overflow-hidden">
               <img
                  src="https://m.media-amazon.com/images/I/416jU1p4hyL._SX300_SY300_QL70_FMwebp_.jpg"
                  alt="Adjustable Dumbbells Set"
                  className="w-full h-full object-cover rounded sm:rounded-lg"
               />
            </div>

            <div className="flex-1 ">
               <div className="flex justify-between items-start text-sm sm:text-xl font-medium">
                  <span className="w-11/12">Adjustable Weight Bench</span>
                  <button className="  w-1/12  text-xl sm:text-3xl text-gray-500 hover:text-gray-700">
                     ×
                  </button>
               </div>

               <div className="mt-1 sm:mt-4 flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-500">QTY:</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     -
                  </button>
                  <span>1</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     +
                  </button>
               </div>

               <div className="mt-1 sm:mt-3">
                  <span className="text-base sm:text-xl font-bold">₹7499</span>
                  <span className="ml-2 text-xs sm:text-base text-gray-500 line-through">
                     ₹8999
                  </span>
               </div>
            </div>
         </div>

         {/* Cart Item 2 */}
         <div className="flex w-full max-w-4xl h-fit sm:h-44 rounded-lg shadow-md p-2 sm:p-4 space-x-2 sm:space-x-4">
            <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-lg border border-gray-200 overflow-hidden">
               <img
                  src="https://m.media-amazon.com/images/I/61huUfZbqlL._SX679_.jpg"
                  alt="Adjustable Dumbbells Set"
                  className="w-full h-full object-cover rounded sm:rounded-lg"
               />
            </div>

            <div className="flex-1 relative">
               <div className="flex justify-between items-start text-sm sm:text-xl font-medium">
                  <span className="w-11/12">
                     Multi-Function Home Gym Machine
                  </span>
                  <button className="w-1/12  text-xl sm:text-3xl text-gray-500 hover:text-gray-700">
                     ×
                  </button>
               </div>

               <div className="mt-1 sm:mt-4 flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-500">QTY:</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     -
                  </button>
                  <span>1</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     +
                  </button>
               </div>

               <div className="mt-1 sm:mt-3">
                  <span className="text-base sm:text-xl font-bold">₹21999</span>
                  <span className="ml-2 text-xs sm:text-base text-gray-500 line-through">
                     ₹25999
                  </span>
               </div>
            </div>
         </div>
         {/* Cart Item 3 */}
         <div className="flex w-full max-w-4xl h-fit sm:h-44 rounded-lg shadow-md p-2 sm:p-4 space-x-2 sm:space-x-4">
            <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-lg border border-gray-200 overflow-hidden">
               <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/5/v/v/xxl-compression-half-sleeves-dry-fit-tshirts-for-high-original-imahft2mubpfzffz.jpeg?q=70&crop=false"
                  alt="Adjustable Dumbbells Set"
                  className="w-full h-full object-cover rounded sm:rounded-lg"
               />
            </div>

            <div className="flex-1 relative">
               <div className="flex justify-between items-start text-sm sm:text-xl font-medium">
                  <span className="w-11/2">Men's Workout T-Shirt</span>
                  <button className="w-1/12  text-xl sm:text-3xl text-gray-500 hover:text-gray-700">
                     ×
                  </button>
               </div>

               <div className="mt-1 sm:mt-4 flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-500">QTY:</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     -
                  </button>
                  <span>1</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     +
                  </button>
               </div>

               <div className="mt-1 sm:mt-3">
                  <span className="text-base sm:text-xl font-bold">₹7499</span>
                  <span className="ml-2 text-xs sm:text-base text-gray-500 line-through">
                     ₹8999
                  </span>
               </div>
            </div>
         </div>

         {/* Cart Item 4 */}
         <div className="flex w-full max-w-4xl h-fit sm:h-44 rounded-lg shadow-md p-2 sm:p-4 space-x-2 sm:space-x-4">
            <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-lg border border-gray-200 overflow-hidden">
               <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/tight/p/a/z/xxl-af-01-cosvos-original-imah7syp4thgjxsz.jpeg?q=70&crop=false"
                  alt="Adjustable Dumbbells Set"
                  className="w-full h-full object-cover rounded sm:rounded-lg"
               />
            </div>

            <div className="flex-1 relative">
               <span className="flex justify-between items-start text-sm sm:text-xl font-medium">
                  <span className="w-11/2"> Women's High-Waist Leggings</span>
                  <button className="w-1/12  text-xl sm:text-3xl text-gray-500 hover:text-gray-700">
                     ×
                  </button>
               </span>

               <div className="mt-1 sm:mt-4 flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-500">QTY:</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     -
                  </button>
                  <span>1</span>
                  <button className="h-3 w-3 sm:w-6 sm:h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                     +
                  </button>
               </div>

               <div className="mt-1 sm:mt-3">
                  <span className="text-base sm:text-xl font-bold">₹21999</span>
                  <span className="ml-2 text-xs sm:text-base text-gray-500 line-through">
                     ₹25999
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
