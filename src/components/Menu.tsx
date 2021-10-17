import React, { useState, useEffect, useContext } from "react";
import {
  Tab,
  Tabs,
  Button,
  makeStyles,
  withStyles,
  Link as MuiLink,
  LinkProps,
} from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link, Events } from "react-scroll";
import LoaderContext from "../contexts/loader";

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  tabs: {
    marginRight: theme.spacing(4),
  },
  navMenuItem: {
    marginRight: theme.spacing(1),
  },
}));

const StyledTab = withStyles((theme) => ({
  root: {
    transition: ".2s",
    minWidth: 120,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const AnimatedLink = React.forwardRef<HTMLAnchorElement, any>((props, ref) => (
  <motion.div ref={ref as any} custom={props.custom} animate={props.animate}>
    {/* @ts-ignore */}
    <Link ref={ref as any} {...smoothScrollProps} {...props} />
  </motion.div>
));

const CustomMuiLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <MuiLink ref={ref as any} {...props} />
);

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = useState<boolean | number>(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isLoading } = useContext(LoaderContext);
  const controls = useAnimation();

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {
      setIsScrolling(true);
    });

    Events.scrollEvent.register("end", () => {
      setIsScrolling(false);
    });
  });

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.3 },
      }));
    } else {
      controls.start({ opacity: 0, y: -5 });
    }
  }, [isLoading, controls]);

  useEffect(() => {
    if (window.scrollY === 0) {
      setValue(false);
    }
  });

  const handleChange = (event: any, newValue: boolean | number) => {
    setValue(newValue);
  };

  const spyHandleChange = (index: boolean | number) => {
    if (!isScrolling) {
      setValue(index);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Tabs
        className={classes.tabs}
        value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        <StyledTab
          // @ts-ignore
          component={AnimatedLink}
          custom={0}
          to="about"
          label="About"
          onSetActive={() => spyHandleChange(0)}
        />
        <StyledTab
          // @ts-ignore
          component={AnimatedLink}
          custom={1}
          to="experience"
          label="experience"
          onSetActive={() => spyHandleChange(3)}
        />
        <StyledTab
          // @ts-ignore
          component={AnimatedLink}
          custom={2}
          to="tech-stack"
          label="tech stack"
          onSetActive={() => spyHandleChange(1)}
        />
        <StyledTab
          // @ts-ignore
          component={AnimatedLink}
          custom={3}
          to="projects"
          label="projects"
          onSetActive={() => spyHandleChange(2)}
        />
        <StyledTab
          // @ts-ignore
          component={AnimatedLink}
          custom={4}
          to="contact"
          label="contact"
          onSetActive={() => spyHandleChange(4)}
        />
      </Tabs>
      <motion.div custom={4} animate={controls}>
        {/* @ts-ignore */}
        <Button
          component={CustomMuiLink}
          href="/adrian-zinko-resume.pdf"
          variant="outlined"
          color="primary"
          underline="none"
          target="_blank"
        >
          Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default Menu;
