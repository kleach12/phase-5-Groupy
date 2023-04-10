import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import GroupRoom from "./GroupRoom/GroupRoom";
import SignInUp from "./SignInUp/SignInUp";
import { useEffect, useState } from "react";
import GroupPage from "./GroupPage/GroupPage";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [inGroup, setInGroup] = useState(false);
  const [groupSearch, setGroupSearch] = useState(false);
  const [groups, setGroups] = useState([]);
  const [viewingGroup, setViewingGroup] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);

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
          element={
            <GroupRoom
              inGroup={inGroup}
              setInGroup={setInGroup}
              viewingGroup={viewingGroup}
            />
          }
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
              groupSearch={groupSearch}
              setGroupSearch={setGroupSearch}
              setViewingGroup={setViewingGroup}
              deleteUser={deleteUser}
              setDeleteUser={setDeleteUser}
            />
          }
        />
        <Route
          path="/GroupPage"
          element={
            <GroupPage
              groupSearch={groupSearch}
              setGroupSearch={setGroupSearch}
              user={user}
              groups={groups}
            />
          }
        />
        <Route
          path="/DeleteAccount"
          element={
            <DeleteAccount
              deleteUser={deleteUser}
              setDeleteUser={setDeleteUser}
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
