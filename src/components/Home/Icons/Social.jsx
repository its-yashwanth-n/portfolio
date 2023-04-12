import React from "react";
import { IconContext } from "react-icons";
import { IconsDiv, ListItems, StyledList } from "../../common/commonStyles";
import {
  LAPTOP_SIZE,
  githubID,
  githubLabel,
  linkedInID,
  linkedInLabel,
} from "../../../assets/common/commonProperties";
import { SocialIcons } from "../../common/Icons";
import { Github_Link, LinkedIn_Link } from "../../../assets/common/commonLinks";

const Social = () => {
  return (
    <IconsDiv id="socialDiv" orientation="left">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <SocialIcons
              iconId={linkedInID}
              iconLink={LinkedIn_Link}
              iconSize={LAPTOP_SIZE}
              ariaLabel={linkedInLabel}
            />
          </ListItems>
          <ListItems>
            <SocialIcons
              iconId={githubID}
              iconLink={Github_Link}
              iconSize={LAPTOP_SIZE}
              ariaLabel={githubLabel}
            />
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </IconsDiv>
  );
};

export default Social;
