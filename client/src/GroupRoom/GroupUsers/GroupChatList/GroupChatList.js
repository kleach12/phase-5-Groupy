import "./GroupChatList.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

const HoverColorDiv = styled.div`
  color: black;
  border-radius: 1vh;

  &:hover {
    color: ${(props) => props.color} !important;
    background-color: black;
  }
`;
export default function GroupChatList({ username, image }) {
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

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
      className="members_list"
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
