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

  console.log(noUserFriendsArr);
  // const noUserFriends = [
  //   {
  //     userName: "Kleach12",
  //     prof_pic:
  //       "https://preview.redd.it/oc4d5zck25f71.png?width=516&format=png&auto=webp&s=7973d616398483a47a711f373339e0da970b30a6",
  //   },
  //   {
  //     userName: "CC2714",
  //     prof_pic:
  //       "https://images.wagwalkingweb.com/media/breed/chihuahua/appearance/chihuahua.png",
  //   },
  //   {
  //     userName: "TT23",
  //     prof_pic: "https://barkwiki.com/images/frenchie.jpg",
  //   },
  //   {
  //     userName: "DD29",
  //     prof_pic: "https://barkwiki.com/images/frenchie.jpg",
  //   },
  // ];

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
