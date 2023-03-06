import './GroupChatMessage.css'

export default function GroupChatMessage(){
  return (
    <div className='message'>
      <img src='https://pbs.twimg.com/profile_images/1392292811790331904/RLBAgHDt_400x400.jpg' className='mem_pic'/>
      <div className='username_msg'>
      <h3 className='user_of_messge'> Kleach1212 </h3>
      <h3 className='message_text'> This is the first fake message of a GroupChat</h3>
      </div>
    </div>
  )
}