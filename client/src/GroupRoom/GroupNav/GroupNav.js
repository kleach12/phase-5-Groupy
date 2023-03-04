import './GroupNav.css'
 import Avatar from 'react-avatar';
import { Navigate } from 'react-router-dom';
export default function GroupNav({inGroup, setInGroup}){

  if(inGroup === false){
   return <Navigate to = '/Dashboard'/>
  }
  return (
    <div id="group_nav">
      <Avatar
        className="profile_pic"
        // src={user.image}
        // name={user.full_name}
        // onClick={() => setShowPicture(true)}
      />
      {/* <PictureModal
        showPictureEdit={showPictureEdit}
        setShowPicture={setShowPicture}
      /> */}
      <div>
        <h3 id="at"> </h3>
      </div>

      <div>
        <h3 id="at"> Bio </h3>
      </div>
      {/* <div className="social_icons">
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
        </a> */}
      {/* </div> */}
      <h2 onClick={() => setInGroup(false)}> Leave Group </h2>
    </div>
  );
}