import React from "react";

const Button = ({ label }) => {
  return (
    <>
      <button className="py-2 px-5  mb-6 text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500">
        {label}
      </button>
    </>
  );
};

export default Button;
