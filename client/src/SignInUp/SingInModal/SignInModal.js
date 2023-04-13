import "./SignInModal.css";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import CityDropdown from "../../CityDropdown/CityDropdown";
import styled from "styled-components";
const HoverColorInput = styled.input`
  color: black;
  border-radius: 1vh;

  &:hover {
    color: ${(props) => props.color} !important;
    background-color: black;
  }
`;

export default function SignInModal({
  show,
  setShow,
  setSignedIn,
  setUser,
  signedIn,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userCity, setUserCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

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

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("image", profileImage);
    data.append("first_name", firstName);
    data.append("last_name", lastName);
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    data.append("password_confirmation", passwordConfirm);
    data.append("dob", dateOfBirth);
    data.append("city", userCity);
    data.append("bio", "");

    submitToAPI(data, e);
    // Use an appropriate url
    // bkl
    function submitToAPI(data, e) {
      e.preventDefault();
      fetch("/users", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            console.log(data.errors);
            setErrorMessage(data.errors[0]);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          } else if (data.error) {
            console.log(data.error);
            console.log(data);
            setErrorMessage("A Profile Picture is required");
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          } else {
            console.log(data);
            setSignedIn(true);
            setUser(data);
            setFirstName("");
            setLastName("");
            setUsername("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
            setDateOfBirth("");
            setUserCity("");
          }
        })
        .catch((error) => console.error(error));
    }
  }

  if (signedIn) {
    return <Navigate to="/Dashboard" />;
  }
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="sign_up_modal"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal_title">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="sign_up_form" name="sign_up_form">
          <div id="first_last">
            <input
              className="sign_up_text"
              type="type"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="sign_up_text"
              type="type"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            className="sign_up_text"
            type="type"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="sign_up_text"
            type="type"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="sign_up_text"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="sign_up_text"
            type="password"
            placeholder="Re-Enter Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="sign_up_text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <CityDropdown setCity={setUserCity} />
          <label id="file_label"> Profile Picture </label>
          <input
            className="edit_input_text"
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <div id="modal_foot">
            <h2 className="error_message">
              {errorMessage ? errorMessage : null}
            </h2>
            <HoverColorInput
              type="button"
              className="sign_up_button"
              id="sign_up_btn"
              name="sign_up_btn"
              onClick={(e) => handleSubmit(e)}
              value="Sign up"
              color={randomColor}
              hovercolor={hovercolor}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
