import "./GroupPage.css";
import GroupList from "../Dashboard/Groups/GroupList/GroupList";
import { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";

export default function GroupPage({groupSearch, setGroupSearch}) {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetch("/groups")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setGroups(data);
        }
      });
  }, []);
  console.log(groups);

  if(groupSearch === false){
    return(<Navigate to='/dashboard'/>)
  }

  if (groups.length > 0) {
    return (
      <div id = "group_page">
        <div id = 'filter'>
        <BsFillArrowLeftSquareFill id = "back_btn" onClick={() => setGroupSearch(false)}/>
        <label id = 'filter_label'>Search</label> 
        <input type='text' id = 'group_filter'/>
        </div>
        <div id = 'list'>
        {groups.map((group, index) => {
          return (
            <GroupList
              key={group.name}
              groupName={group.name}
              groupImage = {group.image}
              // numOfUsers={group.numOfUsers}
              // users={group.users}
              index={index}
              // setInGroup={setInGroup}
            />
          );
        })}
        </div>
      </div>
    );
  }
}
