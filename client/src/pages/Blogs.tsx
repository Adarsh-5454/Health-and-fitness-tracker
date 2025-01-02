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
            <h3 className="text-3xl text-gray-800 font-semibold">My Blog</h3>
          </div>

          {/* search bar */}
          <div className="mt-2 flex items-center justify-between">
            <input
              type="text"
              placeholder="search for blogs"
              spellCheck="false"
              className="border border-gray-300 outline-none bg-gray-50 text-gray-700 px-4 py-3 h-14 rounded-full flex-1 mr-4 text-lg"
            />
            <button className="border-none outline-none bg-gray-50 rounded-full w-14 h-14 cursor-pointer">
              <img
                src="src\assests\blogs\search.png"
                alt=""
                className="w-4"
              />
            </button>
          </div>

          {/* container ----------------- */}
          <div className="flex justify-center items-center my-5 flex-wrap flex-row container">
            {/* box-1 ------------- */}
            <div className="w-[350px] bg-white border border-gray-200 m-5">
              {/* img ---- */}
              <div className="w-full h-auto">
                <img
                  alt="blog"
                  src="src/assests/blogs/blog-1.jpeg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* text --- */}
              <div className="p-6 flex flex-col">
                <span className="text-red-500 text-sm">
                  18 July 2021 / Web Design
                </span>
                <a href="#" className="text-xl font-medium text-gray-800 mt-2">
                  What Has Happened to All of the Web Design Ideas?
                </a>
                <p className="text-gray-600 text-sm line-clamp-3 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate facilis modi veritatis adipisci omnis perferendis
                  deleniti tempore quasi? Explicabo recusandae soluta vel cum
                  perspiciatis consequuntur dolorum distinctio minima voluptate
                  quae?
                </p>
                <a
                  href="readmore.html"
                  className="text-black hover:text-red-500 transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* box-2 ------------- */}
            <div className="w-[350px] bg-white border border-gray-200 m-5">
              {/* img ---- */}
              <div className="w-full h-auto">
                <img
                  alt="blog"
                  src="src/assests/blogs/blog-2.jpeg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* text --- */}
              <div className="p-6 flex flex-col">
                <span className="text-red-500 text-sm">
                  18 July 2021 / Web Design
                </span>
                <a href="#" className="text-xl font-medium text-gray-800 mt-2">
                  What Has Happened to All of the Web Design Ideas?
                </a>
                <p className="text-gray-600 text-sm line-clamp-3 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate facilis modi veritatis adipisci omnis perferendis
                  deleniti tempore quasi? Explicabo recusandae soluta vel cum
                  perspiciatis consequuntur dolorum distinctio minima voluptate
                  quae?
                </p>
                <a
                  href="#"
                  className="text-black hover:text-red-500 transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* box-3 ------------- */}
            <div className="w-[350px] bg-white border border-gray-200 m-5 box-3">
              {/* img ---- */}
              <div className="w-full h-auto">
                <img
                  alt="blog"
                  src="src/assests/blogs/blog-3.jpeg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* text --- */}
              <div className="p-6 flex flex-col">
                <span className="text-red-500 text-sm">
                  18 July 2021 / Web Design
                </span>
                <a href="#" className="text-xl font-medium text-gray-800 mt-2">
                  What Has Happened to All of the Web Design Ideas?
                </a>
                <p className="text-gray-600 text-sm line-clamp-3 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate facilis modi veritatis adipisci omnis perferendis
                  deleniti tempore quasi? Explicabo recusandae soluta vel cum
                  perspiciatis consequuntur dolorum distinctio minima voluptate
                  quae?
                </p>
                <a
                  href="#"
                  className="text-black hover:text-red-500 transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blogs;
