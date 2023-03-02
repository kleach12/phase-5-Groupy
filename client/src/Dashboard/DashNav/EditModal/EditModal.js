import "./EditModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function EditModal({ showEdit, setShowEdit, user, setUser }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [bio, setBio] = useState("");
  // const [profilePic, setProfilePic] = useState(null);
  const [facebook, setFaceBook] = useState("");
  const [insta, setInsta] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [twitter, setTwitter] = useState("");

  function handleSumbit(e) {
    e.preventDefault()
    const updateData = new FormData();
    updateData.append("bio", bio);
    updateData.append("facebook", facebook);
    updateData.append("insta", insta);
    updateData.append("twitter", twitter);
    updateData.append("tiktok", tiktok);
    handleUpdate(updateData, e);
    // Use an appropriate url
    // bkl

  function handleUpdate(data) {
    fetch("/users", {
      method: "PATCH",
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
        } else {
          console.log(data);
          setUser(data);
          setShowEdit(false);
        }
      })
      .catch((error) => console.error(error));
  }
}

  // function handleUpdate(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const formData = {
  //     bio: bio,
  //     facebook: facebook,
  //     insta: insta,
  //     twitter: twitter,
  //     tiktok: tiktok,
  //   };
  //   fetch(`/users`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.errors) {
  //         console.log(data.errors);
  //       } else {
  //         setUser(data);
  //         console.log(data);
  //         setShowEdit(false);
  //       }
  //     });
  // }
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
      show={showEdit}
      onHide={() => setShowEdit(false)}
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
        <form id="edit_profile" onSubmit={(e) => handleSumbit(e)}>
          <textarea
            id="bio_box"
            className="edit_input_text"
            type="textarea"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          {charCount}
          <input
            className="edit_input_text"
            type="text"
            placeholder="Instagram"
            value={insta}
            onChange={(e) => {
              setInsta(e.target.value);
            }}
          />
          <input
            className="edit_input_text"
            type="text"
            placeholder="Facebook"
            value={facebook}
            onChange={(e) => {
              setFaceBook(e.target.value);
            }}
          />
          <input
            className="edit_input_text"
            type="text"
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => {
              setTwitter(e.target.value);
            }}
          />
          <input
            className="edit_input_text"
            type="text"
            placeholder="TikTok"
            value={tiktok}
            onChange={(e) => {
              setTiktok(e.target.value);
            }}
          />
          <button className="sign_up_button" type="submit">
            Save
          </button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <div id="modal_foot">
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
          <Button className="sign_up_button" onClick={(e) => handleUpdate()}>
            Save
          </Button>
        </div>
      </Modal.Footer> */}
    </Modal>
  );
}
