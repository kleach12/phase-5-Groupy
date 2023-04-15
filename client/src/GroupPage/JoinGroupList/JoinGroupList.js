import { useState, useContext, useEffect } from "react";
import "./JoinGroupList.css";
import JoinModal from "./JoinModal/JoinModal";
// import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { AllContext } from "../../AllContext";

const HoverColor = styled.div`
  color: black;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 10px ${(props) => props.color};
  &:hover {
    box-shadow: 0 0 30px ${(props) => props.color};
  }
`;

export default function JoinGroupList({ group }) {
  const {theme} = useContext(AllContext);
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  // const mappedUsersPic = users.map((user) => <img key = {user.username}src = {user.prof_pic} alt = {user.username} className = 'card_prof_pic'/> )
  // need to make user authentication so I can move forward onClick={() => <Navigate to = {"/GroupRoom"}/>
  const [showJoinModal, SetShowJoinModal] = useState(false);
  const numberOfMembers =
    group.num_of_mem <= 1
      ? `${group.num_of_mem} Member`
      : `${group.num_of_mem} Members`;

  console.log(group);
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
    <div className={"join_card"}>
      <HoverColor
        className={"card_group_" + theme}
        onClick={() => SetShowJoinModal(true)}
        color={randomColor}
        hovercolor={hovercolor}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className="left_card">
          <h2 className={"group_title"}>{group.name}</h2>
          {numberOfMembers}
        </div>
        <div className="right_card"></div>
      </HoverColor>
      <JoinModal
        showJoinModal={showJoinModal}
        SetShowJoinModal={SetShowJoinModal}
        groupName={group.name}
        groupId={group.id}
      />
    </div>
  );
}
