import { Box, Button } from "@mui/material";
import {
  BLUE_COLOR,
  HomeElement,
  MyButton,
  MyTypography,
  PRIMARY_FONT,
  PRIMARY_GREY_TEXT,
  PRIMARY_TXT_COLOR,
  PURPLE_COLOR,
  SECONDARY_GREY_TEXT,
  SECONDARY_TXT_COLOR,
} from "../../common/CommonStyles";
import styled from "styled-components";
import { ModeContext } from "../../../App";
import { useContext } from "react";
import { DARK_THEME, EMAIL_LINK } from "../../common/CommonConstants";

export const Contact = ({ minHeight }) => {
  const { colorMode } = useContext(ModeContext);
  return (
    <HomeElement
      id="contact-section"
      name="contact"
      style={{ minHeight: minHeight, justifyContent: "center" }}
    >
      <ContactBox id="contact-box" width={{ xs: "70%", md: "65%", lg: "55%" }}>
        <ContactHeader variant="h2" colormode={colorMode}>
          Get In Touch
        </ContactHeader>
        <ContactText colormode={colorMode}>
          I am actively seeking new job opportunities to challenge and grow in
          my career. With a strong skill set and a passion for web development
          and artificial intelligence, I am excited to contribute my expertise
          to a dynamic organization. Let's connect and explore how I can make a
          positive impact on your team!
        </ContactText>
        <ContactButton
          colormode={colorMode}
          rel="noreferrer noopener"
          href={EMAIL_LINK}
          // href="../../../assets/files/Yashwanth_Resume.pdf"
          target="_blank"
        >
          Say Hi!
        </ContactButton>
      </ContactBox>
    </HomeElement>
  );
};

const ContactBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHeader = styled(MyTypography)`
  && {
    text-align: center;
    width: inherit;
    margin-bottom: 2%;
  }
`;

const ContactText = styled(MyTypography)`
  color: ${(props) =>
    props.colormode === DARK_THEME ? PRIMARY_GREY_TEXT : SECONDARY_GREY_TEXT};
`;

const ContactButton = styled(Button)`
  && {
    margin-top: 4%;
    font-family: ${PRIMARY_FONT};
    padding: 1% 0%;
    width: 15%;
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
