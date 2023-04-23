import "./GroupChatList.css";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { AllContext } from "../../../AllContext";
import { Navigate } from "react-router-dom";
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
  const {
    theme,
    setViewingUser,
    setViewedUser,
    viewingUser,
    setInGroup,
    user,
  } = useContext(AllContext);

  function handleViewingUser() {
    if (user.username !== username) {
    
      fetch(`/api/viewing_user/${username}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            // console.log(data);
            setInGroup(false);
            setViewingUser(true);
            setViewedUser(data);
          }
        });
    }
  }

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

  if (viewingUser) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <HoverColorDiv
      className={"members_list_" + theme}
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={() => handleViewingUser()}
    >
      <img className="members_list_prof_pic" src={image} alt="profile pic" />
      <h3 className="members_list_name"> {username}</h3>
    </HoverColorDiv>
  );
}
