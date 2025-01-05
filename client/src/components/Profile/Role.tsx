import React from "react";
import LabelInput from "./EditProfile/LabelInput";
import Button from "../Button/Button";
import SaveCancel from "./SaveCancel";

const Role = () => {
  return (
    <>
      <div className="role items-center  mt-5 px-36 w-full h-screen ">
        <div className="text-center text-3xl font-serif mb-12 ">
          <h2>ROLE</h2>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label> Role</label>
          <select className="row-start-1 col-start-1 bg-slate-50  p-2 rounded-md  ...">
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
        <div className="flex gap-2 w-full">
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
        <SaveCancel />
      </div>
    </>
  );
};

export default Role;
