import { RiChatAiFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isShoppingPage = location.pathname === "/shopping";

  const navbarClasses = `
    fixed py-4 top-0 left-0 right-0 z-10 flex justify-between px-24 
    ${isHomePage ? "bg-transparent" : "bg-primary-dark"} 
    ${isShoppingPage ? "hidden" : ""}
  `;

  return (
    <div className={navbarClasses.trim()}>
      <div className="flex items-center gap-6">
        <div className="w-8 h-8 bg-secondary-light rounded-full"></div>
        <h3 className="font-bold text-xl text-primary-light">FIT MAESTRO</h3>
      </div>

      <div className="flex items-center gap-6">
        <RiChatAiFill className="text-3xl text-secondary-light rounded-full" />
        <FaCircleUser className="text-3xl text-secondary-light rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
