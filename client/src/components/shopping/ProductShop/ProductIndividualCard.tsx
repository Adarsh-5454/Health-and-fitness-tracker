import React from "react";
import { IoIosStar } from "react-icons/io";

const ProductIndividualCard = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center p-4">
      <div className="md:w-2/5">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="md:w-3/5">
        <p className="text-xl font-semibold">{product.name}</p>
        <div className="flex items-center my-2">
          <span className="bg-purple-700 text-white px-2 py-1 rounded-md mr-2">
            {product.rating} <IoIosStar />
          </span>
        </div>
        <p className="text-gray-700 my-4">{product.description}</p>
        <div className="flex items-center my-4">
          <p className="text-2xl font-bold mr-6">₹{product.price.discounted}</p>
          <p className="line-through text-gray-500">
            ₹{product.price.original}
          </p>
        </div>
        <h4 className="text-lg font-semibold mb-2">Specifications:</h4>
        <ul className="list-disc pl-4">
          <li>Brand: {product.brand}</li>
          <li>Material: {product.specifications.material}</li>
          <li>Colors: {product.specifications.color.join(", ")}</li>
          {product.specifications.product_dimensions && (
            <li>Dimensions: {product.specifications.product_dimensions}</li>
          )}
          <li>Sizes: {product.specifications.size?.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductIndividualCard;
