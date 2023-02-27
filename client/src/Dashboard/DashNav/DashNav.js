import "./DashNav.css";
import { Navigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";

export default function DashNav({ user, setUser, signedIn, setSignedIn }) {


  function handleSignOut(){
    fetch('/logout', {
      method: "DELETE"
    })
    .then((res) => {
      console.log(res)
      setSignedIn(false)
      setUser(null)
      console.log(signedIn)
    })
  }

  if (signedIn === false) {
    return (<Navigate to="/" />)
  }

  return (
    <div id="dash_nav">
      <h1 id="title"> IRL </h1>
      <img
        id="profile_pic"
        src="https://www.clipartmax.com/png/small/1-16702_world-clip-art-transparent-background-earth-clipart.png"
        alt="profile pic"
      />
      <div>
        <h3 id="at"> @Irl</h3>
      </div>
      <h3 id="sign_out" onClick={handleSignOut}>
        {" "}
        Sign out
      </h3>
    </div>
  );
}
