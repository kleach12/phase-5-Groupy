import "./JoinModal.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import CityDropdown from "../../CityDropdown/CityDropdown";

export default function JoinModal({
  showJoinModal,
  SetShowJoinModal,
  groupName,
  groupId
}) {

  function handleSumbit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("group_id", groupId);

    submitToAPI(data, e);

    function submitToAPI(data, e) {
      e.preventDefault();
      fetch("/group_users", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            console.log(data.errors);
            // setErrorMessage(data.errors[0]);
            // setTimeout(() => {
            //   setErrorMessage(null);
            // }, 5000);
          } else if (data.error) {
            console.log(data.error);
            // console.log(data);
            // setErrorMessage("A Profile Picture is required");
            // setTimeout(() => {
            //   setErrorMessage(null);
            // }, 5000);
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.error(error));
    }
  }

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
        <div id="join_form" name="join_form">
          <div id="join_btn">
            <button
              type="button"
              id="join_btn"
              name="join_btn"
              onClick={(e) => handleSumbit(e)}
            >
              Join {groupName}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}