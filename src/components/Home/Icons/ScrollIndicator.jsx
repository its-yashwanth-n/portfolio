import { Container, Grid } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { ModeContext } from "../../../App";
import { useContext } from "react";
import { DARK_THEME } from "../../../assets/common/commonProperties";
import {
  PRIMARY_TXT_COLOR,
  SECONDARY_TXT_COLOR,
} from "../../common/commonStyles";

export const ScrollIndicator = ({ height }) => {
  const { colorMode } = useContext(ModeContext);
  return (
    <MouseContainer id="mouse-indicator" style={{ height: height }}>
      <Grid>
        <Grid item xs={12}>
          <AniWrap>
            <Mouse colorMode={colorMode}>
              <Scroller colorMode={colorMode} />
            </Mouse>
          </AniWrap>
        </Grid>
      </Grid>
    </MouseContainer>
  );
};

const MouseContainer = styled(Container)`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const scrolls = keyframes`
	0% { top: 18px; opacity: 1; height: 4px; }
	95% { top: 5px; opacity: 0; height: 8px; }
	100% { top: 18px; opacity: 1; height: 4px; }
`;

const AniWrap = styled.div`
  margin: 10px auto;
  display: block;
  width: 28px;
`;

const Mouse = styled.div`
  width: 28px;
  height: 50px;
  border: 3px solid
    ${(props) =>
      props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  border-radius: 14px;
`;

const Scroller = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${(props) =>
    props.colorMode === DARK_THEME ? PRIMARY_TXT_COLOR : SECONDARY_TXT_COLOR};
  position: relative;
  top: 10px;
  left: 12px;
  animation: ${scrolls} 1.3s ease-out infinite;
  -webkit-animation: ${scrolls} 1.3s ease-out infinite;
`;
