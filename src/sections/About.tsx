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

import aboutIcon from "../assets/about.svg";

const useStyles = makeStyles(() => ({
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
    <SectionContainer id="about" title="About" icon={aboutIcon} maxWidth="md">
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
                Some people say we love to talk about ourselves. I enjoy doing
                rather than talking. Let the results of my work speak for
                themselves. There is always room for improvement.
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
