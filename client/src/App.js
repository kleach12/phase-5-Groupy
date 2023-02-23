import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import GroupRoom from './GroupRoom/GroupRoom';


function App() {
  return (
    <div>
      <Routes>
        <Route path = "/GroupRoom" element = {<GroupRoom/>}/>
        <Route path = "/" element = {<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
