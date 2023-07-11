import { useContext } from "react";
import {
  ALT_FONT,
  NoStyleLink,
  PRIMARY_TXT_COLOR,
  SECONDARY_TXT_COLOR,
} from "../common/CommonStyles";
import { ModeContext } from "../../App";
import { DARK_THEME } from "../common/CommonConstants";
import DarkLogo from "../../assets/images/Dark_Logo.svg";
import LightLogo from "../../assets/images/Light_Logo.svg";
import styled from "styled-components";

export const Logo = ({ isMobileDevice }) => {
  const { colorMode } = useContext(ModeContext);
  return (
    <NoStyleLink
      offset={-200}
      spy={true}
      to="intro"
      smooth={true}
      duration={500}
      id="logo-link"
      tabIndex={1}
    >
      <LogoImage
        colormode={colorMode}
        width={isMobileDevice ? 80 : 96}
        height={isMobileDevice ? 70 : 84}
        isMobileDevice={isMobileDevice}
        // style={{ height: height }}
        src={colorMode === DARK_THEME ? DarkLogo : LightLogo}
        alt="<Y/>"
      />
    </NoStyleLink>
  );
};

const LogoImage = styled.img`
  color: ${(props) =>
    props.colormode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  font-family: ${ALT_FONT};
  font-size: ${(props) => (props.isMobileDevice ? "2.25rem" : "3.5rem")};
`;
