import "./NewGroup.css";
import Modal from "react-bootstrap/Modal";
// import Select from "react-select";
import { useState, useEffect, useContext } from "react";
import { AllContext } from "../../../AllContext";

import styled from "styled-components";
import { Navigate } from "react-router-dom";
const HoverColorInput = styled.input`
  border-radius: 1vh;

  &:hover {
    color: ${(props) => props.color} !important;
  }
`;

export default function NewGroup({ show, setShow }) {
  const [groupName, setGroupName] = useState("");
  const [groupImage, setGroupImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const {
    theme,
    userGroups,
    setUserGroups,
    inGroup,
    setInGroup,
    viewingGroup,
    setViewingGroup,
    user,
  } = useContext(AllContext);

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

  function handleSumbit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", groupName);
    data.append("city", user.city);
    data.append("group_pic", groupImage);

    submitToAPI(data, e);

    function submitToAPI(data, e) {
      e.preventDefault();
      fetch("/api/groups", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
            // setErrorMessage(data.errors[0]);
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
            setUserGroups([...userGroups, data]);
            setViewingGroup(data);
            setInGroup(true);
            setShow(false);
            console.log(data);
            setGroupName("");
          }
        })
        .catch((error) => console.error(error));
    }
  }

  if (inGroup) {
    <Navigate to="/grouproom" />;
  }

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="create_modal"
    >
      <Modal.Header className={"modal_header_" + theme}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={"modal_title_" + theme}
        >
          New Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id={"create_group_" + theme}>
        <div id="sign_up_form" name="sign_up_form">
          <input
            className={"create_input_text_" + theme}
            type="type"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <input
            className={"create_input_text_" + theme}
            type="type"
            placeholder="Group Name"
            value={user.city}
            disabled = {true}
          />
          <label id={"file_label_" + theme}> Group Picture </label>
          <input
            className={"create_input_text_" + theme}
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setGroupImage(e.target.files[0])}
          />
          <HoverColorInput
            type="button"
            className={"create_group_btn_" + theme}
            id="create_group_btn"
            name="create_group_btnn"
            onClick={(e) => handleSumbit(e)}
            value="Create Group"
            color={randomColor}
            hovercolor={hovercolor}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
          <h2 className="error_message">
            {errorMessage ? errorMessage : null}
          </h2>
        </div>
      </Modal.Body>
    </Modal>
  );
}
