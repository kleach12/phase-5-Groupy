import './ViewingUserDash.css'
import DashNav from '../Dashboard/DashNav/DashNav';
import Groups from '../Dashboard/Groups/Groups';
// import DashNav from "./DashNav/DashNav";
// import Groups from "./Groups/Groups";
// import FriendsNav from "./FriendsNav/FriendsNav";
// import { useContext } from "react";

export default function ViewingUserDash({

}) {
  // Add a modal for user who just signed up so they have an Idea of what they are doing

  return (
    <div id="dashboard">
      <div id="bg_background"></div>
      <DashNav />
      <Groups/>
      {/* Will comeback to this in the future <FriendsNav /> */}
    </div>
  );
}