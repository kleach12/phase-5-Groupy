import "./PictureModal.css";
import Modal from "react-bootstrap/Modal";
// import { DirectUpload } from 'activestorage';
// import Button from 'react-bootstrap/esm/Button';
// import { useState } from 'react';

export default function PictureModal({ showPictureEdit, setShowPicture }) {
  // const [avatar, setAvatar] = useState(null);

  function handleSumbit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("image", e.target.image.files[0]);
    data.append("title", 'userImage1');
    submitToAPI(data);
    // Use an appropriate url
    // bkl
  }
  function submitToAPI(data) {
    // fetch("http://localhost:3000/avatars",
    fetch("http://localhost:3000//users/avatar", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
    // console.log(e.target.image.files[0])

  return (
    <Modal
      show={showPictureEdit}
      onHide={() => setShowPicture(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="sign_up_modal"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal_title">
          Change Avatar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="edit_profile" onSubmit={(e) => handleSumbit(e)}>
          <label id="file_label"> Profile Picture </label>
          <input
            className="edit_input_text"
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => console.log(e.target.image)}
          />
          <button type="submit"> Save</button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <div id="modal_foot">
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
          <button type ='submit'> Save</button>
        </div>
      </Modal.Footer> */}
    </Modal>
  );
}
