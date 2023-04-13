import React, { useContext, useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { Sling as Hamburger } from "hamburger-react";
import { navRoutes } from "./navRoutes";
import { Link } from "react-scroll";
import { Box, Slide, useMediaQuery, useTheme } from "@mui/material";
import { Logo } from "./Logo";
import { ModeContext } from "../../App";
import {
  DARK_THEME,
  LINKEDIN_LABEL,
  GITHUB_LABEL,
  LINKEDIN_LINK,
  MOBILE_SIZE,
  GITHUB_LINK,
  linkedInId,
  githubId,
} from "../common/CommonConstants";
import {
  PRIMARY_GREY_TEXT,
  OtherFont,
  SECONDARY_TXT_COLOR,
  BLUE_COLOR,
  NAV_PRIMARY_BGD_COLOR,
  NAV_SECONDARY_BGD_COLOR,
  PRIMARY_BGD_COLOR,
  PURPLE_COLOR,
  SECONDARY_BGD_COLOR,
  PRIMARY_TXT_COLOR,
  SECONDARY_GREY_TEXT,
} from "../common/CommonStyles";
import { SocialIcons, SoundIcon, ThemeIcon } from "../common/Icons";

export const NavigationBar = () => {
  const { colorMode, isNavOpen, setNavOpen } = useContext(ModeContext);
  const theme = useTheme();
  const isMd = useMediaQuery(() => theme.breakpoints.down("md"));
  const [scrollPosition, setScrollPosition] = useState(0);

  const elementArray = [
    "intro-section",
    "skills-section",
    "projects-section",
    "experience-section",
    "contact-section",
  ];

  const handleClose = useCallback(() => {
    if (isNavOpen) {
      setNavOpen(false);
    }
  }, [isNavOpen, setNavOpen]);

  // TODO: REMOVE AFTER VERIFYING THE FUNCTIONALITY
  // const handleNav = useCallback(
  //   (elementId) => {
  //     console.log("Handle Nav");
  //     const element = document.getElementById(elementId);
  //     element.onclick = handleClose;
  //   },
  //   [handleClose]
  // );

  const handleBlur = useCallback((elementID, style) => {
    const element = document.getElementById(elementID);
    element.style.filter = style;
  }, []);

  function watchScroll() {
    window.addEventListener("scroll", handleClose);
  }

  //blur other elements when mobile nav bar is active
  useEffect(() => {
    if (isMd && isNavOpen) {
      elementArray.map((ele) => handleBlur(ele, "blur(4px)"));
    } else {
      elementArray.map((ele) => handleBlur(ele, "none"));
    }
  }, [isMd, isNavOpen, handleBlur]);

  // to close nav bar on scroll in mobile
  useEffect(() => {
    if (isNavOpen) {
      watchScroll();
      return () => {
        window.removeEventListener("scroll", handleClose);
      };
    }
  }, [isNavOpen, handleClose]);

  // to handle click away and escape
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    });

    // elementArray.forEach((ele) => handleNav(ele));
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [isNavOpen, handleClose]);

  // to hide and bring back the navigation bar based on scrolling
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (scrollPosition > currentScrollPos) {
        document.getElementById("navigation-bar").style.top = "0";
        document.getElementById("navigation-bar").style.transition = "0.5s";
      } else {
        document.getElementById("navigation-bar").style.top = "-15%";
        document.getElementById("navigation-bar").style.transition = "0.5s";
      }
      setScrollPosition(currentScrollPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <StyledAppBar
        id="navigation-bar"
        position="fixed"
        // component="nav"
      >
        <NavContainer maxWidth="inherit" sx={{ height: "fit-content" }}>
          <Toolbar disableGutters>
            <Logo isMobileDevice={isMd} />
            <StyledBox sx={{ display: { xs: "flex", md: "none" } }}>
              <Hamburger
                id="mobile-hamburger-icon"
                style={{ display: "flex-end" }}
                toggled={isNavOpen}
                toggle={setNavOpen}
                duration={0.8}
                size={26}
                color={
                  colorMode === DARK_THEME
                    ? PRIMARY_TXT_COLOR
                    : SECONDARY_TXT_COLOR
                }
              />
            </StyledBox>
            <StyledBox
              sx={{ display: { xs: "none", md: "flex" }, gap: "1.5vw" }}
            >
              {navRoutes.map((navElement) => (
                <NavText
                  key={navElement.id}
                  colorMode={colorMode}
                  open={isNavOpen}
                  fontSize={{ md: "24px", lg: "28px" }}
                >
                  <HomeLink
                    key={navElement.id}
                    to={navElement.to}
                    tabIndex={1}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {navElement.name}
                    <Span colorMode={colorMode}>( )</Span>
                  </HomeLink>
                </NavText>
              ))}
            </StyledBox>
          </Toolbar>
        </NavContainer>
      </StyledAppBar>
      <Slide
        id="mobile-navigation-bar"
        direction="left"
        in={isNavOpen}
        mountOnEnter
        unmountOnExit
      >
        <SideNav id="mobile-nav-aside" colorMode={colorMode} open={isNavOpen}>
          <MobileNav>
            {navRoutes.map((navElement) => (
              <>
                <NavText
                  key={navElement.id}
                  colorMode={colorMode}
                  open={isNavOpen}
                  fontSize={{ xs: "2.25rem", sm: "2.5rem" }}
                >
                  <HomeLink
                    key={navElement.id}
                    to={navElement.to}
                    spy={true}
                    smooth={true}
                    onClick={handleClose}
                    duration={500}
                    tabIndex={1}
                  >
                    {navElement.name}
                    <Span colorMode={colorMode}>( )</Span>
                  </HomeLink>
                </NavText>
              </>
            ))}
            <IconContainer id="mobile-icons-div">
              <SocialIcons
                iconId={linkedInId}
                iconLink={LINKEDIN_LINK}
                iconSize={MOBILE_SIZE}
                ariaLabel={LINKEDIN_LABEL}
              />
              <SocialIcons
                iconId={githubId}
                iconLink={GITHUB_LINK}
                iconSize={MOBILE_SIZE}
                ariaLabel={GITHUB_LABEL}
              />
              <ThemeIcon iconSize={MOBILE_SIZE} />
              <SoundIcon iconSize={MOBILE_SIZE} />
            </IconContainer>
          </MobileNav>
        </SideNav>
      </Slide>
    </>
  );
};

