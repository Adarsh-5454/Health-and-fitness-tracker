import React from "react";
import { IoIosStar } from "react-icons/io";

const ProductCard = ({ prev }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition-transform duration-200 w-64 m-2">
      <div className="relative">
        <img
          src={prev.image}
          alt=""
          className="w-52 h-52 object-cover rounded-t-lg"
        />
        <span className="absolute bottom-4 right-2 text-sm bg-white text-black rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white">
          {prev.rating} <IoIosStar />
        </span>
      </div>
      <span className="font-bold text-lg text-gray-800 truncate px-2">
        {prev.name}
      </span>
      <div className="flex justify-between items-center px-2 my-2">
        <span className="text-lg text-pink-500">₹{prev.price.discounted}</span>
        <span className="text-sm text-gray-500 line-through">
          ₹{prev.price.original}
        </span>
      </div>
      <button className="mt-auto bg-purple-700 text-white rounded-md py-2 px-4 m-2 hover:bg-purple-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
