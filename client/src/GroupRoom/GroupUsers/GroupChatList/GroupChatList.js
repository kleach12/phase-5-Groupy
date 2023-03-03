import './GroupChatList.css'

export default function GroupChatList({userName, profPic}){
  <div className = '.members_list'>
      <img className = "members_list_prof_pic" src = {profPic} alt = "profile pic"/>
      <h3 className='members_list_name'> {userName}</h3>
    </div>
}