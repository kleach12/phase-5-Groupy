import "./SignInUp.css";
import SignInModal from "./SingInModal/SignInModal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export default function SignInUp({ setUser, setSignedIn, signedIn }) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false)

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleUserSignIn(e) {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          setErrorMessage(data.error);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        } else {
          console.log(data);
          setSignedIn(true);
          setUser(data);
        }
      });
  }

  const hiddenPassword = ( showPassword ? <BsFillEyeSlashFill className="show_password" onClick={() => setShowPassword(!showPassword)} onFocus={() => setShow(false)   }/> : <BsFillEyeFill className="show_password" onClick={() => setShowPassword(!showPassword)} />)

  if (signedIn) {
    return <Navigate to="/Dashboard" />;
  }

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
        <form id="sign_in" onSubmit={handleUserSignIn}>
          <input
            className="sign_in_text"
            type="textbox"
            placeholder="Username"
            onChange={(e) => handleUsername(e)}
            value={username}
          />
          <input
            className="sign_in_text"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={(e) => handlePassword(e)}
            value={password}
          />
          {/* <BsFillEyeFill className="show_password" onClick={() => handleShowPassword()}/> */}
          {hiddenPassword}
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
          <input
            className="sing_in_button"
            type="submit"
            value="Sign In"
            // onClick={handleUserSignIn}
          />
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
            signedIn={signedIn}
          />
        </div>
      </div>
    </div>
  );
}
