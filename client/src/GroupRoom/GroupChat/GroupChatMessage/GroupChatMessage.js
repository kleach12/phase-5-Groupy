import "./GroupChatMessage.css";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AllContext } from "../../../AllContext";
const HoverColorSpan = styled.span`
  border-radius: 1vh;
  // background-color: ${(props) => props.color} !important;
  &:hover {
    background-color: ${(props) => props.color} !important;
  }
`;
export default function GroupChatMessage({ message }) {
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
    <HoverColorSpan
      className={"message_" + theme}
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img src={message.user.image} className="mem_pic" />
      <div className="username_msg">
        <h3 className="user_of_messge"> {message.user.username} </h3>
        <div dangerouslySetInnerHTML={{ __html: message.comment }}></div>
      </div>
    </HoverColorSpan>
  );
}
