import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import GroupRoom from "./GroupRoom/GroupRoom";
import SignInUp from "./SignInUp/SignInUp";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/GroupRoom" element={<GroupRoom />} />
        <Route
          path="/Dashboard"
          element={
            <Dashboard
              user={user}
              setUser={setUser}
              signedIn={signedIn}
              setSignedIn={setSignedIn}
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
