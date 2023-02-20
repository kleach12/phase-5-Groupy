import "./Groups.css";
import GroupList from "./GroupList/GroupList";
import Dropdown from "react-bootstrap/Dropdown";
import { BsPlusLg } from "react-icons/bs";

export default function Groups() {
  const noUserGroups = [
    {
      groupName: "San Diego's Finest",
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
    },
    {
      groupName: "Sac Town Frenchies",
      numOfUsers: 2,
      users: [
        {
          username: "TT23",
          prof_pic:
            "https://barkwiki.com/images/frenchie.jpg",
        },
        {
          username: "DD29",
          prof_pic:
            "https://barkwiki.com/images/frenchie.jpg",
        },
      ],
    }
  ];

  const mappedGroups = (
    noUserGroups.map((group) => {
     return (<GroupList key = {group.groupName} groupName ={group.groupName} numOfUsers = {group.numOfUsers} users = {group.users}/>)
    })
  )
  return (
    <div id="groups">
      <div id="groups_top">
        <h2 id="groups_title"> Groups </h2>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="dropdown-dash_button "
          >
            <BsPlusLg id="add_button" />
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
      {mappedGroups}
      {/* <GroupList /> */}
    </div>
  );
}
