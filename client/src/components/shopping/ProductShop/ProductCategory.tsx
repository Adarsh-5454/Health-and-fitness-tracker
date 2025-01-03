import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductShop.module.css";
// import ProductIndividualCard from "./ProductIndividualCard";

const ProductCategory = ({ title, products }) => {
  return (
    <div>
      <h2 className={styles.Heading}>{title}</h2>
      <div className={styles.cardContainer}>
        {products.map((prev) => {
          return (
            <>
              <ProductCard prev={prev} key={prev.id} />{" "}
              {/* <ProductIndividualCard product={prev} /> */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
