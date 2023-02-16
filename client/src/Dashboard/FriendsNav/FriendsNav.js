import "./FriendsNav.css";
import FriendsList from "./FriendsList/FriendsList";

export default function FriendsNav() {
  return (
    <div id="friends_nav">
      <div>
      <h2 id="friends_title"> Friends</h2>
      </div>
        <FriendsList />
    </div>
  );
}
