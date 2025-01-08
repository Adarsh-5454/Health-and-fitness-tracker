import React from "react";
import Input from "../Inputbox/Input";
import Button from "../Button/Button";
import LabelInput from "./EditProfile/LabelInput";
import SaveCancel from "./SaveCancel";

const Security = () => {
   return (
      <>
         <div className="flex flex-col items-center  pt-8 w-full px-36">
            <h2 className="text-center text-3xl font-serif mb-12 ">
               CHANGE PASSWORD
            </h2>

            <LabelInput
               placeholder={"Enter Current Password"}
               type={"text"}
               label={"Current Password"}
            />
            <div className="flex gap-2 w-full">
               <LabelInput
                  placeholder={"Enter New Password "}
                  type={"text"}
                  label={"Enter New Password"}
               />
               <LabelInput
                  placeholder={"Confirm Password "}
                  type={"text"}
                  label={"Confirm Password"}
               />
            </div>

            <SaveCancel />
         </div>
      </>
   );
};

export default Security;
