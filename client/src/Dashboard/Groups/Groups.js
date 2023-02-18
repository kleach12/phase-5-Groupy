import "./Groups.css";
import GroupList from "./GroupList/GroupList";
import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import {BsPlusLg} from "react-icons/bs"

export default function Groups() {
  return (
    <div id="groups">
      <div id="groups_top">
        <h2 id="groups_title"> Groups </h2>
        <Dropdown >
          <Dropdown.Toggle id="dropdown-basic" className="dropdown-dash_button ">
            <BsPlusLg/>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-custom">
            <Dropdown.Item className="dropdown-item-custom">Create Group</Dropdown.Item>
            <Dropdown.Item className="dropdown-item-custom">Join Group</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <GroupList />
    </div>
  );
}
