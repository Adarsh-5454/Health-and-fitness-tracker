import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

const NavBarShop = () => {
   return (
      <div className="w-full   sticky top-0 py-1 sm:py-4 bg-primary-dark flex justify-between px-4 sm:px-24">
         <div className="flex items-center gap-2 sm:gap-6">
            <div className="w-4 h-4 sm:w-8 sm:h-8 bg-secondary-light rounded-full"></div>
            <h3 className="font-bold text-base sm:text-xl text-primary-light">
               FIT MAESTRO
            </h3>
         </div>

         <div className="flex items-center gap-2 sm:gap-6">
            <FiSearch className="text-lg sm:text-3xl text-secondary-light rounded-full" />

            <FaCircleUser className="text-lg sm:text-3xl text-secondary-light rounded-full" />
            <GoHeartFill className="text-lg sm:text-3xl text-secondary-light rounded-full" />
            <FaShoppingCart className="text-lg sm:text-3xl text-secondary-light rounded-full" />
         </div>
      </div>
   );
};

export default NavBarShop;
