import React from "react";
import axios from "axios";
import Button from "../../Button/Button";

interface AddToCartButtonProps {
  id: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ id }) => {
  const handleAddToCart = async () => {
    console.log(id);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shoppingRoutes/cart",
        {
          productId: id,
          quantity: 1,
        }
      );

      console.log(response.data);

      alert("Item added to cart!");
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      alert("Could not add item to cart.");
    }
  };

  return <Button onClick={handleAddToCart} label="Add to Cart" />;
};

export default AddToCartButton;
