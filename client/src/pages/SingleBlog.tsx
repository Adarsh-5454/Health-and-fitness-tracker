import React from "react";
const SingleBlog = () => {
  return (
    <div>
      <div>
        {/* <!-- BLOG CONTAINER --> */}
        <div className="max-w-[800px] mx-auto my-5 bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-auto rounded-t-lg"
            src="src/assets/blogs/blog-1.jpeg"
            alt=""
          />
          <h3 className="text-3xl text-gray-800 my-5 text-center">
            What Has Happened to All of the Web Design Ideas?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed my-5 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non
            consequatur modi ab, ratione excepturi earum dignissimos distinctio
            facere et saepe in eveniet quod qui amet ea debitis perspiciatis
            ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sapiente ab minima accusamus rerum optio voluptas id voluptates
            voluptate maiores saepe placeat dolores veritatis quod ipsa,
            delectus distinctio odit alias asperiores!Lorem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sed saepe eaque maiores rem,
            dolorem, hic voluptate fugit beatae tempora reiciendis natus autem
            accusamus consectetur suscipit quod. Modi odio nam possimus?
          </p>
          <div className="text-center my-5">
            <a
              href="index.html"
              className="inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg transition-colors duration-300 hover:bg-blue-700"
            >
              Recent blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
