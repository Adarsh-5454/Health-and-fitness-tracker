import React from "react";
import { IoIosStar } from "react-icons/io";
import Button from "../../Button/Button";

const ProductCard = ({ prev }) => {
   return (
      <div className="flex flex-col   rounded-lg overflow-hidden  hover:scale-105 transform transition-transform duration-200 w-60 p-5 m-2">
         <div className="relative w-full h-60">
            <img
               src={prev.image}
               alt=""
               className="w-full h-full bg-cover rounded-lg"
            />
            <span className="absolute flex bottom-2 right-1 text-sm bg-white text-black rounded-lg px-2 py-1 hover:bg-primary-dark hover:text-white">
               {prev.rating} <IoIosStar />
            </span>
         </div>
         <span className="font-bold text-lg text-gray-800 truncate px-2">
            {prev.name}
         </span>
         <div className="flex  gap-5 items-center px-2 my-2">
            <span className="text-lg text-primary-dark">
               ₹{prev.price.discounted}
            </span>
            <span className="text-sm text-gray-500 line-through">
               ₹{prev.price.original}
            </span>
         </div>
         <Button label={"Add To Cart"} />
      </div>
   );
};

export default ProductCard;
