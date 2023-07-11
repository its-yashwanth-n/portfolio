import React from "react";
import styled from "styled-components";

import { NavigationBar } from "../components/Navigation/NavigationBar";
import { Contact } from "../components/Home/Contact/Contact";
import { Experience } from "../components/Home/Experience/Experience";
import { Intro } from "../components/Home/Intro/Intro";
import { Projects } from "../components/Home/Projects/Projects";
import { Skills } from "../components/Home/Skills/Skill";
import { Container } from "@mui/material";
import { ScrollIndicator } from "../components/Home/Icons/ScrollIndicator";
import Social from "../components/Home/Icons/Social";
import Effect from "../components/Home/Icons/Effects";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Social />
      <Effect />
      <MainContainer id="main-content" maxWidth="xl">
        <Intro minHeight={"100vh"} />
        <Skills minHeight={"100vh"} />
        <Experience minHeight={"100vh"} />
        <Projects minHeight={"100vh"} />
        <Contact minHeight={"80vh"} />
      </MainContainer>
      <Footer />
    </React.Fragment>
  );
};

const MainContainer = styled(Container)`
  display: flex;
  align-items: center;
`;
