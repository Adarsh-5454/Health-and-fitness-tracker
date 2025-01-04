import React from "react";
import Button from "../Button/Button";

const ProfileNav = () => {
   return (
      <>
         <div className="flex flex-col items-center p-5 w-56 h-screen border-e-2 border-slate-600">
            <div className="w-36 h-36 bg-black rounded-full bg-cover bg-center mb-8"></div>
            <Button label={"Edit Profile"} />
            <Button label={"Security"} />
            <Button label={"Role"} />
            <Button label={"Logout"} />
         </div>
      </>
   );
};

export default ProfileNav;
