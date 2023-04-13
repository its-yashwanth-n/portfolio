import { Container } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { DARK_THEME } from "../common/CommonConstants";
import {
  GeneralLink,
  PRIMARY_TXT_COLOR,
  SECONDARY_TXT_COLOR,
} from "../common/CommonStyles";
import { ModeContext } from "../../App";

const PORTFOLIO_LINK = "https://github.com/its-yashwanth-n/portfolio";

const Footer = () => {
  const { colorMode } = useContext(ModeContext);

  return (
    <MyFooter id="footer" as="footer" maxWidth="xl">
      <FooterLink colorMode={colorMode} href={PORTFOLIO_LINK} target="_blank">
        Built by Yashwanth Nagaraju
      </FooterLink>
    </MyFooter>
  );
};

export default Footer;

const MyFooter = styled(Container)`
  min-height: 2vh;
  padding: 2vh 0vh;
`;

const FooterLink = styled(GeneralLink)`
  &:hover {
    text-decoration: underline;
    color: ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  }
`;
