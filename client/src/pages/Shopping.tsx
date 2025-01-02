import Banner from "../components/shopping/BannerShop/Banner";
import CartSection from "../components/shopping/CartSection/CartSection";
import NavBarShop from "../components/shopping/NavBarShop/NavBarShop";
import ProductShop from "../components/shopping/ProductShop/ProductShop";

const Shopping = () => {
   return (
      <div>
         <NavBarShop />
         <Banner />
         <ProductShop />
         <CartSection />
      </div>
   );
};

export default Shopping;
