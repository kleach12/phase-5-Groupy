import { useState } from "react";
import "./JoinGroupList.css";
import JoinModal from "./JoinModal/JoinModal";
// import { Navigate } from "react-router-dom";

export default function JoinGroupList({
  groupName,
  numOfUsers,
  groupId,
  users,
  index,
}) {
  // const mappedUsersPic = users.map((user) => <img key = {user.username}src = {user.prof_pic} alt = {user.username} className = 'card_prof_pic'/> )
  // need to make user authentication so I can move forward onClick={() => <Navigate to = {"/GroupRoom"}/>
  const [showJoinModal, SetShowJoinModal] = useState(false);
  return (
    <div className="group_card" >
      <div className={"card_group"} onClick={() => SetShowJoinModal(true)}>
        <div className="left_card">
          <h2 className="group_title">{groupName}</h2>
          <h3 className="num_mem"> Members: {numOfUsers}</h3>
        </div>
        <div className="right_card"></div>
      </div>
      <JoinModal showJoinModal={showJoinModal} SetShowJoinModal={SetShowJoinModal} groupName = {groupName} groupId = {groupId} />
    </div>
  );
}
