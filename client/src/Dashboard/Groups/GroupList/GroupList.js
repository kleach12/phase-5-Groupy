import "./GroupList.css";
import pattern from "./pattern.svg";
import pattern2 from "./pattern_2.svg"

export default function GroupList() {
  
  return (
    <div id="group_card">
      <div className="card" style={{backgroundImage: `url(${pattern2})`}} >
        <div className="inner">
          <h2 className="title">
            Mit 117 Sachen durch Klugheimschen Basaltgebirge
          </h2>
        </div>
      </div>
    </div>
  );
}
