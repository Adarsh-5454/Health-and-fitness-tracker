import React from "react";
import ProductCard from "./ProductCard";

const ProductCategory = ({ title, products }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold uppercase text-gray-800 mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap justify-around">
        {products.map((prev) => (
          <ProductCard prev={prev} key={prev.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
