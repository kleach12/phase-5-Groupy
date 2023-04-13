import "./GroupChatMessage.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

const HoverColorSpan = styled.span`
  color: black;
  border-radius: 1vh;

  &:hover {
    color: ${(props) => props.color} !important;
    background-color: black;
  }
`;
export default function GroupChatMessage({ message }) {
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
    <HoverColorSpan
      className="message"
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img src={message.user.image} className="mem_pic" />
      <div className="username_msg">
        <h3 className="user_of_messge"> Kleach1212 </h3>
        <div dangerouslySetInnerHTML={{ __html: message.comment }}></div>
      </div>
    </HoverColorSpan>
  );
}
