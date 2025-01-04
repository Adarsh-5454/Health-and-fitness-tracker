import React from "react";
import Input from "../../Inputbox/Input";
import LabelInput from "./LabelInput";
import Button from "../../Button/Button";
import SaveCancel from "../SaveCancel";

const EditProfile = () => {
  return (
    <>
      <div className="flex flex-col items-center  w-full px-36 ">
        <h2>EDIT PROFILE</h2>
        <div className="flex gap-2 w-full">
          <LabelInput
            placeholder={"User Name"}
            type={"text"}
            label={" User Name"}
          />
          <LabelInput
            placeholder={"Full Name"}
            type={"text"}
            label={" Full Name"}
          />
        </div>
        <LabelInput
          placeholder={"Email or phone number"}
          type={"text"}
          label={" Email or phone number"}
        />
        <LabelInput
          placeholder={"Date of Birth"}
          type={"date"}
          label={" Date of Birth"}
        />
        <LabelInput placeholder={"Address"} type={"text"} label={"Address"} />
        <div className="flex gap-2 w-full">
          <LabelInput placeholder={"City "} type={"text"} label={"City"} />
          <LabelInput placeholder={"State "} type={"text"} label={"State"} />
        </div>
        <LabelInput placeholder={"Country"} type={"text"} label={"Country"} />
        <LabelInput placeholder={"Pincode"} type={"number"} label={"Pincode"} />
        <SaveCancel />
      </div>
    </>
  );
};

export default EditProfile;
