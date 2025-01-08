import { useState } from "react";
import EditProfile from "../components/Profile/EditProfile/EditProfile";
import ProfileNav from "../components/Profile/ProfileNav";
import Role from "../components/Profile/Role";
import Security from "../components/Profile/Security";

const Profile = () => {
   const [profileId, setProfileId] = useState(0);
   //   const [isSecurity, setIsSecurity] = useState(false);
   //   const [isRole, setIsRole] = useState(false);
   return (
      <>
         <div className="flex  mt-10 px-32 w-full">
            <ProfileNav setProfileId={setProfileId} />
            <div className="ms-5  border-s-4 border-slate-700 w-10/12 max-h-screen overflow-y-scroll no-scrollbar">
               {profileId === 0 && <EditProfile />}
               {profileId === 1 && <Security />}
               {profileId === 2 && <Role />}
            </div>
         </div>
      </>
   );
};

export default Profile;
