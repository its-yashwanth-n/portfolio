import React from "react";
import {
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSpringboot,
  SiW3C,
} from "react-icons/si";
import ReactLogo from "../../../assets/images/icons8-react.svg";
import JavaScriptLogo from "../../../assets/images/Javascript.svg";
import TypeScriptLogo from "../../../assets/images/Typescript.svg";
import PythonLogo from "../../../assets/images/Python.svg";
import CssLogo from "../../../assets/images/Css3.svg";
import NodejsLogo from "../../../assets/images/Nodejs.svg";
import ExpressLogo from "../../../assets/images/Express.svg";
import JavaLogo from "../../../assets/images/Java.svg";
import VscLogo from "../../../assets/images/VisualStudioCode.svg";
import GitLogo from "../../../assets/images/Git.svg";
import FirebaseLogo from "../../../assets/images/Firebase.svg";

import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

export const SkillIcon = ({ iconName }) => {
  const HTML_COLOR = "#e34c26";
  const ICON_SIZE_L = 60;
  const isMobile = !useMediaQuery("(min-width:900px)");
  return (
    <React.Fragment>
      {iconName === "React" && (
        <IconImage
          src={ReactLogo}
          color={"white"}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "JavaScript" && (
        <IconImage
          src={JavaScriptLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "TypeScript" && (
        <IconImage
          src={TypeScriptLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "HTML" && <SiHtml5 size={ICON_SIZE_L} color={HTML_COLOR} />}
      {iconName === "CSS" && (
        <IconImage
          src={CssLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Python" && (
        <IconImage
          src={PythonLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Node.js" && (
        <IconImage
          src={NodejsLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Express" && (
        <IconImage
          src={ExpressLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Mango DB" && (
        <SiMongodb
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
          color={"#F5F5F5"}
        />
      )}
      {iconName === "Java" && (
        <IconImage
          src={JavaLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Spring Boot" && (
        <SiSpringboot size={ICON_SIZE_L} color={"#6DB23F"} />
      )}
      {iconName === "MySQL" && <SiMysql size={ICON_SIZE_L} color={"#F5F5F5"} />}
      {iconName === "Firebase" && (
        <IconImage
          src={FirebaseLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Visual Studio Code" && (
        <IconImage
          src={VscLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Git" && (
        <IconImage
          src={GitLogo}
          width={isMobile ? 80 : 96}
          height={isMobile ? 70 : 84}
        />
      )}
      {iconName === "Postman" && (
        <SiPostman size={ICON_SIZE_L} color={"#F5F5F5"} />
      )}
      {iconName === "Web Accessibility Tools" && (
        <SiW3C size={ICON_SIZE_L} color={"#F5F5F5"} />
      )}
    </React.Fragment>
  );
};

const IconImage = styled.img`
  color: white;
`;
