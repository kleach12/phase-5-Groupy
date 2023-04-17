import "./SocialIcons.css";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AllContext } from "../../../AllContext";
const HoverIcon = styled.a`
  &:hover {
    color: ${(props) => props.color} !important;
  }
`;

export default function SocialIcons({ user }) {
  const colors = ["#F06C9B", "#256EFF", "#FFE74C", "#33CA7F", "#EF6054"];
  const [hovercolor, setHoverColor] = useState("");
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const {theme} = useContext(AllContext);

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

  const instagram = user.insta  ? (
    <HoverIcon
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      href={user.insta ? user.insta : null}
      target="_blank"
      rel="noreferrer"
      className={"socials_" + theme}
    >
      {" "}
      <BsInstagram />{" "}
    </HoverIcon>
  ) : null;

  const twitter = user.twitter  ? (
    <HoverIcon
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      href={user.insta ? user.insta : null}
      target="_blank"
      rel="noreferrer"
      className={"socials_" + theme}
    >
      {" "}
      <BsTwitter />{" "}
    </HoverIcon>
  ) : null;

  const facebook = user.facebook ? (
    <HoverIcon
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      href={user.insta ? user.insta : null}
      target="_blank"
      rel="noreferrer"
      className={"socials_" + theme}
    >
      {" "}
      <BsFacebook />{" "}
    </HoverIcon>
  ) : null;

  const tiktok = user.tiktok? (
    <HoverIcon
      color={randomColor}
      hovercolor={hovercolor}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      href={user.insta ? user.insta : null}
      target="_blank"
      rel="noreferrer"
      className={"socials_" + theme}
    >
      {" "}
      <FaTiktok />{" "}
    </HoverIcon>
  ) : null;

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [hovercolor]);

  return (
    <div className="social_icons">
      {instagram}
      {twitter}
      {facebook}
      {tiktok}
    </div>
  );
}
