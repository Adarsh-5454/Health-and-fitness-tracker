import React from "react";
import { clothingProducts } from "../../../utils/product/clothingProducts";
import { fitnessEquipment } from "../../../utils/product/fitnessProducts";
import ProductCategory from "./ProductCategory";
import "./ProductShop.module.css";

const ProductShop = () => {
  return (
    <>
      <ProductCategory title="Clothing" products={clothingProducts} />
      <ProductCategory title="Fitness" products={fitnessEquipment} />
      {/* <ProductIndivitualCard /> */}
    </>
  );
};

export default ProductShop;
