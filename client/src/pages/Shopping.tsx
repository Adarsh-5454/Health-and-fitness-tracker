import Banner from "../components/shopping/BannerShop/Banner";
import NavBarShop from "../components/shopping/NavBarShop/NavBarShop";
import ProductShop from "../components/shopping/ProductShop/ProductShop";

const Shopping = ({ setMenu, menu }) => {
  return (
    <div>
      <NavBarShop setMenu={setMenu} menu={menu} />
      <Banner />
      <ProductShop />
    </div>
  );
};

export default Shopping;
