import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import GroupRoom from "./GroupRoom/GroupRoom";
import SignInUp from "./SignInUp/SignInUp";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [inGroup, setInGroup] = useState(false);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setUser(data);
          setSignedIn(true);
        }
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/GroupRoom"
          element={<GroupRoom inGroup={inGroup} setInGroup={setInGroup}/>}
        />
        <Route
          path="/Dashboard"
          element={
            <Dashboard
              user={user}
              setUser={setUser}
              signedIn={signedIn}
              setSignedIn={setSignedIn}
              inGroup={inGroup}
              setInGroup={setInGroup}
            />
          }
        />
        <Route
          path="/"
          element={
            <SignInUp
              setUser={setUser}
              signedIn={signedIn}
              setSignedIn={setSignedIn}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
