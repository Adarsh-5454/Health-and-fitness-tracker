import Button from "../Button/Button";

const ProfileNav = ({
   setProfileId,
}: {
   setProfileId: (id: number) => void;
}) => {
   const handleEditProfile = (id: number) => {
      setProfileId(id);
   };

   return (
      <>
         <div className="flex flex-col pt-8  p-2 sm:pt-8  am:p-5 w-3/12 am:w-56 h-screen ">
            <div className="w-12 h-12 sm:w-36 mx-auto sm:h-36 bg-black rounded-full bg-cover bg-center mb-4 am:mb-8"></div>
            <Button label={"Edit "} onClick={() => handleEditProfile(0)} />
            <Button label={"Security"} onClick={() => handleEditProfile(1)} />
            <Button label={"Role"} onClick={() => handleEditProfile(2)} />
            <Button label={"Logout"} />
         </div>
      </>
   );
};

export default ProfileNav;
