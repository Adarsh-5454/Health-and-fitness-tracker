import { RiChatAiFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
const Navbar = () => {
   return (
      <div className="fixed w-full py-2 bg-transparent top-0 left-0 right-0 z-1 flex justify-between px-16">
         <div className="flex items-center gap-4">
            <button className="w-8 h-8 bg-secondary-dark rounded-full"></button>
            <h3 className="font-bold text-xl text-purple-700">FIT MAESTRO</h3>
         </div>

         <div className="flex items-center gap-4">
            <button className="w-5 h-5 text-3xl text-black rounded-full">
               <RiChatAiFill />
            </button>

            <button className="w-5 h-5 text-3xl text-black rounded-full">
               <FaCircleUser />
            </button>
         </div>
      </div>
   );
};

export default Navbar;
