import React from "react";
import LabelInput from "./EditProfile/LabelInput";
import Button from "../Button/Button";
import SaveCancel from "./SaveCancel";

const Role = () => {
  return (
    <>
      <div className="flex flex-col mt-8 w-full px-48 ">
        <div className="text-center text-3xl font-serif mb-12  ">
          <h2>ROLE</h2>
        </div>
        <div className="flex flex-col gap-2  ">
          <label> Role</label>
          <select className="  p-2 rounded-md">
            <option>Doctor</option>
            <option>Trainer</option>
            <option>Nutritionist</option>
          </select>
          <LabelInput
            placeholder={"Enter your specification"}
            type={"text"}
            label={"Specifications"}
          />
        </div>
        <div className="flex gap-2 ">
          <LabelInput
            placeholder={""}
            type={"file"}
            label={"Add your Certificate"}
          />
          <LabelInput
            placeholder={""}
            type={"file"}
            label={"Add your Experience"}
          />
        </div>
        <div className="">
          <SaveCancel />
        </div>
      </div>
    </>
  );
};

export default Role;
