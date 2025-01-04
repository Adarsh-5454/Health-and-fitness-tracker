import CartItem from "../components/Shopping/Cart/CartItem";
import CartTotal from "../components/Shopping/Cart/CartTotal";
import styles from "./CartSection.module.css";

const CartElement = () => {
  return (
    <div className="ProductCart">
      <h2>Shopping Cart</h2>
      <div className={styles.cartDiv}>
        <CartItem />
        <CartTotal />
      </div>
    </div>
  );
};

export default CartElement;