const StyledAppBar = styled(AppBar)`
  && {
    box-shadow: none;
    background-color: transparent;
    background-filter: blur(10px);
  }
`;

const NavContainer = styled(Container)`
  padding: 0vh 2.5vw !important;
`;

const StyledBox = styled(Box)`
  && {
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
  }
`;

const NavText = styled(OtherFont)`
  && {
    color: ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_GREY_TEXT : SECONDARY_GREY_TEXT};
    &:hover {
      color: ${(props) =>
        props.colorMode === DARK_THEME
          ? PRIMARY_TXT_COLOR
          : SECONDARY_TXT_COLOR};
    }
  }
`;

const HomeLink = styled(Link)`
  cursor: pointer;
`;

const SideNav = styled.aside`
  &&& {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    right: 0;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    background-color: ${(props) =>
      props.colorMode === DARK_THEME
        ? NAV_PRIMARY_BGD_COLOR
        : NAV_SECONDARY_BGD_COLOR};
    overflow-x: hidden;
    box-shadow: -10px 0px 30px -15px ${(props) => (props.colorMode === DARK_THEME ? PRIMARY_BGD_COLOR : SECONDARY_BGD_COLOR)};
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const MobileNav = styled.nav`
  display: inline-flex;
  -webkit-display: inline-flex;
  -moz-box-pack: justify;
  -moz-box-align: center;
  align-items: center;
  flex-direction: column;
  gap: 10vh;
`;

const Span = styled.span`
  color: ${(props) =>
    props.colorMode === DARK_THEME ? BLUE_COLOR : PURPLE_COLOR};
`;

const IconContainer = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    gap: 6vw;
  }
`;
