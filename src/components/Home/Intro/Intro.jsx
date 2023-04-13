import { useContext } from "react";
import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import { ModeContext } from "../../../App";
import { DARK_THEME } from "../../common/CommonConstants";
import { JelloHorz } from "../../common/CommonAnimations";
import {
  BLUE_COLOR,
  ColorText,
  PRIMARY_GREY_TEXT,
  MyButton,
  MyTypography,
  PRIMARY_TXT_COLOR,
  PURPLE_COLOR,
  SECONDARY_TXT_COLOR,
  SECONDARY_GREY_TEXT,
  HomeElement,
  GeneralText,
} from "../../common/CommonStyles";

export const Intro = ({ height }) => {
  const { colorMode } = useContext(ModeContext);
  const introString = ["I", "'", "m"];
  const nameString = ["Y", "a", "s", "h", "w", "a", "n", "t", "h", ","];

  return (
    <HomeElement id="intro-section" name="intro" style={{ height: height }}>
      <Grid
        container
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"flex-start"}
      >
        <IntroGrid item xs={12} sm={6} justifyContent="flex-start">
          <ColorText
            colorMode={colorMode}
            fontSize={{
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2.25rem",
              lg: "3rem",
            }}
          >
            Hello There.
          </ColorText>
          <IntroText
            component="h1"
            fontSize={{
              xs: "2.25rem",
              sm: "2.625rem",
              md: "3.375rem",
              lg: "4.5rem",
            }}
            colorMode={colorMode}
          >
            {introString.map((char, index) => (
              <NameSpan key={index} colorMode={colorMode}>
                {char}
              </NameSpan>
            ))}{" "}
            {nameString.map((char, index) => (
              <NameSpan key={index} colorMode={colorMode}>
                {char}
              </NameSpan>
            ))}
          </IntroText>
          <IntroText
            colorMode={colorMode}
            fontSize={{
              xs: "2.25rem",
              sm: "2.625rem",
              md: "3.375rem",
              lg: "4.5rem",
            }}
          >
            A Software Engineer
          </IntroText>
          <SubText colorMode={colorMode} margin="1.2vh 0px">
            {" "}
            amet. Ut excepturi culpa ut recusandae vitae ex omnis esse et
            voluptate aspernatur est error dolorem aut veritatis beatae in
            impedit error.
          </SubText>
          <MyButton
            colorMode={colorMode}
            // href="../../../assets/files/Yashwanth_Resume.pdf"
            target="_blank"
            download
          >
            Resume
          </MyButton>
        </IntroGrid>
        <PhotoGrid item xs={12} sm={6}></PhotoGrid>
      </Grid>
    </HomeElement>
  );
};

const NameSpan = styled.span`
  && {
    &:hover {
      display: inline-flex;
      -webkit-display: inline-flex;
      -webkit-animation: ${JelloHorz} 0.8s both;
      animation: ${JelloHorz} 0.8s both;
      color: ${(props) =>
        props.colorMode === DARK_THEME ? BLUE_COLOR : PURPLE_COLOR};
    }
  }
`;

const IntroText = styled(MyTypography)`
  && {
    line-height: 1.1 !important;
    color: ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  }
`;

const IntroGrid = styled(Grid)`
  text-align: start;
`;

const SubText = styled(GeneralText)`
  color: ${(props) =>
    props.colorMode === DARK_THEME ? PRIMARY_GREY_TEXT : SECONDARY_GREY_TEXT};
`;

const PhotoGrid = styled(Grid)``;
