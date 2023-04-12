import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { createContext, useState } from "react";
import { DARK_THEME } from "./assets/common/commonProperties";
import {
  SECONDARY_TXT_COLOR,
  PRIMARY_BGD_COLOR,
  SECONDARY_BGD_COLOR,
  PRIMARY_TXT_COLOR,
} from "./components/common/commonStyles";

export const ModeContext = createContext();

function App() {
  const [colorMode, setColorMode] = useState(DARK_THEME);
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <ModeContext.Provider
      value={{ colorMode, setColorMode, isNavOpen, setNavOpen }}
    >
      <Appdiv className="App" id="App" colorMode={colorMode}>
        <Routes>
          {pageRoutes.map((page) => (
            <Route
              key={page.id}
              path={page.pathname}
              element={page.component}
            />
          ))}
        </Routes>
      </Appdiv>
    </ModeContext.Provider>
  );
}

export const pageRoutes = [
  {
    pathname: "/",
    exact: true,
    name: "Home",
    id: "home",
    component: <Home />,
  },
];

const Appdiv = styled.div`
  && {
    color: ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
    background-color: ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_BGD_COLOR : SECONDARY_BGD_COLOR};
    -webkit-transition: background-color 1.2s linear;
    -ms-transition: background-color 1.2s linear;
    transition: background-color 1.2s linear;
  }
`;

export default App;
