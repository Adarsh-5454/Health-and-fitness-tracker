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
