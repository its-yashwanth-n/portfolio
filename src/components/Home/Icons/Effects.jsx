import React from "react";
import { IconContext } from "react-icons";
import { SoundIcon, ThemeIcon } from "../../common/Icons";
import { IconsDiv, ListItems, StyledList } from "../../common/commonStyles";
import {
  LAPTOP_SIZE,
  SoundLabel,
  ThemeLabel,
} from "../../../assets/common/commonProperties";

const Effect = () => {
  return (
    <IconsDiv style={{ right: "40px" }} id="effectDiv" orientation="right">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <ThemeIcon iconSize={LAPTOP_SIZE} ariaLabel={ThemeLabel} />
          </ListItems>
          <ListItems>
            <SoundIcon iconSize={LAPTOP_SIZE} ariaLabel={SoundLabel} />
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </IconsDiv>
  );
};

export default Effect;
