import "./GroupRoom.css";
import GroupNav from "./GroupNav/GroupNav";
import GroupChat from "./GroupChat/GroupChat";
import GroupUsers from "./GroupUsers/GroupUsers";
import { useEffect, useState, useContext } from "react";
import Cable from 'actioncable'
import { AllContext } from "../AllContext";


export default function GroupRoom() {
  const [groupMessages, setGroupMessages] = useState([]);
  // const [consumer, setconsumer] - useState(null)
  const {viewingGroup} = useContext(AllContext)
  let wsConsumer = null;
//   useEffect(() => {
//     function createSocket() {
//       // production
//       // consumer = Cable.createConsumer(`wss://${window.location.hostname}:3000/cable`)
//       // Development
      
//       let consumer = Cable.createConsumer(`ws://${window.location.hostname}:3000/cable`)
//       wsConsumer = consumer.subscriptions.create(
//         { 
//           channel: 'MessageChannel',
//           room: viewingGroup.name
//         }, 
//         {
//           received(data){
//             setGroupMessages(prevMessages => [...prevMessages, data])
//             // setGroupMessages( [...groupMessages, data])
//             // console.log(groupMessages)
//             // console.log(data)
//           }
//         }
//       )
//     }
//     if (viewingGroup.name) {
//       createSocket()
//     }

// },[viewingGroup.name, viewingGroup.id])
// console.log(wsConsumer)
useEffect(() => {
  fetch(`/api/group_messages/${viewingGroup.id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setGroupMessages(data);
        // setRerender(!rerender)
      }
    });
}, []);

  return (
    <div id="group_room">
      {/* <GroupNav wsConsumer = {wsConsumer}/> */}
      <GroupNav/>
      <GroupChat groupMessages = {groupMessages} setGroupMessages={setGroupMessages} />
      <GroupUsers />
      {/* left side a group pictue and infomation similar to user profile */}
      {/* middle the text area for users to chat */}
      {/* all the users that are apart of the group */}
    </div>
  );
}
