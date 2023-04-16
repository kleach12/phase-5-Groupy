import "./LeaveGroup.css"; 
import { AllContext
 } from "../../../../AllContext";
import { useContext } from "react";
export default function LeaveGroup({group}) {
  const {theme , setUserGroups} = useContext(AllContext)

  function handleRemoveGroup(groupToRemove){
    setUserGroups((prevList) => prevList.filter((group) => group !== groupToRemove));
  }

  function handleClick(e) {
    e.stopPropagation();
    console.log("hi");

    fetch(`/delete_group_user/${group.id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
    })
    .then(
      handleRemoveGroup(group)
    )
  }

  return <button className = {'leave_group_' + theme} onClick={(e) => handleClick(e)}>Leave Group</button>;
}
