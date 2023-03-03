import './GroupUsers.css'
import GroupChatList from './GroupChatList/GroupChatList';
export default function GroupUsers(){
  const noUserFriendsArr = [];
  for (let i = 0; i < 20; i++) {
    noUserFriendsArr.push({
      userName: `User_${i}`,
      profPic:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
    });
  }
  const mappedGroups = noUserFriendsArr.map((member) => {
    return (
      <GroupChatList
        key={member.userName}
        userName={member.userName}
        profPic={member.profPic}
        
      />
    );
  });

  return (
    <div id="friends_nav">
      <div>
        <h2 id="friends_title"> Members</h2>
      </div>
      <div className = "overflow">{mappedGroups}</div>
    </div>
  );
}