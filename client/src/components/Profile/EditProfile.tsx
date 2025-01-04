import React from "react";
import Input from "../Inputbox/Input";

const EditProfile = () => {
   return (
      <>
         <div className="flex flex-col  w-full px-36 ">
            <div>
               <div>
                  <label> User Name</label>
                  <Input placeholder={"User Name"} type={"text"} />
               </div>
               <div>
                  <label> User Name</label>
                  <Input placeholder={" Full Name"} type={"text"} />
               </div>
            </div>
            <Input placeholder={" Email or phone number"} type={"text"} />
            <Input placeholder={"Address"} type={"text"} />
            <Input placeholder={"City"} type={"text"} />
            <Input placeholder={"State"} type={"text"} />
            <Input placeholder={"Country"} type={"text"} />
            <Input placeholder={"Pincode"} type={"text"} />
         </div>
      </>
   );
};

export default EditProfile;
