import { Grid, Paper, Typography } from "@mui/material";
import { HomeElement } from "../../common/CommonStyles";

export const Contact = ({ minHeight }) => {
  return (
    <HomeElement
      id="contact-section"
      name="contact"
      style={{ minHeight: minHeight }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Typography>Contact 1</Typography>
          <Paper></Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography>Contact 2</Typography>
        </Grid>
      </Grid>
    </HomeElement>
  );
};
