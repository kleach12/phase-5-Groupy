import './GroupRoom.css'
import GroupNav from './GroupNav/GroupNav'
import GroupChat from './GroupChat/GroupChat'
import GroupUsers from './GroupUsers/GroupUsers'
export default function GroupRoom({inGroup, setInGroup}){
  return(
  <div id ="group_room"> 
  <GroupNav inGroup = {inGroup} setInGroup = {setInGroup}/>
  <GroupChat/>
  <GroupUsers/>
  {/* left side a group pictue and infomation similar to user profile */}
  {/* middle the text area for users to chat */}
  {/* all the users that are apart of the group */}
  </div>)
}