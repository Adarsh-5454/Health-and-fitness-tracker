import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

// Define the prop types for the component
interface AddToCartButtonProps {
  id: number | string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ id }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate(`/shopping/cart/ ${id}`);
    console.log(id);
  };

  return <Button onClick={handleAddToCart} label="Add to Cart" />;
};

export default AddToCartButton;
