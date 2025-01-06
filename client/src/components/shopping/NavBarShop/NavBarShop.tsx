import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

const NavBarShop = () => {
   return (
      <div className="w-full   sticky top-0 py-4 bg-primary-dark flex justify-between px-24">
         <div className="flex items-center gap-6">
            <div className="w-8 h-8 bg-secondary-light rounded-full"></div>
            <h3 className="font-bold text-xl text-primary-light">
               FIT MAESTRO
            </h3>
         </div>

         <div className="flex items-center gap-6">
            <FiSearch className="text-3xl text-secondary-light rounded-full" />

            <FaCircleUser className="text-3xl text-secondary-light rounded-full" />
            <GoHeartFill className="text-3xl text-secondary-light rounded-full" />
            <FaShoppingCart className="text-3xl text-secondary-light rounded-full" />
         </div>
      </div>
   );
};

export default NavBarShop;
