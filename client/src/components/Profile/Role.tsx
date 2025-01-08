import React from "react";
import LabelInput from "./EditProfile/LabelInput";
import Button from "../Button/Button";
import SaveCancel from "./SaveCancel";

const Role = () => {
   return (
      <>
         <div className="flex flex-col items-center  pt-8  w-full px-36 ">
            <h2 className="text-center text-3xl font-serif mb-12">ROLE</h2>

            <div className="flex flex-col gap-2  w-full">
               <label> Role</label>
               <select className=" p-3 rounded-md w-full">
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
            <div className="flex gap-2">
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
