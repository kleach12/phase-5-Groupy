import "./GroupList.css";
// import { Navigate } from "react-router-dom";

export default function GroupList({ groupName, numOfUsers, users ,index,setInGroup}) {
  const mappedUsersPic = users.map((user) => <img key = {user.username}src = {user.prof_pic} alt = {user.username} className = 'card_prof_pic'/> )
  // need to make user authentication so I can move forward onClick={() => <Navigate to = {"/GroupRoom"}/>
  return (
    <div className="group_card" onClick={() => setInGroup(true)}>
      <div  className={index === 0 ? 'first_card_group' : 'card_group'}>
        <div className="left_card">
          <h2 className="group_title">{groupName}</h2>
          <h3 className="num_mem"> Members: {numOfUsers}</h3>
        </div>
        <div className="right_card">
         {mappedUsersPic}
        </div>
      </div>
      <div></div>
    </div>
  );
}
