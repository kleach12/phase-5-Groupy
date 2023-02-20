import "./GroupList.css";

export default function GroupList({ groupName, numOfUsers, users }) {
  const mappedUsersPic = users.map((user) => <img key = {user.username}src = {user.prof_pic} alt = {user.username} className = 'card_prof_pic'/> )
  return (
    <div id="group_card">
      <div className="card_group">
        <div className="left_card">
          <h2 className="title">{groupName}</h2>
          <h3> Members: {numOfUsers}</h3>
        </div>
        <div className="right_card">
         {mappedUsersPic}
        </div>
      </div>
      <div></div>
    </div>
  );
}
