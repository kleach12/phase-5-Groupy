import "./Dashboard.css";
import "./DashNav/DashNav";
import DashNav from "./DashNav/DashNav";
import Groups from "./Groups/Groups";
import FriendsNav from "./FriendsNav/FriendsNav";
import MobileDashNav from "./MobileDashNav/MobileDashNav";
import { useContext } from "react";
import { AllContext } from "../AllContext";

export default function Dashboard({

}) {
const {windowSize} = useContext(AllContext)
if (windowSize[0] < 1250){
  return (
    <div id="dashboard">
      <div id="bg_background"></div>
      {/* <DashNav /> */}
      <Groups/>
      {/* Will comeback to this in the future <FriendsNav /> */}
    </div>
  );
}

  return (
    <div id="dashboard">
      <div id="bg_background"></div>
      <DashNav />
      <Groups/>
      {/* Will comeback to this in the future <FriendsNav /> */}
    </div>
  );
}
