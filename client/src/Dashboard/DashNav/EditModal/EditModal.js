import "./EditModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function EditModal({ show, setShow, user, setUser }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [facebook, setFaceBook] = useState("");
  const [insta, setInsta] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [twitter, setTwitter] = useState("");
  console.log(user)
  function handleBio(e) {
    setBio(e.target.value);
  }

  function handleFaceBook(e) {
    setFaceBook(e.target.value);
  }

  function handleInsta(e) {
    setInsta(e.target.value);
  }

  function handleTwitter(e) {
    setTwitter(e.target.value);
  }

  function handleTiktok(e) {
    setTiktok(e.target.value);
  }

  // function handleProfilePic(e) {
  //   setProfilePic(e.target.value);
  //   // console.log(e.target.value)
  // }

  function handleUpdate(e) {
    // e.preventDefault();
    const formData = {
      pro_pic: profilePic,
      bio: bio,
      facebook: facebook,
      insta: insta,
      twitter: twitter,
      tiktok: tiktok,
    };
    fetch(`/user/${user.username}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
        } else {
          setUser(data);
          console.log(data);
        }
      });
  }
  const charCount =
    bio.length > 250 ? (
      <h2 className="char_count" style={{ color: "red" }}>
        {bio.length}/250
      </h2>
    ) : (
      <h2 className="char_count"> {bio.length}/250</h2>
    );

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
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="edit_profile">
          <label id="file_label"> Profile Picture </label>
          <input
            className="edit_input_text"
            type="file"
            placeholder="Profile Picture"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
          <textarea
            id="bio_box"
            className="edit_input_text"
            type="textarea"
            placeholder="Bio"
            value={bio}
            onChange={(e) => handleBio(e)}
          />
          {charCount}
          <input
            className="edit_input_text"
            type="text"
            placeholder="Instagram"
            value={insta}
            onChange={(e) => {
              handleInsta(e);
            }}
          />
          <input
            className="edit_input_text"
            type="text"
            placeholder="Facebook"
            value={facebook}
            onChange={(e) => {
              handleFaceBook(e);
            }}
          />
          <input
            className="edit_input_text"
            type="text"
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => {
              handleTwitter(e);
            }}
          />
          <input
            className="edit_input_text"
            type="text"
            placeholder="TikTok"
            value={tiktok}
            onChange={(e) => {
              handleTiktok(e);
            }}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div id="modal_foot">
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
          <Button className="sign_up_button" onClick={(e) => handleUpdate()}>
            Save
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
