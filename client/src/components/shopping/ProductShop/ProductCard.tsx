import React from "react";
import { IoIosStar } from "react-icons/io";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

interface Product {
   id: string;
   name: string;
   image: string;
   price: {
      original: number;
      discounted: number;
   };
   rating: number;
}

const ProductCard: React.FC<{ product: Product; id: string }> = ({
   product,
   id,
}) => {
   // key=id
   const navigate = useNavigate();
   const handleProduct = async () => {
      navigate(`/shopping/${id}`);
      console.log(id);
   };
   return (
      <div
         onClick={handleProduct}
         className=" flex flex-col rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-200 w-60 p-5 m-2"
      >
         <div className="relative w-full h-60">
            <img
               src={product.image}
               alt={product.name}
               className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute flex bottom-2 right-1 text-sm bg-white text-black rounded-lg px-2 py-1 hover:bg-primary-dark hover:text-white">
               {product.rating} <IoIosStar />
            </span>
         </div>
         <span className="font-bold text-lg text-gray-800 truncate px-2">
            {product.name}
         </span>
         <div className="flex gap-5 items-center px-2 my-2">
            <span className="text-lg text-primary-dark">
               ₹{product.price.discounted}
            </span>
            <span className="text-sm text-gray-500 line-through">
               ₹{product.price.original}
            </span>
         </div>
         <Button label="Add To Cart" />
      </div>
   );
};

export default ProductCard;
