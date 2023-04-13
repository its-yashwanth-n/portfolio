import React from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { Contact } from "../components/Home/Contact/Contact";
import { Experience } from "../components/Home/Experience/Experience";
import { Intro } from "../components/Home/Intro/Intro";
import { Projects } from "../components/Home/Projects/Projects";
import { Skills } from "../components/Home/Skills/Skill";
import { Container } from "@mui/material";
import styled from "styled-components";
import { ScrollIndicator } from "../components/Home/Icons/ScrollIndicator";
import Social from "../components/Home/Icons/Social";
import Effect from "../components/Home/Icons/Effects";
import Footer from "../components/Footer/Footer";

export const Home = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Social />
      <Effect />
      <MainContainer id="main-content" maxWidth="xl">
        <Intro height={"100vh"} />
        {/* <ScrollIndicator height={"10vh"} /> */}
        <Skills height={"100vh"} />
        <Experience height={"100vh"} />
        <Projects height={"100vh"} />
        <Contact height={"100vh"} />
      </MainContainer>
      <Footer />
    </React.Fragment>
  );
};

const MainContainer = styled(Container)`
  display: flex;
  align-items: center;
`;
