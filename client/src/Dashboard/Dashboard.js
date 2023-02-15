import'./Dashboard.css'
import './DashNav/DashNav'
import DashNav from './DashNav/DashNav'
import Groups from './Groups/Groups'
import FriendsNav from './FriendsNav/FriendsNav'


export default function Dashboard(){
  return(
    <div id ='dashboard'>
      <div id = "bg_background"></div>
      <div className='container'>
        <DashNav/>
        <Groups/>
        <FriendsNav/>
      </div>
    </div>
  )
}

