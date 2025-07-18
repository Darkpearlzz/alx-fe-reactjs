import { useContext } from "react";
import UserInfo from "./components/UserInfo";
import UserContext from "./components/UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return <UserInfo userData={userData} />;
}

export default UserProfile;
