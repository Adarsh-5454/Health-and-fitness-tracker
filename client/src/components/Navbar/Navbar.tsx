import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex space-x-4 p-4 bg-gray-800 text-white">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shopping"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Shopping
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chats"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* Navigation Section
      <div className="flex items-center justify-between h-[70px]">
        <img
          className="ml-[60px] p-[5px]"
          src="src\assests\home\—Pngtree—fitness logo logo_7771764.png"
          alt=""
          width="70"
        />
        <div className="ml-[120px] mt-[-60px] font-gill-sans">
          <span className="text-[#c7a9e8] text-[20px] font-bold">Flex</span>
          <span className="text-[#a294f9] text-[18px] font-bold">Fit</span>
        </div>
        <div className="flex justify-end gap-[40px] mt-[-30px] mr-[60px]">
          <img src="generative.png" alt="" width="35px" />
          <img src="src\assests\home\profile.jpg" alt="" width="35px" />
        </div>
      </div> */
}
