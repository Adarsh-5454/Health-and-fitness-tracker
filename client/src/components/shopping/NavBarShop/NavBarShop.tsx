import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

const NavBarShop = () => {
  return (
    <div className="relative w-full h-10 bg-transparent">
      <div className="absolute left-20 flex items-center gap-5 h-full">
        <img
          src="../../src/assets/shopping/loder.png.webp"
          alt="Logo"
          className="w-6 h-6"
        />
        <h3 className="font-bold text-xl text-purple-700">FIT MAESTRO</h3>
      </div>

      <div className="absolute right-20 flex items-center gap-5 h-full">
        <button className="w-5 h-5 text-xl text-black rounded-full">
          <FiSearch />
        </button>
        <button className="w-5 h-5 text-xl text-black rounded-full">
          <FaCircleUser />
        </button>
        <button className="w-5 h-5 text-xl text-black rounded-full">
          <GoHeartFill />
        </button>
        <button className="w-5 h-5 text-xl text-black rounded-full">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default NavBarShop;
