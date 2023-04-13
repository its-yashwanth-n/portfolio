import React, { useContext, useState } from "react";
import { ModeContext } from "../../App";
import styled from "styled-components";
import { PRIMARY_TXT_COLOR, SECONDARY_TXT_COLOR } from "./CommonStyles";
import {
  DARK_MODE_LABEL,
  DARK_THEME,
  LIGHT_MODE_LABEL,
  LIGHT_THEME,
  MUSIC_LABEL,
  MUTE_LABEL,
  emailId,
  githubId,
  linkedInId,
  phoneId,
} from "./CommonConstants";
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
import { PuffOutCenter, PulsateForward } from "./CommonAnimations";

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
      {iconId === linkedInId && <FiLinkedin size={iconSize} />}
      {iconId === githubId && <FiGithub size={iconSize} />}
      {iconId === emailId && <AiOutlineMail size={iconSize} />}
      {iconId === phoneId && <FiPhoneCall size={iconSize} />}
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
      id="sound-icon"
      colorMode={colorMode}
      onClick={playMusic}
      isPlaying={music}
      aria-label={music ? MUTE_LABEL : MUSIC_LABEL}
    >
      {!music ? <FiMusic size={iconSize} /> : <BsSoundwave size={iconSize} />}
    </SoundButton>
  );
};

export const ThemeIcon = ({ iconSize }) => {
  const { colorMode, setColorMode } = useContext(ModeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    const newColor = colorMode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setColorMode(newColor);
  };

  return (
    <ThemeButton
      id="theme-icon"
      colorMode={colorMode}
      onClick={handleThemeToggle}
      aria-label={colorMode === DARK_THEME ? LIGHT_MODE_LABEL : DARK_MODE_LABEL}
    >
      {colorMode === LIGHT_THEME ? (
        <FiMoon size={iconSize} />
      ) : (
        <FiSun size={iconSize} />
      )}
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
    -webkit-animation: ${PulsateForward} 0.8s ease-in-out infinite both;
    animation: ${PulsateForward} 0.8s ease-in-out infinite both;
  }
`;

const ThemeButton = styled(CommonIconButton)`
  &:active {
    -webkit-animation: ${PuffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)
      both;
    animation: ${PuffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
  &:hover {
    -webkit-animation: ${PulsateForward} 0.8s ease-in-out infinite both;
    animation: ${PulsateForward} 0.8s ease-in-out infinite both;
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
    -webkit-animation: ${PulsateForward} 0.8s ease-in-out infinite both;
    animation: ${PulsateForward} 0.8s ease-in-out infinite both;
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
