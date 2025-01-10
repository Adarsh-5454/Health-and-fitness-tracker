import CartItem from "../components/Shopping/Cart/CartItem";
import CartTotal from "../components/Shopping/Cart/CartTotal";
import NavBarShop from "../components/shopping/NavBarShop/NavBarShop";

const CartElement = () => {
   return (
      <div>
         <NavBarShop />
         <div className="px-4 sm:px-36">
            <h2 className="text-base sm:text-2xl text-center font-bold mb-4">
               SHOPPING CART
            </h2>
            <div className="flex flex-col md:flex-row justify-between ">
               <CartItem />
               <CartTotal />
            </div>
         </div>
      </div>
   );
};

export default CartElement;
