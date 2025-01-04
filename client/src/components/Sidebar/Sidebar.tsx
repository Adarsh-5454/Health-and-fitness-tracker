import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div
      className={`${styles.sideBar} w-px  fixed overflow-hidden top-0 bottom-0 left-0	hover:w-56 hover:visible`}
    >
      <nav className="bg-primary-dark  w-full h-full p-4 rounded-r-lg shadow-lg transition-all duration-300">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white">FitMaestro</h1>
        </div>
        <ul className="flex flex-col gap-4 text-white">
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
      <div className="w-4/5 p-5"></div>
    </div>
  );
};

export default Sidebar;

//  <div className="expand">=</div>
//       <nav class="main-menu">
//         <div class="display1">
//           <h1>FitMaestro</h1>
//           <h2 class="compress">X</h2>
//         </div>

//         <ul>
//           <li class="nav-item active">
//             <b></b>
//             <b></b>
//             <a href="#">
//               <span class="nav-text">Home</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <b></b>
//             <b></b>
//             <a href="#">
//               <span class="nav-text">Profile</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <b></b>
//             <b></b>
//             <a href="#">
//               <span class="nav-text">Schedule</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <b></b>
//             <b></b>
//             <a href="#">
//               <span class="nav-text">Activities</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <b></b>
//             <b></b>
//             <a href="#">
//               <span class="nav-text">Settings</span>
//             </a>
//           </li>
//         </ul>
//       </nav>

// <div className='fixed top-0 left-0 h-full'>

//     <div className='absolute top-0 left-0 h-full w-2 bg-gray-800 hover:w-48 transition-all duration-300 shadow-lg'>
//       <div className='h-full flex flex-col items-start bg-gray-800 text-white mt-20'>
//         {/* Navigation Links */}
//         <ul className='space-y-4 mt-8 px-4 w-full'>
//           <li>
//             <NavLink
//               to='/'
//               className={({ isActive }) =>
//                 isActive
//                   ? 'bg-blue-500 text-white w-full p-2 rounded-md block'
//                   : 'hover:bg-gray-700 w-full p-2 rounded-md block'
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to='/blogs'
//               className={({ isActive }) =>
//                 isActive
//                   ? 'bg-blue-500 text-white w-full p-2 rounded-md block'
//                   : 'hover:bg-gray-700 w-full p-2 rounded-md block'
//               }
//             >
//               Blogs
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to='/contact'
//               className={({ isActive }) =>
//                 isActive
//                   ? 'bg-blue-500 text-white w-full p-2 rounded-md block'
//                   : 'hover:bg-gray-700 w-full p-2 rounded-md block'
//               }
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//         {/* Responsive Notice */}
//         <div className='mt-auto w-full text-center bg-gray-900 p-4 text-sm'>
//           <p>Responsive Sidebar</p>
//         </div>
//       </div>
//     </div>
//   </div>
