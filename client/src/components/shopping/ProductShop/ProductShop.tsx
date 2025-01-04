import React from "react";
import { clothingProducts } from "../../../utils/product/clothingProducts";
import { fitnessEquipment } from "../../../utils/product/fitnessProducts";
import ProductCategory from "./ProductCategory";

const ProductShop = () => {
  return (
    <div className="space-y-6">
      <ProductCategory title="Clothing" products={clothingProducts} />
      <ProductCategory title="Fitness" products={fitnessEquipment} />
    </div>
  );
};

export default ProductShop;
