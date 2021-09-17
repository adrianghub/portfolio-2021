import React from "react";
import {
  useTheme,
  Grid,
  Typography,
  makeStyles,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import SectionContainer from "./SectionContainer";
import ProfilePic from "../components/ProfilePic";

const useStyles = makeStyles((theme) => ({
  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SectionContainer id="about" title="About" maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        {isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Box mb={6}>
              <ProfilePic />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          className={classes.gridItemWrapper}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          <Box mb={3}>
            <Typography variant="h6">
              <i>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat architecto quis similique aspernatur laboriosam iusto,
                harum ab labore amet nemo illum molestiae ratione delectus
                ipsum. In nam itaque quibusdam, cumque iusto deleniti soluta
                error, perferendis quaerat consequuntur quae fugit dolor ipsa
                voluptatem. Repudiandae maiores ratione suscipit at! Accusamus,
                neque vitae.
              </i>
            </Typography>
          </Box>
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <ProfilePic />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};

export default About;
