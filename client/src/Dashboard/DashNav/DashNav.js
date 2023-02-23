import './DashNav.css'
export default function DashNav(){
  return(
    <div id ='dash_nav'>
      <h1 id = "title">  IRL </h1>
      <img id = "profile_pic" src = 'https://www.clipartmax.com/png/small/1-16702_world-clip-art-transparent-background-earth-clipart.png' alt = "profile pic"/>
      <div>
        <h3 id = "at"> @Irl</h3>
      
      </div>
      <h3 id = 'sign_out'> Sign out</h3>
    </div>
  )
}