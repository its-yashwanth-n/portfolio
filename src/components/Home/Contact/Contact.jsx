import { Grid, Paper, Typography } from "@mui/material";
import { HomeContainer, HomeElement } from "../../common/commonStyles";

export const Contact = ({ height }) => {
  return (
    <HomeElement id="contact-section" name="contact" style={{ height: height }}>
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
