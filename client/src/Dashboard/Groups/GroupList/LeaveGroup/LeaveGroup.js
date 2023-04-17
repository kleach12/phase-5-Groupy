import "./LeaveGroup.css";
import { AllContext } from "../../../../AllContext";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";


export default function LeaveGroup({ group }) {
  const { theme, setUserGroups } = useContext(AllContext);
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  function handleRemoveGroup(groupToRemove) {
    setUserGroups((prevList) =>
      prevList.filter((group) => group !== groupToRemove)
    );
  }
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

  function handleClick(e) {
    e.stopPropagation();
    console.log("hi");

    fetch(`/delete_group_user/${group.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
      })
      .then(handleRemoveGroup(group));
  }

  return (
    <button
      className={"leave_group_" + theme}
      onClick={(e) => handleClick(e)}
    >
      Leave
    </button>
  );
}
