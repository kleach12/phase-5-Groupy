import "./Groups.css";
import GroupList from "./GroupList/GroupList";
import Dropdown from "react-bootstrap/Dropdown";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Groups({inGroup, setInGroup}) {
  // const [inGroup, setInGroup] = useState(false)
  const noUserGroupsArr = [];
  console.log(inGroup)

  for (let i = 0; i < 5; i++) {
    noUserGroupsArr.push({
      groupName: `Groups_${i}`,
      numOfUsers: 2,
      users: [
        {
          username: "Kleach12",
          prof_pic:
            "https://preview.redd.it/oc4d5zck25f71.png?width=516&format=png&auto=webp&s=7973d616398483a47a711f373339e0da970b30a6",
        },
        {
          username: "CC2714",
          prof_pic:
            "https://images.wagwalkingweb.com/media/breed/chihuahua/appearance/chihuahua.png",
        },
      ],
    });
  }


  const mappedGroups = noUserGroupsArr.map((group, index) => {
    return (
      <GroupList
        key={group.groupName}
        groupName={group.groupName}
        numOfUsers={group.numOfUsers}
        users={group.users}
        index = {index}
        setInGroup ={setInGroup}
      />
    );
  });

  if (inGroup){
   return <Navigate to = '/GroupRoom'/>
  }

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
            <Dropdown.Item className="dropdown-item-custom">
              Create Group
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item-custom">
              Join Group
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="overflow">
      {mappedGroups}
      </div>
    </div>
  );
}
