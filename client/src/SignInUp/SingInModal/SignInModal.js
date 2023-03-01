import "./SignInModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CoStCi from "../../CoStCi/CoStCi";
import { useState } from "react";
import { Navigate } from "react-router-dom";

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
  const [userCountry, setuserCounty] = useState("");
  const [userState, setUserState] = useState("");
  const [userCity, setUserCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleUserName(e) {
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handlePasswordConfirm(e) {
    setPasswordConfirm(e.target.value);
  }

  function handleDateOfBirth(e) {
    setDateOfBirth(e.target.value);
  }

  function handleNewUserSignUp(e) {
    e.preventDefault();
    const formdata = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirm,
      dob: dateOfBirth,
      country: userCountry,
      state: userState,
      city: userCity,
      pro_pic: profilePic
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
          setErrorMessage(data.errors[0]);
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
        <form id="sign_up_form">
          <div id="first_last">
            <input
              className="sign_up_text"
              type="type"
              placeholder="First name"
              value={firstName}
              onChange={(e) => handleFirstName(e)}
            />
            <input
              className="sign_up_text"
              type="type"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => handleLastName(e)}
            />
          </div>
          <input
            className="sign_up_text"
            type="type"
            placeholder="Username"
            value={username}
            onChange={(e) => handleUserName(e)}
          />
          <input
            className="sign_up_text"
            type="type"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
          <input
            className="sign_up_text"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          <input
            className="sign_up_text"
            type="password"
            placeholder="Re-Enter Password"
            value={passwordConfirm}
            onChange={(e) => handlePasswordConfirm(e)}
          />
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="sign_up_text"
            value={dateOfBirth}
            onChange={(e) => handleDateOfBirth(e)}
          />
          <CoStCi
            setuserCounty={setuserCounty}
            setUserState={setUserState}
            setUserCity={setUserCity}
          />
          <label id="file_label"> Profile Picture </label>
          <input
            className="edit_input_text"
            type="file"
            placeholder="Profile Picture"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div id="modal_foot">
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
          <Button onClick={handleNewUserSignUp} className="sign_up_button">
            {" "}
            Sign Up{" "}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
  }
