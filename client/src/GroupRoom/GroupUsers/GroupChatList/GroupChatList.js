import './GroupChatList.css'

export default function GroupChatList({username, image}){
  return(
  <div className = 'members_list'>
      <img className = "members_list_prof_pic" src = {image} alt = "profile pic"/>
      <h3 className='members_list_name'> {username}</h3>
    </div>)
}