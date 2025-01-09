import React from "react";
import Input from "../Inputbox/Input";
import Button from "../Button/Button";
import LabelInput from "./EditProfile/LabelInput";
import SaveCancel from "./SaveCancel";

const Security = () => {
   return (
      <>
         <div className="flex flex-col items-center pt-6 sm:pt-8  w-full px-4  sm:px-36">
            <h2 className="text-center text-xl sm:text-3xl font-serif mb-3 sm:mb-12 ">
               CHANGE PASSWORD
            </h2>

            <LabelInput
               placeholder={"Enter Current Password"}
               type={"text"}
               label={"Current Password"}
            />
            <div className="flex flex-col  sm:flex sm:flex-row sm:gap-2 w-full">
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
