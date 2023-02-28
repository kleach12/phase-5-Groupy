import "./DashNav.css";
import { Navigate } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { useState } from "react";
import Avatar from "react-avatar";
// import Button from "react-bootstrap/Button";

export default function DashNav({ user, setUser, signedIn, setSignedIn }) {
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
        src={user.profile_picture}
        name={user.full_name}
      />
      <div>
        <h3 id="at"> @{user.username}</h3>
      </div>

      <div>
        <h3 id="at"> Bio </h3>
      </div>
      <div className="social_icons">
        <BsInstagram className="socials" />
        <BsFacebook className="socials" />
      </div>
      <h3 className="dashnav_text"> Edit Profile </h3>
      <h3 className="dashnav_text" onClick={handleSignOut}>
        Sign out
      </h3>
    </div>
  );
}
