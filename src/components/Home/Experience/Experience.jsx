import { Grid, Paper, Typography } from "@mui/material";
import { HomeElement } from "../../common/CommonStyles";

export const Experience = ({ minHeight }) => {
  return (
    <HomeElement
      id="experience-section"
      name="experience"
      style={{ minHeight: minHeight }}
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
