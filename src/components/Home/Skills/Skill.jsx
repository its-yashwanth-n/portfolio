import { Grid, Paper, Typography } from "@mui/material";
import { HomeElement } from "../../common/commonStyles";

export const Skills = ({ height }) => {
  return (
    <HomeElement id="skills-section" name="skills" style={{ height: height }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Typography>Skill 1</Typography>
          <Paper></Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography>Skill 2</Typography>
        </Grid>
      </Grid>
    </HomeElement>
  );
};
