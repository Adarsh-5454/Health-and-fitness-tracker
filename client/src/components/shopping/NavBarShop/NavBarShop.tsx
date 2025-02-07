import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import NavMenu from "../../Navbar/NavMenu";
import axios from "axios";
import SearchCard from "../ProductShop/SearchCard";
import { IoMdClose } from "react-icons/io";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
  rating: number;
}

const NavBarShop = ({
  setMenu,
  menu,
  searchedProduct,
  setSearchedProduct,
  searchContent,
  setSearchContent,
}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get<Product[]>(
        `http://localhost:5000/api/shoppingRoutes/search?searchTerm=${search}`
      );
      console.log(response.data);
      setSearchedProduct(response.data);
    } catch (error) {
      console.log(error);
    }
    setSearchContent(true);
  };
  const handleSearchClose = () => {
    setSearchContent(false);
  };

  return (
    <div className="w-full z-10 sticky top-0 py-1 sm:py-4 bg-primary-dark flex justify-between px-4 sm:px-24">
      <NavLink to="/shopping">
        <div className="flex items-center gap-2 sm:gap-6">
          <NavMenu setMenu={setMenu} menu={menu} />
          <div className="w-4 h-4 sm:w-8 sm:h-8 bg-secondary-light rounded-full"></div>
          <h3 className="font-bold text-base sm:text-xl text-primary-light">
            FIT MAESTRO
          </h3>
        </div>
      </NavLink>

      <div className="flex items-center gap-2 sm:gap-6">
        <div className="w-fit flex items-center gap-2 bg-white py-1 text-xs sm:text-lg rounded-3xl">
          <input
            onChange={handleChange}
            value={search}
            type="text"
            placeholder="Search"
            className="ms-4 outline-none"
          />
          {!searchContent ? (
            <button onClick={handleSearch}>
              <FiSearch className="text-lg sm:text-2xl text-secondary-dark rounded-full me-2" />
            </button>
          ) : (
            <button onClick={handleSearchClose}>
              <IoMdClose className="text-lg sm:text-2xl text-secondary-dark rounded-full me-2" />
            </button>
          )}
        </div>

        <FaCircleUser className="text-lg sm:text-3xl text-secondary-light rounded-full" />
        <GoHeartFill className="text-lg sm:text-3xl text-secondary-light rounded-full" />
        <NavLink to="/shopping/cart">
          <FaShoppingCart className="text-lg sm:text-3xl text-secondary-light rounded-full" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarShop;
