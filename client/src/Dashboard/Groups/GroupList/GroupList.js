import { useEffect, useState, useContext } from "react";
import "./GroupList.css";
import styled from "styled-components";
import { AllContext } from "../../../AllContext";
// import { Navigate } from "react-router-dom";
const HoverColor = styled.div`
  color: black;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 10px ${(props) => props.color};
  &:hover {
    box-shadow: 0 0 30px ${(props) => props.color};
  }
`;

export default function GroupList({ setInGroup, setViewingGroup, group }) {
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const {theme} = useContext(AllContext);

  const numberOfMembers =
    group.num_of_mem <= 1
      ? `${group.num_of_mem} Member`
      : `${group.num_of_mem} Members`;

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

  function handleViewGroup(e) {
    e.preventDefault();
    fetch(`/groups/${group.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.errors);
        } else {
          // console.log(data);
          setInGroup(true);
          setViewingGroup(data);
        }
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [hovercolor]);

  return (
    <div className="group_card">
      <HoverColor
        className={"card_group_" + theme}
        color={randomColor}
        hovercolor={hovercolor}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={(e) => handleViewGroup(e)}
      >
        <div className="left_card">
          <h2 className="group_title">{group.name}</h2>
          <h3 className="num_mem"> {numberOfMembers}</h3>
        </div>
        <div className="right_card"></div>
      </HoverColor>
      <div></div>
    </div>
  );
}
