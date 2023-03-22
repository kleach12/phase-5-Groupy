import "./GroupPage.css";
import GroupList from "../Dashboard/Groups/GroupList/GroupList";
import { useEffect, useState } from "react";
export default function GroupPage() {
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

  if (groups.length > 0) {
    return (
      <div>
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
    );
  }
}
