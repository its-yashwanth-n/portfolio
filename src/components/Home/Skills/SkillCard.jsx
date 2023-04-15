import { Grid, Paper, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "../../../App";
import { SkillIcon } from "./SkillIcon";
import { DARK_THEME } from "../../common/CommonConstants";
import {
  MyTypography,
  PRIMARY_TXT_COLOR,
  SECONDARY_TXT_COLOR,
  PRIMARY_BGD_COLOR,
  SECONDARY_BGD_COLOR,
  PRIMARY_GREY_TEXT,
  SECONDARY_GREY_TEXT,
  PRIMARY_FONT,
  GeneralText,
} from "../../common/CommonStyles";

export const SkillCard = ({ category, skills }) => {
  const { colorMode } = useContext(ModeContext);

  return (
    <SkillPaper id="test" colorMode={colorMode} spacing={2}>
      <SkillHeader as="h2" colorMode={colorMode}>
        {category}
      </SkillHeader>
      <SkillGrid container direction={{ xs: "column", sm: "row" }} spacing={2}>
        {skills.map((skill) => (
          <IconGrid item xs={12} sm={4} padding={"0"}>
            <SkillIcon iconName={skill.name} />
            <SkillName colorMode={colorMode}>{skill.name}</SkillName>
          </IconGrid>
        ))}
      </SkillGrid>
    </SkillPaper>
  );
};

const SkillHeader = styled(MyTypography)`
  color: ${(props) =>
    props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
`;

const SkillPaper = styled(Paper)`
  && {
    background-color: ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_BGD_COLOR : SECONDARY_BGD_COLOR};
    border: ${PRIMARY_GREY_TEXT} 3px solid;
    border-radius: 2rem;
    @media (min-width: 0px) {
      min-width: 70%;
      max-width: 90%
      min-height: 400px;
    }
    @media (min-width: 600px) {
      min-width: 80%;
      max-width: 90%
      min-height: 400px;
    }
    @media (min-width: 900px) {
      min-width: 90%;
      min-height: 450px;
    }
    @media (min-width: 1200px) {
      min-height: 450px;
    }
    @media (min-width: 1536px) {
      min-height: 450px;
    }
  }
`;

const SkillName = styled(GeneralText)`
  && {
    text-transform: capitalise;
    font-family: ${PRIMARY_FONT}!important;
    color: ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_GREY_TEXT : SECONDARY_GREY_TEXT};
  }
`;

const SkillGrid = styled(Grid)`
  padding: 5%;
`;

const IconGrid = styled(Grid)`
  padding: 2% 0% !important;
`;
