import './GroupUsers.css'
import GroupChatList from './GroupChatList/GroupChatList';
export default function GroupUsers({viewingGroup}){
  // console.log(viewingGroup)


  if(viewingGroup.users){
  const mappedGroups = viewingGroup.users.map((member) => {
    return (
      <GroupChatList
        key={member.username}
        username={member.username}
        image={member.image}
        
      />
    );
  });

  return (
    <div id="friends_nav">
      <div>
        <h2 id="friends_title"> Members</h2>
      </div>
      <div className = "overflow">{mappedGroups}</div>
    </div>
  );}

  return (
    <div id="friends_nav">
      <div>
        <h2 id="friends_title"> Loading</h2>
      </div>
      
    </div>
  )
}