import "./FriendsNav.css";
import FriendsList from "./FriendsList/FriendsList";
import { ImEarth } from "react-icons/im";

export default function FriendsNav() {
  const noUserFriendsArr = [];
  for (let i = 0; i < 20; i++) {
    noUserFriendsArr.push({
      userName: `User_${i}`,
      profPic:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
    });
  }
  const mappedGroups = noUserFriendsArr.map((friend) => {
    return (
      <FriendsList
        key={friend.userName}
        userName={friend.userName}
        profPic={friend.profPic}
        
      />
    );
  });

  return (
    <div id="friends_nav">
      <div>
        <h2 id="friends_title"> Friends</h2>
      </div>
      <div className = "overflow">{mappedGroups}</div>
    </div>
  );
}
