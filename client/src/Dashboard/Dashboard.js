import'./Dashboard.css'
import './DashNav/DashNav'
import DashNav from './DashNav/DashNav'
export default function Dashboard(){
  return(
    <div id ='dashboard'>
      <div className='container'>
        <DashNav/>
        <div>
          Groups 
        </div>
        <div>
          Friends 
        </div>
      </div>
    </div>
  )
}

