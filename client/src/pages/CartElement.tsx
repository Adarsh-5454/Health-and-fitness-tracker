import CartItem from "../components/Shopping/Cart/CartItem";
import CartTotal from "../components/Shopping/Cart/CartTotal";

const CartElement = () => {
   return (
      <div className="px-36">
         <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
         <div className="flex flex-col md:flex-row justify-between ">
            <CartItem />
            <CartTotal />
         </div>
      </div>
   );
};

export default CartElement;
