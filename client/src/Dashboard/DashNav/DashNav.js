import "./DashNav.css";
import { Navigate } from "react-router-dom";
import { BsInstagram, BsFacebook,BsTwitter} from "react-icons/bs";
import { FaTiktok }from "react-icons/fa";
import { useState } from "react";
import Avatar from "react-avatar";
import EditModal from "./EditModal/EditModal";
import PictureModal from "./PictureModal/PictureModal";
// import Button from "react-bootstrap/Button";

export default function DashNav({ user, setUser, signedIn, setSignedIn }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showPictureEdit, setShowPicture] = useState(false)
  const [username, setUsername] = useState("");

  function handleSignOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setSignedIn(false);
      setUser(null);
      console.log(user.profile_picture);
      console.log(signedIn);
    });
  }

  if (signedIn === false) {
    return <Navigate to="/" />;
  }

  return (
    <div id="dash_nav">
      <h1 id="title"> IRL </h1>
      {/* {userProfilePic} */}
      {/* <img id="profile_pic" src={user.profile_picture} alt="profile pic" /> */}
      <Avatar
        className="profile_pic"
        src={user.image}
        name={user.full_name}
        onClick={() => setShowPicture(true)}
      />
      <PictureModal
      showPictureEdit={showPictureEdit}
      setShowPicture={setShowPicture}
      />
      <div>
        <h3 id="at"> @{user.username}</h3>
      </div>

      <div>
        <h3 id="at"> Bio </h3>
      </div>
      <div className="social_icons">
        <BsInstagram className="socials" href="" />
        <BsFacebook className="socials" href="" />
        <BsTwitter className="socials" href=""/>
        <FaTiktok className="socials" href=""/>
      </div>
      <h3 className="dashnav_text" onClick={() => setShowEdit(true)}> Edit Profile </h3>
      <EditModal
            user={user}
            setUser={setUser}
            showEdit = {showEdit}
            setShowEdit ={setShowEdit}
          />
      <h3 className="dashnav_text" onClick={handleSignOut}>
        Sign out
      </h3>
    </div>
  );
}
