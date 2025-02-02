import React from "react";
import LabelInput from "../Profile/EditProfile/LabelInput";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const CreateBlog = () => {
  return (
    <>
      <div className="create-blog w-screen flex justify-center items-center h-screen   ">
        <div className=" md:w-[1000px]  px:4 md:px-24 md:mt-16  shadow-lg pb-5">
          <h2 className="text-tertiary-dark text-3xl font-medium text-center mb-5">
            Create Your Blogs
          </h2>
          <div className=" md:flex md:flex-row gap-4 flex-col ">
            <LabelInput
              type={"text"}
              placeholder={"Enter your title"}
              label={"Title"}
            />

            <LabelInput
              type={"text"}
              placeholder={"Enter your description"}
              label={"Description"}
            />
          </div>

          <div className="md:flex md:flex-row gap-4 flex-col ">
            <LabelInput
              type={"text"}
              placeholder={"Enter your name"}
              label={"author"}
            />

            <LabelInput type={"file"} placeholder={""} label={"Image"} />
          </div>
          <div className="md:flex md:flex-row gap-4 flex-col ">
            <LabelInput
              type={"text"}
              placeholder={"Category"}
              label={"Category"}
            />

            <LabelInput type={"date"} placeholder={""} label={"date"} />
          </div>
          <div className="flex justify-end gap-4 mt-4 px-5 md:px-0 ">
            <Button label="Create" />
            <NavLink
              to="/blogs"
              className="text-black hover:text-red-500 transition-all duration-300"
            >
              <Button label="Back" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
