import "./DashNav.css";
import { Navigate } from "react-router-dom";
import { BsFillMoonFill, BsBrightnessHigh } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import Avatar from "react-avatar";
import EditModal from "./EditModal/EditModal";
import { BsFillTrashFill } from "react-icons/bs";
import styled from "styled-components";
import SocialIcons from "./SocialIcons/SocialIcons";
import { AllContext } from "../../AllContext";

const HoverColorH3 = styled.h3`
  color: black;

  &:hover {
    color: ${(props) => props.color} !important;
  }
`;

export default function DashNav() {
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [showEdit, setShowEdit] = useState(false);
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  const {
    theme,
    setTheme,
    user,
    setUser,
    signedIn,
    setSignedIn,
    deleteUser,
    setDeleteUser,
    setUserGroups,
  } = useContext(AllContext);

  function handleHover() {
    let newColor = randomColor;
    while (newColor === randomColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    setHoverColor(newColor);
  }

  function handleLeave() {
    setHoverColor("");
  }

  function handleChangeTheme(e, color) {
    e.preventDefault();
    setTheme(color);

    const updateData = new FormData();
    updateData.append("theme", color);
    handleUpdate(updateData, e);
    // Use an appropriate url
    // bkl

    function handleUpdate(data, e) {
      e.preventDefault();
      fetch("/api/users", {
        method: "PATCH",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            console.log(data.errors);
          } else {
            console.log(data);
            setUser(data);
            setShowEdit(false);
          }
        })
        .catch((error) => console.error(error));
    }
  }

  const themeButton =
    theme === "light" ? (
      <BsFillMoonFill
        className={"theme_button_" + theme}
        onClick={(e) => handleChangeTheme(e, "dark")}
      />
    ) : (
      <BsBrightnessHigh
        className={"theme_button_" + theme}
        onClick={(e) => handleChangeTheme(e, "light")}
      />
    );

  function handleSignOut() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then((res) => {
      setTheme("light");
      setUser(null);
      setSignedIn(false);
      setUserGroups([]);
    });
  }

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [hovercolor]);

  if (signedIn === false) {
    return <Navigate to="/" />;
  }

  if (deleteUser === true) {
    return <Navigate to="/deleteaccount" />;
  }
  if (user.image) {
    return (
      <div id={"dash_nav_" + theme}>
        <h1 id={"title_" + theme}> IRL </h1>
        <Avatar
          className="profile_pic"
          src={user.image}
          name={user.full_name}
        />
        <div>
          <HoverColorH3
            id={"at_" + theme}
            color={randomColor}
            hovercolor={hovercolor}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            {" "}
            @{user.username}
          </HoverColorH3>
        </div>

        <div className="grow">
          <h3 id={"bio_" + theme}> {user.bio} </h3>
        </div>
        <SocialIcons user={user} />
        <HoverColorH3
          color={randomColor}
          hovercolor={hovercolor}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={"dashnav_text_" + theme}
          onClick={() => setShowEdit(true)}
        >
          {" "}
          Edit Profile{" "}
        </HoverColorH3>
        <EditModal
          user={user}
          setUser={setUser}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
        <HoverColorH3
          color={randomColor}
          hovercolor={hovercolor}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={"dashnav_text_" + theme}
          onClick={handleSignOut}
        >
          Sign out
        </HoverColorH3>
        {themeButton}
        <BsFillTrashFill
          id={"delete_btn_" + theme}
          onClick={() => setDeleteUser(true)}
        />
      </div>
    );
  }
}
