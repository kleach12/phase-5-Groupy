import "./JoinModal.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import CityDropdown from "../../CityDropdown/CityDropdown";

export default function JoinModal({
  showJoinModal,
  SetShowJoinModal
}) {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [userCity, setUserCity] = useState("");
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [profileImage, setProfileImage] = useState("");

  // function handleSumbit(e) {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append("image", profileImage);
  //   data.append("first_name", firstName);
  //   data.append("last_name", lastName);
  //   data.append("username", username);
  //   data.append("email", email);
  //   data.append("password", password);
  //   data.append("password_confirmation", passwordConfirm);
  //   data.append("dob", dateOfBirth);
  //   data.append("city", userCity);
  //   data.append("bio", "");

  //   submitToAPI(data, e);
  //   // Use an appropriate url
  //   // bkl
  //   function submitToAPI(data, e) {
  //     e.preventDefault();
  //     fetch("/users", {
  //       method: "POST",
  //       body: data,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.errors) {
  //           console.log(data.errors);
  //           setErrorMessage(data.errors[0]);
  //           setTimeout(() => {
  //             setErrorMessage(null);
  //           }, 5000);
  //         } else if (data.error) {
  //           console.log(data.error);
  //           console.log(data);
  //           setErrorMessage("A Profile Picture is required");
  //           setTimeout(() => {
  //             setErrorMessage(null);
  //           }, 5000);
  //         } else {
  //           console.log(data);
  //           setSignedIn(true);
  //           setUser(data);
  //           setFirstName("");
  //           setLastName("");
  //           setUsername("");
  //           setEmail("");
  //           setPassword("");
  //           setPasswordConfirm("");
  //           setDateOfBirth("");
  //           setUserCity("");
  //         }
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // }

  return (
    <Modal
      show={showJoinModal}
      onHide={() => SetShowJoinModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="sign_up_modal"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal_title">
          Join Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="sign_up_form" name="sign_up_form">
          <div id="first_last">
            <input
              type="button"
              className="sign_up_button"
              id="sign_up_btn"
              name="sign_up_btn"
              onClick={(e) => SetShowJoinModal(false)}
              value="Join"
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}