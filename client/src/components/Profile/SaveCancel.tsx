import React from "react";
import Button from "../Button/Button";

const SaveCancel = () => {
  return (
    <div className="flex justify-between w-6/12 ">
      <Button label={"Save"} />
      <Button label={"Cancel"} />
    </div>
  );
};

export default SaveCancel;
