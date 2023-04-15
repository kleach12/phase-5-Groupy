import "./GroupChatList.css";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AllContext } from "../../../AllContext";
const HoverColorDiv = styled.div`
  color: black;
  background-color: ${(props) => props.color} !important;
`;
export default function GroupChatList({ username, image }) {
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const {theme} = useContext(AllContext);

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

  return (
    <HoverColorDiv
      className={"members_list_" + theme}
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img className="members_list_prof_pic" src={image} alt="profile pic" />
      <h3 className="members_list_name"> {username}</h3>
    </HoverColorDiv>
  );
}
