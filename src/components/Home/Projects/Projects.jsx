import { Grid, Paper, Typography } from "@mui/material";
import { HomeElement } from "../../common/commonStyles";

export const Projects = ({ height }) => {
  return (
    <HomeElement
      id="projects-section"
      name="projects"
      style={{ height: height }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Typography>Project 1</Typography>
          <Paper></Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography>Project 2</Typography>
        </Grid>
      </Grid>
    </HomeElement>
  );
};
