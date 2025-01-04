import React from "react";
import Input from "../Inputbox/Input";
import Button from "../Button/Button";
import LabelInput from "./EditProfile/LabelInput";
import SaveCancel from "./SaveCancel";

const Security = () => {
  return (
    <>
      <div className="flex flex-col  w-full px-36">
        <div className="text-center text-3xl font-serif mb-12 ">
          <h2>CHANGE PASSWORD</h2>
        </div>
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
