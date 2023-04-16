import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import GroupRoom from "./GroupRoom/GroupRoom";
import SignInUp from "./SignInUp/SignInUp";
import { useEffect, useState } from "react";
import GroupPage from "./GroupPage/GroupPage";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import { AllContext } from "./AllContext";

function App() {
  const [theme, setTheme] = useState("light");
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
          setTheme(data.theme);
        }
      });
  }, []);

  return (
    <AllContext.Provider
      value={{
        theme,
        setTheme,
        user,
        setUser,
        signedIn,
        setSignedIn,
        inGroup,
        setInGroup,
        groupSearch,
        setGroupSearch,
        viewingGroup,
        setViewingGroup,
        deleteUser,
        setDeleteUser,
      }}
    >
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
        <Route path="/Dashboard" element={<Dashboard/>} />
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
    </AllContext.Provider>
  );
}

export default App;
