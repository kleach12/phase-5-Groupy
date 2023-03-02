import "./DashNav.css";
import { Navigate } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import Avatar from "react-avatar";
import EditModal from "./EditModal/EditModal";
import PictureModal from "./PictureModal/PictureModal";

export default function DashNav({ user, setUser, signedIn, setSignedIn }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showPictureEdit, setShowPicture] = useState(false);
  console.log(user);
  function handleSignOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setSignedIn(false);
      setUser(null);
    });
  }

  if (signedIn === false) {
    return <Navigate to="/" />;
  }

  return (
    <div id="dash_nav">
      <h1 id="title"> IRL </h1>
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
      <a href={user.insta ? user.insta : null} target="_blank" rel="noreferrer"> <BsInstagram className="socials"  /> </a>
      <a href={user.facebook ? user.facebook : null} target="_blank"rel="noreferrer"> <BsFacebook className="socials"  /> </a>
      <a href={user.twitter ? user.twitter : null} target="_blank" rel="noreferrer"> <BsTwitter className="socials"/> </a>
      <a href={user.tiktok ? user.tiktok : null} target="_blank" rel="noreferrer"> <FaTiktok className="socials" /> </a>
      </div>
      <h3 className="dashnav_text" onClick={() => setShowEdit(true)}>
        {" "}
        Edit Profile{" "}
      </h3>
      <EditModal
        user={user}
        setUser={setUser}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
      />
      <h3 className="dashnav_text" onClick={handleSignOut}>
        Sign out
      </h3>
    </div>
  );
}
