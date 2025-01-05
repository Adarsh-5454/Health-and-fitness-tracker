import React from "react";
import Button from "../Button/Button";

const ProfileNav = ({
  setIsProfile,
  isProfile,
  isSecurity,
  setIsSecurity,
  isRole,
  setIsRole,
}) => {
  const handleEditProfile = () => {
    setIsProfile(true);
  };
  const handleSecurity = () => {
    setIsSecurity(true);
  };
  const handleRole = () => {
    setIsRole(true);
  };
  return (
    <>
      <div className="flex flex-col mt-5  p-5 w-56 h-screen border-e-2 border-slate-600">
        <div className="w-36 mx-auto h-36 bg-black rounded-full bg-cover bg-center mb-8"></div>
        <span onClick={handleEditProfile}>
          <Button label={"Edit Profile"} />
        </span>
        <span onClick={handleSecurity}>
          <Button label={"Security"} />
        </span>
        <span onClick={handleRole}>
          <Button label={"Role"} />
        </span>
        <Button label={"Logout"} />
      </div>
    </>
  );
};

export default ProfileNav;
