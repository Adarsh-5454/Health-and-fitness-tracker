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
      <div className="flex  gap-4 mt-8 px-32">
        <ProfileNav setProfileId={setProfileId} />
        <div className="flex flex-col gap-4">
          {profileId === 0 && <EditProfile />}
          {profileId === 1 && <Security />}
          {profileId === 2 && <Role />}
        </div>
      </div>
    </>
  );
};

export default Profile;
