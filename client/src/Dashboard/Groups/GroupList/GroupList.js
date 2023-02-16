import "./GroupList.css";
import pattern2 from "./pattern_2.svg";

export default function GroupList() {
  return (
    <div id="group_card">
      <div className="card" style={{ backgroundImage: `url(${pattern2})` }}>
        <div className="inner">
          <h2 className="title">Group Name</h2>
          <h3> group size</h3>
        </div>
      </div>
    </div>
  );
}
