import { RiChatAiFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
   const location = useLocation();

   const isHomePage = location.pathname === "/";
   const isShoppingPage = location.pathname.startsWith("/shopping");

   const navbarClasses = `
    fixed py-4 top-0 left-0 right-0 z-10 flex justify-between  px-4 md:px-24  sm: 
    ${isHomePage ? "bg-transparent" : "bg-primary-dark"} 
    ${isShoppingPage ? "hidden" : ""}
  `;

   return (
      <div className={navbarClasses.trim()}>
         <div className="flex items-center md:gap-6 gap-2">
            <IoMenu className="text-2xl text-secondary-light rounded-full  md:hidden " />
            <div className="w-5 h-5  bg-secondary-light rounded-full md:w-8 md:h-8"></div>
            <h3 className="font-bold text-lg text-primary-light md:text-xl">
               FIT MAESTRO
            </h3>
         </div>

         <div className="flex items-center md:gap-6 gap-2">
            <RiChatAiFill className="text-xl text-secondary-light rounded-full md:text-3xl" />
            <FaCircleUser className="text-xl text-secondary-light rounded-full md:text-3xl" />
         </div>
      </div>
   );
};

export default Navbar;
