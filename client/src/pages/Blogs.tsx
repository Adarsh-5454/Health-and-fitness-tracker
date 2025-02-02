import React from "react";

function Blogs() {
   return (
      <>
         <div>
            {/* blog-section ============================================================================ */}
            <section
               id="blog"
               className="flex flex-col justify-center items-center py-10 border-t border-b border-gray-200"
            >
               {/* blog-heading -------------- */}
               <div className="flex flex-col justify-center items-center">
                  <span className="text-red-500">My Recent Posts</span>
                  <h3 className="text-3xl text-gray-800 font-semibold">
                     My Blog
                  </h3>
               </div>

               {/* search bar */}
               <div className="mt-2 flex items-center justify-between">
                  <input
                     type="text"
                     placeholder="search for blogs"
                     spellCheck="false"
                     className="border border-gray-300 outline-none bg-gray-50 text-gray-700 px-4 py-3 h-14 rounded-full flex-1 mr-4 text-lg"
                  />
                  <button className="border-none outline-none bg-gray-50 rounded-full w-14 h-14 cursor-pointer  flex justify-center items-center">
                     <img
                        src="src\assets\blogs\search.png"
                        alt=""
                        className="w-4"
                     />
                  </button>
               </div>

               {/* container ----------------- */}
               <div className="flex justify-center items-center my-5 flex-wrap flex-row container"></div>
            </section>
         </div>
      </>
   );
}

export default Blogs;
