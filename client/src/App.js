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
  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setUser(data);
          setSignedIn(true);
          setTheme(data.theme);
          setUserGroups(data.groups);
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
        setGroupSearch,
        groups,
        setGroups,
        userGroups,
        setUserGroups,
      }}
    >
      <Routes>
        <Route path="/GroupRoom" element={<GroupRoom />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/GroupPage" element={<GroupPage />} />
        <Route path="/DeleteAccount" element={<DeleteAccount />} />
        <Route path="/" element={<SignInUp />} />
      </Routes>
    </AllContext.Provider>
  );
}

export default App;
