import "./GroupNav.css";
import Avatar from "react-avatar";
import { Navigate } from "react-router-dom";
import SocialIcons from "../../Dashboard/DashNav/SocialIcons/SocialIcons";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AllContext } from "../../AllContext";
const HoverColorButton = styled.button`
  color: black;
  border-radius: 1vh;
  background-color: ${(props) => props.color} !important;
`;

export default function GroupNav({ inGroup, setInGroup, viewingGroup }) {
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

  if (inGroup === false) {
    return <Navigate to="/Dashboard" />;
  }
  return (
    <div id={"group_nav_" + theme}>
      <Avatar
        className={"group_pic_" + theme}
        src={viewingGroup.group_pic}
        name={viewingGroup.name}
        // onClick={() => setShowPicture(true)}
      />
      <span id="group_bio"> </span>
      <SocialIcons user={viewingGroup} />
      <HoverColorButton
        className="exit_group"
        onClick={() => setInGroup(false)}
        color={randomColor}
        hovercolor={hovercolor}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {" "}
        Leave{" "}
      </HoverColorButton>
    </div>
  );
}
