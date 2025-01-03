import React from "react";
import styles from "./NavBarShop.module.css";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

const NavBarShop = () => {
  return (
    <>
      <div className={styles.NavSection}>
        <div className={styles.NavLeft}>
          <img
            src="..\..\src\assets\shopping\loder.png.webp"
            alt="oops"
            className={styles.logo}
          />
          <h3 className={styles.logoName}>FIT MAESTRO</h3>
        </div>
        <div className={styles.NavRight}>
          <button className={styles.icon}>
            <FiSearch />
          </button>
          <button className={styles.icon}>
            <FaCircleUser />
          </button>

          <button className={styles.icon}>
            <GoHeartFill />
          </button>

          <button className={styles.icon}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBarShop;
