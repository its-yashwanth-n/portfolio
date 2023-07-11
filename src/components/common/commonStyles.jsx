import { Box, Button, Typography } from "@mui/material";
import { Element, Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { DARK_THEME } from "./CommonConstants";
import { SlideInBtmAmt } from "./CommonAnimations";

// primary text and background colors for the website
export const PRIMARY_BGD_COLOR = "#15181C";
export const SECONDARY_BGD_COLOR = "#F2F1EF";

export const PRIMARY_TXT_COLOR = "#F5F5F5";
export const SECONDARY_TXT_COLOR = "#161513";

export const PRIMARY_GREY_TEXT = "#8596A3";
export const SECONDARY_GREY_TEXT = "#5E636E";

export const NAV_PRIMARY_BGD_COLOR = "#1A1E23";
export const NAV_SECONDARY_BGD_COLOR = "#F2F1EF";

export const BLUE_COLOR = "#075FE4";
export const PURPLE_COLOR = "#5E3BEE";

export const ERROR_COLOR = "#B00020";
export const SUCCESS_COLOR = "rgb(56, 142, 60)";

export const PRIMARY_FONT = "Oswald";
export const SECONDARY_FONT = "Francois One";
export const ALT_FONT = "Delicious Handrawn";

export const NoStyleLink = styled(ScrollLink)`
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
`;

export const MyTypography = styled(Typography)`
  && {
    font-family: ${PRIMARY_FONT};
  }
`;

export const GeneralText = styled(Typography)`
  && {
    font-family: ${PRIMARY_FONT};
    font-size: 14px;
    @media (min-width: 450px) {
      font-size: 16px;
    }
    @media (min-width: 900px) {
      font-size: 18px;
    }
    color: ${(props) =>
      props.colormode === DARK_THEME ? PRIMARY_GREY_TEXT : SECONDARY_GREY_TEXT};
  }
`;

export const GeneralLink = styled.a`
  && {
    font-size: 14px;
    @media (min-width: 450px) {
      font-size: 16px;
    }
    @media (min-width: 900px) {
      font-size: 18px;
    }
    text-decoration: none;
    cursor: pointer;
    color: ${(props) =>
      props.colormode === DARK_THEME ? PRIMARY_GREY_TEXT : SECONDARY_GREY_TEXT};
  }
`;

export const ColorText = styled(MyTypography)`
  && {
    color: ${(props) =>
      props.colormode === DARK_THEME ? BLUE_COLOR : PURPLE_COLOR};
  }
`;

export const OtherTypography = styled(Typography)`
  && {
    font-family: ${SECONDARY_FONT};
  }
`;

export const HomeContainer = styled(Box)`
  && {
    display: inline-flex;
    -webkit-display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HomeElement = styled(Element)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 900px) {
      padding: 0% 7%;
    }
  }
`;

export const MyButton = styled(Button)`
  && {
    font-family: ${PRIMARY_FONT};
    padding: 1.5% 0%;
    width: 30%;
    color: ${(props) =>
      props.colormode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
    border: 3px solid
      ${(props) => (props.colormode === DARK_THEME ? BLUE_COLOR : PURPLE_COLOR)};
    &:hover {
      background-color: ${(props) =>
        props.colormode === DARK_THEME ? BLUE_COLOR : PURPLE_COLOR};
      color: ${(props) =>
        props.colormode === DARK_THEME
          ? PRIMARY_TXT_COLOR
          : SECONDARY_TXT_COLOR};
    }
    -webkit-transition: background-color 1s linear;
    -ms-transition: background-color 1s linear;
    transition: background-color 1s linear;
    font-size: 20px;
  }
`;

// TODO: Verify and shorten
export const StyledList = styled.ul`
  list-style-type: none;
`;

export const ListItems = styled.li`
  &&& {
    cursor: pointer;
    padding: 40% 0%;
  }
`;

export const IconsDiv = styled.div`
  @media (min-width: 900px) {
    display: block;
    position: fixed;
    bottom: 0px;
    padding-bottom: 3.5vh;
    -webkit-animation: ${SlideInBtmAmt};
    animation: ${SlideInBtmAmt};
  }
  display: none;
`;
