import "./GroupUsers.css";
import GroupChatList from "./GroupChatList/GroupChatList";
import { useContext } from "react";
import { AllContext } from "../../AllContext";

export default function GroupUsers({ viewingGroup }) {
  const {theme} = useContext(AllContext);

  if (viewingGroup.users) {
    const mappedGroups = viewingGroup.users.map((member) => {
      return (
        <GroupChatList
          key={member.username}
          username={member.username}
          image={member.image}
        />
      );
    });

    return (
      <div id={"group_user_list_" + theme}>
        <div>
          <h2 id={"group_user_title_" + theme}> Members</h2>
        </div>
        <div className="overflow">{mappedGroups}</div>
      </div>
    );
  }

  return (
    <div id="friends_nav">
      <div>
        <h2 id="friends_title"> Loading</h2>
      </div>
    </div>
  );
}
