import React, { useContext, useEffect } from "react";
import { Container, Typography, Button, makeStyles, Theme } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import loader from "../contexts/loader";
import { Link } from "react-scroll";

interface CustomTheme extends Theme {
  navbarHeight: number;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: `calc( ${theme.spacing(4)}px + ${theme.navbarHeight} ) `,
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.navbarHeight,
    },
  },
  subtitle: {
    marginBottom: "16px",
    fontSize: "75px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const controls = useAnimation();
  const { isLoading } = useContext(loader);

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 1.2 },
      }));
    } else {
      controls.start({ opacity: 0, y: 5 });
    }
  }, [isLoading, controls]);

  return (
    <Container className={classes.container} id="home">
      <div>
        <Typography
          component={motion.div}
          animate={controls}
          custom={0}
          color="primary"
          variant="h5"
        >
          Hello, I'm Adrian
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={2}
          variant="h2"
          color="secondary"
          className={classes.subtitle}
        >
          JavaScript Developer
        </Typography>
        <motion.div animate={controls} custom={5}>
          {/* @ts-ignore */}
          <Button
            component={Link}
            spy
            smooth
            offset={0}
            duration={500}
            to="contact"
            variant="outlined"
            color="primary"
            size="large"
          >
            Contact me
          </Button>
        </motion.div>
      </div>
    </Container>
  );
};

export default Home;
