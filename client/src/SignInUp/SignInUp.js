import "./SignInUp.css";
import SignInModal from "./SingInModal/SignInModal";
import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import styled from "styled-components";
import { AllContext } from "../AllContext";
const HoverColorInput = styled.input`
  border-radius: 1vh;

  &:hover {
    color: ${(props) => props.color} !important;
    background-color: black;
  }
`;
const HoverColorButton = styled.button`
  border-radius: 1vh;

  &:hover {
    color: ${(props) => props.color} !important;
    background-color: black;
  }
`;
export default function SignInUp() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const { setUser, setTheme, setUserGroups, setSignedIn, signedIn } =
    useContext(AllContext);
  function handleHover() {
    let newColor = randomColor;
    while (newColor === randomColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    setHoverColor(newColor);
  }

  function handleLeave() {
    setHoverColor("");
  }

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [hovercolor]);

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
          setUserGroups(data.groups);
          setTheme(data.theme);
          setUser(data);
          console.log(data);
          setSignedIn(true);
        }
      });
  }

  const hiddenPassword = showPassword ? (
    <BsFillEyeSlashFill
      className="show_password"
      onClick={() => setShowPassword(!showPassword)}
      onFocus={() => setShow(false)}
    />
  ) : (
    <BsFillEyeFill
      className="show_password"
      onClick={() => setShowPassword(!showPassword)}
    />
  );

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
          <div className="sign_in_pass">
            <input
              className="pass_btn"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => handlePassword(e)}
              value={password}
            />
            {hiddenPassword}
          </div>
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
          <HoverColorInput
            className="sing_in_button"
            type="submit"
            value="Sign In"
            color={randomColor}
            hovercolor={hovercolor}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            // onClick={handleUserSignIn}
          />
        </form>
        <div id="sign_up">
          {/* <input className="sign_up_button" type="button" value="Sign Up" /> */}
          <HoverColorButton
            color={randomColor}
            hovercolor={hovercolor}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="sign_up_button"
            onClick={() => setShow(true)}
          >
            Create New Account
          </HoverColorButton>

          <SignInModal />
        </div>
      </div>
    </div>
  );
}
