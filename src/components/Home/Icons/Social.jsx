import React from "react";
import { IconContext } from "react-icons";
import { IconsDiv, ListItems, StyledList } from "../../common/CommonStyles";
import {
  LAPTOP_SIZE,
  GITHUB_LINK,
  LINKEDIN_LINK,
  GITHUB_LABEL,
  LINKEDIN_LABEL,
  githubId,
  linkedInId,
} from "../../common/CommonConstants";
import { SocialIcons } from "../../common/Icons";

const Social = () => {
  return (
    <IconsDiv id="social-icons" orientation="left">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <SocialIcons
              iconId={linkedInId}
              iconLink={LINKEDIN_LINK}
              iconSize={LAPTOP_SIZE}
              ariaLabel={LINKEDIN_LABEL}
            />
          </ListItems>
          <ListItems>
            <SocialIcons
              iconId={githubId}
              iconLink={GITHUB_LINK}
              iconSize={LAPTOP_SIZE}
              ariaLabel={GITHUB_LABEL}
            />
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </IconsDiv>
  );
};

export default Social;
