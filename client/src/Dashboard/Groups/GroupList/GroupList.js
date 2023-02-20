import "./GroupList.css";

export default function GroupList() {
  return (
    <div id="group_card">
      <div className="card_group">
        <div className="left_card">
          <h2 className="title">Group Name</h2>
          <h3> group size</h3>
        </div>
        <div className="right_card">
          <h2> User pictures</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
