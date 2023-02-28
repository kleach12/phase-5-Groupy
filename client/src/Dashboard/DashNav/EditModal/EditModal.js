import './EditModal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
export default function EditModal({show, setShow}){
  const [errorMessage, setErrorMessage] = useState(null);
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
        <form id = 'edit_profile'>
          <label id='file_label'> Profile Picture </label>
          <input className = "edit_input_text" type = 'file' placeholder='Profile Picture'/>
          <textarea id = "bio_box" className = "edit_input_text" type = 'textarea' placeholder='Bio'/>
          <input className = "edit_input_text" type = 'text' placeholder='Instagram'/>
          <input className = "edit_input_text" type = 'text' placeholder='Facebook'/>
        </form>
      </Modal.Body>
      <Modal.Footer>
      <div id="modal_foot">
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
          <Button  className="sign_up_button">
           Save
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}