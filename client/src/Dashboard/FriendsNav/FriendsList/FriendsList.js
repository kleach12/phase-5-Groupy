import './FriendsList.css'

export default function FriendsList({userName, profPic}){
  return(
    <div className = 'friends_list'>
      <img className = "friend_prof_pic" src = {profPic} alt = "profile pic"/>
      <h3 className='friedns_name'> {userName}</h3>
    </div>
    
  )
}