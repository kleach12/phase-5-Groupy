import "./SignInUp.css";
import SignInModal from "./SingInModal/SignInModal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function SignInUp({ setUser, setSignedIn, signedIn }) {
  const [show, setShow] = useState(false);
  return (
    <div id="sign_in_up">
      <div id="web_name">
        <h2 id="IRL"> IRL</h2>
        <img
          id="logo"
          src="https://www.clipartmax.com/png/small/1-16702_world-clip-art-transparent-background-earth-clipart.png"
          alt="profile pic"
        />
        <h3 id="idea"> Meet a new group of friends!</h3>
      </div>
      <div id="sign_in_up_box">
        <form id="sign_in">
          <input
            className="sign_in_text"
            tupe="textbox"
            placeholder="Username"
          />
          <input
            className="sign_in_text"
            tupe="textbox"
            placeholder="Password"
          />
          <input className="sing_in_button" type="button" value="Sign In" />
        </form>
        <div id="sign_up">
          {/* <input className="sign_up_button" type="button" value="Sign Up" /> */}

          <Button className="sign_up_button" onClick={() => setShow(true)}>
            Create New Account
          </Button>

          <SignInModal
            show={show}
            setShow={setShow}
            setUser={setUser}
            setSignedIn={setSignedIn}
            signedIn ={signedIn}
          />
        </div>
      </div>
    </div>
  );
}
