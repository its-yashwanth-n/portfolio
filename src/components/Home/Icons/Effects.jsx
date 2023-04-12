import React from "react";
import { IconContext } from "react-icons";
import { SoundIcon, ThemeIcon } from "./Icons";
import { IconsDiv, ListItems, StyledList } from "../../common/CommonStyles";
import { LAPTOP_SIZE } from "../../common/CommonConstants";

const Effect = () => {
  return (
    <IconsDiv
      style={{ right: "40px" }}
      id="effect-icons-div"
      orientation="right"
    >
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <ThemeIcon iconSize={LAPTOP_SIZE} />
          </ListItems>
          <ListItems>
            <SoundIcon iconSize={LAPTOP_SIZE} />
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </IconsDiv>
  );
};

export default Effect;
