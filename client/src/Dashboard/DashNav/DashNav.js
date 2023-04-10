import "./DashNav.css";
import { Navigate } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import Avatar from "react-avatar";
import EditModal from "./EditModal/EditModal";
// import PictureModal from "./PictureModal/PictureModal";
import { BsFillTrashFill } from "react-icons/bs";
export default function DashNav({
  user,
  setUser,
  signedIn,
  setSignedIn,
  deleteUser,
  setDeleteUser,
}) {
  const [showEdit, setShowEdit] = useState(false);
  // const [showPictureEdit, setShowPicture] = useState(false);
  function handleSignOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      setSignedIn(false);
      setUser(null);
    });
  }

  if (signedIn === false) {
    return <Navigate to="/" />;
  }

  if (deleteUser === true) {
    return <Navigate to="/DeleteAccount" />;
  }

  return (
    <div id="dash_nav">
      <h1 id="title"> IRL </h1>
      <Avatar
        // round={true}
        className="profile_pic"
        src={user.image}
        name={user.full_name}
        // onClick={() => setShowPicture(true)}
      />
      <div>
        <h3 id="at"> @{user.username}</h3>
      </div>

      <div className="grow">
        <h3 id="bio"> {user.bio} </h3>
      </div>
      <div className="social_icons">
        <a
          href={user.insta ? user.insta : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsInstagram className="socials" />{" "}
        </a>
        <a
          href={user.facebook ? user.facebook : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsFacebook className="socials" />{" "}
        </a>
        <a
          href={user.twitter ? user.twitter : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsTwitter className="socials" />{" "}
        </a>
        <a
          href={user.tiktok ? user.tiktok : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaTiktok className="socials" />{" "}
        </a>
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
      <BsFillTrashFill id="delete_btn" onClick={() => setDeleteUser(true)} />
    </div>
  );
}
