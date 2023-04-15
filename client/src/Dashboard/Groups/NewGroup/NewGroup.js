import "./NewGroup.css";
import Modal from "react-bootstrap/Modal";
// import Select from "react-select";
import { useState, useEffect, useContext } from "react";
import CityDropdown from "../../../CityDropdown/CityDropdown";
import { AllContext } from "../../../AllContext";

import styled from "styled-components";
const HoverColorInput = styled.input`
  color: black;
  border-radius: 1vh;

  &:hover {
    color: ${(props) => props.color} !important;
    background-color: black;
  }
`;

export default function NewGroup({ show, setShow }) {
  const [groupName, setGroupName] = useState("");
  const [groupCity, setGroupCity] = useState("");
  const [groupImage, setGroupImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const {theme} = useContext(AllContext)

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
    data.append("city", groupCity);
    data.append("group_pic", groupImage);

    submitToAPI(data, e);

    function submitToAPI(data, e) {
      e.preventDefault();
      fetch("/groups", {
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
            setShow(false);
            console.log(data);
            setGroupCity("");
            setGroupName("");
          }
        })
        .catch((error) => console.error(error));
    }
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
      <Modal.Header className={"modal_header_" + theme} >
        <Modal.Title id="contained-modal-title-vcenter" className={"modal_title_" + theme}>
          New Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id={"create_group_" + theme} >
        <div id="sign_up_form" name="sign_up_form" >
          <input
           className={"create_input_text_" + theme}
            type="type"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <CityDropdown setCity={setGroupCity} className={"create_input_text_" + theme}/>
          <label id="file_label"> Group Picture </label>
          <input
            className={"create_input_text_" + theme}
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setGroupImage(e.target.files[0])}
          />
          <HoverColorInput
            type="button"
            className="create_group_btn"
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
