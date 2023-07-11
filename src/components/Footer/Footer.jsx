import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { SlideInBtmAmt } from "../common/CommonAnimations";
import {
  GeneralText,
  PRIMARY_FONT,
  PRIMARY_TXT_COLOR,
  SECONDARY_TXT_COLOR,
} from "../common/CommonStyles";
import { ModeContext } from "../../App";
import { DARK_THEME } from "../common/CommonConstants";

export const Footer = () => {
  const { colorMode } = useContext(ModeContext);

  return (
    <StyledFooter variant="footer" id="footer">
      <FooterText colormode={colorMode} variant="body1" gutterBottom>
        Built by Yashwanth Nagaraju
      </FooterText>
    </StyledFooter>
  );
};

const StyledFooter = styled(Container)`
  && {
    max-width: 80vw;
    z-index: -1;
    min-height: 2vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    -webkit-animation: ${SlideInBtmAmt};
    animation: ${SlideInBtmAmt};
    font-size: 18px;
    font-family: ${PRIMARY_FONT};
  }
`;

const FooterText = styled(GeneralText)`
  && {
    margin-top: 1%;
    color: ${(props) =>
      props.colormode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  }
`;
