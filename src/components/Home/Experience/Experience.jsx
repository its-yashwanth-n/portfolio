import { Grid, Paper, Typography } from "@mui/material";
import { HomeElement } from "../../common/commonStyles";

export const Experience = ({ height }) => {
  return (
    <HomeElement
      id="experience-section"
      name="experience"
      style={{ height: height }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Typography>Experience 1</Typography>
          <Paper></Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography>Experience 2</Typography>
        </Grid>
      </Grid>
    </HomeElement>
  );
};
