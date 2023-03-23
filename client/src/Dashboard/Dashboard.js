import "./Dashboard.css";
import "./DashNav/DashNav";
import DashNav from "./DashNav/DashNav";
import Groups from "./Groups/Groups";
import FriendsNav from "./FriendsNav/FriendsNav";

export default function Dashboard({
  user,
  setUser,
  signedIn,
  setSignedIn,
  inGroup,
  setInGroup,
  setGroupSearch,
  groupSearch,
}) {
  // Add a modal for user who just signed up so they have an Idea of what they are doing
  return (
    <div id="dashboard">
      <div id="bg_background"></div>
      <DashNav
        user={user}
        setUser={setUser}
        signedIn={signedIn}
        setSignedIn={setSignedIn}
      />
      <Groups inGroup={inGroup} setInGroup={setInGroup} groupSearch={groupSearch} setGroupSearch = {setGroupSearch} />
      <FriendsNav />
    </div>
  );
}
