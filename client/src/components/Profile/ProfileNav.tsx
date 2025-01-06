import React from "react";
import Button from "../Button/Button";

const ProfileNav = ({isProfile,setIsProfile}) => {
   
  const handleEditProfile = () => {
    setIsProfile(true);
  };
  return (
    <>
      <div className="flex flex-col mt-5  p-5 w-56 h-screen border-e-2 border-slate-600">
        <div className="w-36 mx-auto h-36 bg-black rounded-full bg-cover bg-center mb-8"></div>
        <span onClick={handleEditProfile}>
          <Button label={"Edit Profile"}  />
        </span>
        <Button label={"Security"} />
        <Button label={"Role"} />
        <Button label={"Logout"} />
      </div>
    </>
  );
};

export default ProfileNav;
