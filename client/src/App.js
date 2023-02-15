import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
