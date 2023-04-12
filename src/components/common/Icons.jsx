import React, { useContext, useState } from "react";
import { ModeContext } from "../../App";
import styled from "styled-components";
import { PRIMARY_TXT_COLOR, SECONDARY_TXT_COLOR } from "./commonStyles";
import {
  DARK_THEME,
  LIGHT_THEME,
  emailID,
  githubID,
  linkedInID,
  phoneID,
} from "../../assets/common/commonProperties";
import {
  FiGithub,
  FiLinkedin,
  FiSun,
  FiMoon,
  FiMusic,
  FiPhoneCall,
} from "react-icons/fi";
import { BsSoundwave } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { puffOutCenter, pulsateForward } from "./commonAnimations";

export const SocialIcons = ({ iconId, iconLink, iconSize, ariaLabel }) => {
  const { colorMode } = useContext(ModeContext);
  return (
    <LinkNoStyle
      colorMode={colorMode}
      id={iconId}
      href={iconLink}
      aria-label={ariaLabel}
      target="_blank"
    >
      {iconId === linkedInID && <FiLinkedin size={iconSize} />}
      {iconId === githubID && <FiGithub size={iconSize} />}
      {iconId === emailID && <AiOutlineMail size={iconSize} />}
      {iconId === phoneID && <FiPhoneCall size={iconSize} />}
    </LinkNoStyle>
  );
};

let audio = new Audio("/price_of_freedom.mp3");

export const SoundIcon = ({ iconSize, ariaLabel }) => {
  const { colorMode } = useContext(ModeContext);
  const [music, setMusic] = useState(false);

  function playMusic(e) {
    e.preventDefault();
    let currentAudio = !music;
    setMusic(!music);
    if (currentAudio) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  return (
    <SoundButton
      id="soundIcon"
      colorMode={colorMode}
      onClick={playMusic}
      isPlaying={music}
      aria-label={ariaLabel}
    >
      {!music && <FiMusic size={iconSize} />}
      {music && <BsSoundwave size={iconSize} />}
    </SoundButton>
  );
};

export const ThemeIcon = ({ iconSize, ariaLabel }) => {
  const { colorMode, setColorMode } = useContext(ModeContext);
  function handleThemeToggle(e) {
    e.preventDefault();
    setColorMode(colorMode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  }
  return (
    <ThemeButton
      id="themeIcon"
      colorMode={colorMode}
      onClick={handleThemeToggle}
      aria-label={ariaLabel}
    >
      {colorMode === LIGHT_THEME && <FiMoon size={iconSize} />}
      {colorMode === DARK_THEME && <FiSun size={iconSize} />}
    </ThemeButton>
  );
};

const CommonIconButton = styled.button`
  z-index: 1;
  background-color: transparent;
  padding: 0%;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
`;

const SoundButton = styled(CommonIconButton)`
  &:hover {
    -webkit-animation: ${pulsateForward} 0.8s ease-in-out infinite both;
    animation: ${pulsateForward} 0.8s ease-in-out infinite both;
  }
`;

const ThemeButton = styled(CommonIconButton)`
  &:active {
    -webkit-animation: ${puffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)
      both;
    animation: ${puffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
  transition: background-color 2s ease;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  z-index: 1;
  color: ${(props) =>
    props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  &:hover {
    -webkit-animation: ${pulsateForward} 0.8s ease-in-out infinite both;
    animation: ${pulsateForward} 0.8s ease-in-out infinite both;
  }
  &#linkedinIcon:hover {
    color: #0177b5;
  }
  &#githubIcon:hover {
  }
  &#whatsappIcon:hover {
    color: #25d366;
  }
  &#instagramIcon:hover {
    color: #bc2a8d;
  }
`;
