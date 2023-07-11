import { Grid } from "@mui/material";
import { HomeElement } from "../../common/CommonStyles";
import { SkillCard } from "./SkillCard";
import { skillList } from "./SkillList";
import styled from "styled-components";

export const Skills = ({ minHeight }) => {
  return (
    <HomeElement
      id="skills-section"
      name="skills"
      style={{ minHeight: minHeight }}
    >
      <SkillsGrid container spacing={0}>
        {/* {skillList.map((skill) => (
          <ChildGrid item xs={12} md={6} xl={4}>
            <SkillCard category={skill.category} skills={skill.skills} />
          </ChildGrid>
        ))} */}
      </SkillsGrid>
    </HomeElement>
  );
};

const SkillsGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const ChildGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;
