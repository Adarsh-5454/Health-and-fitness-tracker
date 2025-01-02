import React from "react";

const Readmoreblogs = () => {
  return (
    <div>
      {/* <!-- BLOG CONTAINER --> */}
      <div className="blog-container">
        <img className="blogimg" src="images/blog-1.jpeg" alt="" />
        <h3 className="blog-head">
          What Has Happened to All of the Web Design Ideas?
        </h3>
        <p className="blog-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non
          consequatur modi ab, ratione excepturi earum dignissimos distinctio
          facere et saepe in eveniet quod qui amet ea debitis perspiciatis
          ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sapiente ab minima accusamus rerum optio voluptas id voluptates
          voluptate maiores saepe placeat dolores veritatis quod ipsa, delectus
          distinctio odit alias asperiores!Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sed saepe eaque maiores rem, dolorem,
          hic voluptate fugit beatae tempora reiciendis natus autem accusamus
          consectetur suscipit quod. Modi odio nam possimus?
        </p>
        <div className="footer">
          <a href="index.html">Recent blogs</a>
        </div>
      </div>
    </div>
  );
};

export default Readmoreblogs;






/* Blog Container */
.blog-container {
  max-width: 800px; /* Limit the width for better readability */
  margin: 20px auto; /* Center the container */
  background-color: #ffffff; /* White background for the blog */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  overflow: hidden; /* Prevent overflow */
}

/* Blog Image */
.blogimg {
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
  border-top-left-radius: 8px; /* Rounded corners */
  border-top-right-radius: 8px; /* Rounded corners */
}

/* Blog Headings */
.blog-head {
  font-size: 2em; /* Larger font size for the heading */
  color: #333; /* Darker text color */
  margin: 20px; /* Margin around the heading */
  text-align: center; /* Center the heading */
}

/* Blog Text */
.blog-text {
  font-size: 1.1em; /* Slightly larger text for readability */
  line-height: 1.6; /* Increased line height for better readability */
  color: #555; /* Softer text color */
  margin: 20px; /* Margin around the text */
}

/* Footer Styles */
.footer {
  text-align: center; /* Center the footer content */
  margin: 20px; /* Margin around the footer */
}

/* Button Styles */
.footer a {
  display: inline-block; /* Make it a block for padding */
  padding: 10px 20px; /* Padding for the button */
  background-color: #007bff; /* Primary button color */
  color: #ffffff; /* White text color */
  text-decoration: none; /* Remove underline */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s; /* Smooth transition */
}

.footer a:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

/* Responsive Design */
@media (max-width: 600px) {
  .blog-head {
    font-size: 1.5em; /* Smaller heading on mobile */
  }

  .blog-text {
    font-size: 1em; /* Smaller text on mobile */
  }
}
