import "./Groups.css";
import GroupList from "./GroupList/GroupList";
import Dropdown from "react-bootstrap/Dropdown";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import NewGroup from "./NewGroup/NewGroup";

export default function Groups({
  inGroup,
  setInGroup,
  setGroupSearch,
  groupSearch,
  user,
  setViewingGroup,
}) {
  const [show, setShow] = useState(false);

  if (inGroup) {
    return <Navigate to="/GroupRoom" />;
  }

  if (groupSearch) {
    return <Navigate to="/GroupPage" />;
  }
  if (user) {
    const mappedGroups = user.groups.map((group, index) => {
      return (
        <GroupList
          key={group.name}
          index={index}
          setInGroup={setInGroup}
          setViewingGroup={setViewingGroup}
          group={group}
        />
      );
    });

    return (
      <div id="groups">
        <div id="groups_top">
          <h2 id="groups_title"> Groups </h2>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="dropdown-dash_button "
            >
              <BsPlusLg />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item
                className="dropdown-item-custom"
                onClick={() => setShow(true)}
              >
                Create Group
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item-custom"
                onClick={() => setGroupSearch(true)}
              >
                Join Group
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="overflow">
          {mappedGroups}
          <NewGroup show={show} setShow={setShow} />
        </div>
      </div>
    );
  }
}
