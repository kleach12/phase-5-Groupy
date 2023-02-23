import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import GroupRoom from './GroupRoom/GroupRoom';
import SignInUp from './SignInUp/SignInUp';


function App() {
  return (
    <div>
      <Routes>
        <Route path = "/GroupRoom" element = {<GroupRoom/>}/>
        <Route path = "/Dashboard" element = {<Dashboard/>}/>
        <Route path = "/" element = {<SignInUp/>}/>
      </Routes>
    </div>
  )
}

export default App;
