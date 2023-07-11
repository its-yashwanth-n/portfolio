import { useContext } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { ModeContext } from "../../../App";
import { DARK_THEME } from "../../common/CommonConstants";
import { ImageMorph, JelloHorz } from "../../common/CommonAnimations";
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
import MyImage from "../../../assets/images/myimage.jpeg";
export const Intro = ({ minHeight }) => {
  const { colorMode } = useContext(ModeContext);
  const introString = ["I", "'", "m"];
  const nameString = ["Y", "a", "s", "h", "w", "a", "n", "t", "h", ",", " a"];

  return (
    <HomeElement
      id="intro-section"
      name="intro"
      style={{ minHeight: minHeight }}
    >
      <Grid
        container
        spacing={0}
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"flex-start"}
      >
        <IntroGrid item xs={12} sm={6} justifyContent="flex-start">
          <ColorText
            colormode={colorMode}
            fontSize={{
              xs: "1.75rem",
              sm: "2rem",
              md: "2.25rem",
              lg: "3rem",
            }}
          >
            Hello there.
          </ColorText>
          <IntroText
            component="h1"
            fontSize={{
              xs: "2.25rem",
              sm: "2.375rem",
              md: "3.375rem",
              lg: "4.5rem",
            }}
            colormode={colorMode}
          >
            {introString.map((char, index) => (
              <NameSpan key={index} colormode={colorMode}>
                {char}
              </NameSpan>
            ))}{" "}
            {nameString.map((char, index) => (
              <NameSpan key={index} colormode={colorMode}>
                {char}
              </NameSpan>
            ))}
          </IntroText>
          <IntroText
            colormode={colorMode}
            fontSize={{
              xs: "2.25rem",
              sm: "2.375rem",
              md: "3.375rem",
              lg: "4.5rem",
            }}
          >
            Software Engineer
          </IntroText>
          <SubText colormode={colorMode} margin="1.2vh 0px">
            amet. Ut excepturi culpa ut recusandae vitae ex omnis esse et
            voluptate aspernatur est error dolorem aut veritatis beatae in
            impedit error.
          </SubText>
          <MyButton
            colormode={colorMode}
            // href="../../../assets/files/Yashwanth_Resume.pdf"
            target="_blank"
            download
          >
            Resume
          </MyButton>
        </IntroGrid>
        <PhotoGrid item xs={12} sm={6}>
          <ImageDiv colormode={colorMode}></ImageDiv>
        </PhotoGrid>
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
        props.colormode === DARK_THEME ? BLUE_COLOR : PURPLE_COLOR};
    }
  }
`;

const IntroText = styled(MyTypography)`
  && {
    line-height: 1 !important;
    color: ${(props) =>
      props.colormode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  }
`;

const IntroGrid = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
  }
`;

const SubText = styled(GeneralText)`
  color: ${(props) =>
    props.colormode === DARK_THEME ? PRIMARY_GREY_TEXT : SECONDARY_GREY_TEXT};
`;

const PhotoGrid = styled(Grid)`
  display: flex;
  justify-content: end;
`;

const ImageDiv = styled.div`
  animation: ${ImageMorph} 5s ease-in-out infinite;
background: url(${MyImage});
background-position: 50%;
background-repeat: no-repeat;
background-size: cover;
border: 3px solid ${(props) =>
  props.colormode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
height: 28rem;
position: relative;
transition: all 1s ease-in-out;
width: 28rem;
}
`;
