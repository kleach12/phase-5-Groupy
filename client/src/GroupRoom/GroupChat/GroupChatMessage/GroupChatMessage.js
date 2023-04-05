import './GroupChatMessage.css'

export default function GroupChatMessage({message}){
  return (
    <div className='message'>
      <img src={message.user.image} className='mem_pic'/>
      <div className='username_msg'>
      <h3 className='user_of_messge'> Kleach1212 </h3>
      <h3 className='message_text'> {message.comment}</h3>
      </div>
    </div>
  )
}