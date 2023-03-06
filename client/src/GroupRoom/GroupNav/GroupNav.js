import "./GroupNav.css";
import Avatar from "react-avatar";
import { Navigate } from "react-router-dom";
import {
  BsFillArrowLeftSquareFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function GroupNav({ inGroup, setInGroup }) {
  if (inGroup === false) {
    return <Navigate to="/Dashboard" />;
  }
  return (
    <div id="group_nav">
      <Avatar
        className="profile_pic"
        // src={user.image}
        name="Group 1"
        // onClick={() => setShowPicture(true)}
      />
      {/* <PictureModal
        showPictureEdit={showPictureEdit}
        setShowPicture={setShowPicture}
      /> */}
      <div>
        <h3 id="at"> </h3>
      </div>

      
        <span id="group_bio"> Bio </span>

      <div className="social_icons">
        <a
          // href={user.insta ? user.insta : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsInstagram className="socials" />{" "}
        </a>
        <a
          // href={user.facebook ? user.facebook : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsFacebook className="socials" />{" "}
        </a>
        <a
          // href={user.twitter ? user.twitter : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsTwitter className="socials" />{" "}
        </a>
        <a
          // href={user.tiktok ? user.tiktok : null}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaTiktok className="socials" />{" "}
        </a>
      </div>
      <button className="exit_group"  onClick={() => setInGroup(false)}
      > Leave </button>
      {/* <BsFillArrowLeftSquareFill className="exit_button"/> */}
    </div>
  );
}
