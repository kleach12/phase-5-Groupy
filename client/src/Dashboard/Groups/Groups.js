import "./Groups.css";
import GroupList from "./GroupList/GroupList";
import Button from "react-bootstrap/Button";

export default function Groups() {
  return (
    <div id="groups">
      <div>
        <h2 id = "groups_title"> Groups</h2>
        <Button id="create_btn" className="btn-dash_button">
          Create Group
        </Button>
        <Button id="join_btn" className="btn-dash_button">
          Join Group
        </Button>
      </div>
      <GroupList />
    </div>
  );
}
