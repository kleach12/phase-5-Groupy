import "./SignInModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function SignInModal({ show, setShow }) {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="sign_up_modal"
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
            />
            <input
              className="sign_up_text"
              type="type"
              placeholder="Last name"
            />
          </div>
          <input className="sign_up_text" type="type" placeholder="Username" />
          <input
            className="sign_up_text"
            type="password"
            placeholder="Password"
          />
          <input
            className="sign_up_text"
            type="password"
            placeholder="Re-Enter Password"
          />
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="sign_up_text"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div id = 'modal_foot'> 
          <Button className="sign_up_button"> Sign Up </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
