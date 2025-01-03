import React, { useState } from "react";
import styles from "./ProductShop.module.css";
import { IoIosStar } from "react-icons/io";

const ProductIndividualCard = ({ product }) => {
  return (
    <div className={styles.ProductIndividualCardMain}>
      <div className={styles.ProductIndividualCardImgDiv}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.ProductIndividualCardImg}
        />
      </div>
      <div className={styles.ProductIndividualCardDetails}>
        <p className={styles.ProductIndividualCardName}>{product.name}</p>
        <div className={styles.IndividualRatingAndReview}>
          <span className={styles.IndividualRating}>
            {product.rating} <IoIosStar />
          </span>
        </div>
        <p>{product.description}</p>
        <div className={styles.ProductIndividualCardprice}>
          <p className={styles.ProductIndividualCarddiscountedPrice}>
            ₹{product.price.discounted}
          </p>
          <p className={styles.ProductIndividualCardoriginalPrice}>
            ₹{product.price.original}
          </p>
        </div>
        <div className={styles.ProductSpecifications}>
          <h4>Specifications:</h4>
          <ul>
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
    </div>
  );
};

export default ProductIndividualCard;
