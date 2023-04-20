import "./JoinModal.css";
import Modal from "react-bootstrap/Modal";
import { useContext, useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
// import CityDropdown from "../../CityDropdown/CityDropdown";
import { AllContext } from "../../../AllContext";
export default function JoinModal({
  showJoinModal,
  SetShowJoinModal,
  groupName,
  groupId,
}) {
  const {
    setViewingGroup,
    inGroup,
    setInGroup,
    theme,
    setGroupSearch,
    userGroups,
    setUserGroups
  } = useContext(AllContext);

  function handleSumbit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("group_id", groupId);

    submitToAPI(data, e);

    function submitToAPI(data, e) {
      e.preventDefault();
      fetch("/api/group_users", {
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
            setUserGroups([...userGroups, data])
            setInGroup(true);
            setGroupSearch(false);
            setViewingGroup(data);
          }
        })
        .catch((error) => console.error(error));
    }
  }

  if (inGroup) {
    return <Navigate to="/group-room" />;
  }

  return (
    <Modal
      show={showJoinModal}
      onHide={() => SetShowJoinModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="sign_up_modal"
    >
      <Modal.Header className={"join_header_" + theme}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={"modal_title_" + theme}
        >
          Join Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={"join_header_" + theme}>
        <div id="join_form" name="join_form">
          <div>
            <button
              type="button"
              name="join_btn"
              onClick={(e) => handleSumbit(e)}
              id={"join_btn_" + theme}
            >
              Join {groupName}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
