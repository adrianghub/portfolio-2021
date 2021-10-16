import React, { useContext, useEffect } from "react";
import {
  makeStyles,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Divider from "../components/Divider";
import ThemeContext from "../contexts/theme";

interface SectionContainerProps {
  id?: string;
  children: any;
  maxWidth: string;
  full?: boolean;
  reverse?: boolean;
  title: string;
  icon?: string;
  padding?: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    // @ts-ignore
    paddingTop: (props) => (props.padding ? `${props.padding}px` : "80px"),
    // @ts-ignore
    paddingBottom: (props) => (props.padding ? `${props.padding}px` : "80px"),
  },
  titleContainer: {
    paddingBottom: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  },
  title: {
    margin: theme.spacing(0, 4),
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },

  titleIconWrapper: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(0, 4),
  },
  titleIcon: {
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    marginRight: ".5rem",
  },
  iconBlueFilter: {
    filter:
      "invert(40%) sepia(54%) saturate(2329%) hue-rotate(186deg) brightness(100%) contrast(103%)",
  },
  iconBrownFilter: {
    filter:
      "invert(31%) sepia(9%) saturate(1441%) hue-rotate(282deg) brightness(98%) contrast(89%)",
  },
  childrenContainer: {
    minHeight: "100%",
  },
}));

const SectionContainer = ({
  children,
  maxWidth,
  full,
  reverse,
  title,
  icon,
  padding,
  ...rest
}: SectionContainerProps) => {
  const classes = useStyles({ full, maxWidth, padding });
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const [titleRef, titleInView] = useInView();
  const [contentRef, contentInView] = useInView();
  const { isDarkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (contentInView) {
      contentControls.start("visible");
    }
  }, [contentControls, contentInView]);

  return (
    <Container component="section" className={classes.container} {...rest}>
      {title && (
        <motion.div
          ref={titleRef}
          animate={titleControls}
          initial="hidden"
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: reverse ? 0 : 0 },
          }}
          className={classes.titleContainer}
        >
          {!isMobile && <Divider width="20%" />}
          {icon ? (
            <div className={classes.titleIconWrapper}>
              <Typography
                variant="h4"
                color="initial"
                className={classes.titleIcon}
              >
                {title}
              </Typography>
              <img
                src={icon}
                className={
                  isDarkMode ? classes.iconBlueFilter : classes.iconBrownFilter
                }
                style={{ maxWidth: "40px", marginRight: "20px" }}
              />
            </div>
          ) : (
            <Typography variant="h4" color="initial" className={classes.title}>
              {title}
            </Typography>
          )}
          {!isMobile && <Divider fullWidth />}
        </motion.div>
      )}
      <motion.div
        ref={contentRef}
        animate={contentControls}
        initial="hidden"
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
          when: "beforeChildren",
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default SectionContainer;
