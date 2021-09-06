import React, { useState, useEffect, useContext } from "react";
import { Tab, Tabs, Button, makeStyles, withStyles, Link as MuiLink, LinkProps } from "@material-ui/core";
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

const StyledTabs = withStyles({
    indicator: {
        "& > span": {
            maxWidth: 20,
        },
    },
})((props) => <Tabs {...props} variant="fullWidth" TabIndicatorProps={{ children: <span /> }} />);

const AnimatedLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <motion.div ref={ref as any} custom={props.custom} animate={props.animate}>
        <Link innerRef={ref as any} {...smoothScrollProps} {...props} />
    </motion.div>
));

const CustomMuiLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <MuiLink innerRef={ref as any} {...props} />
  ));

const Menu = () => {
    const classes = useStyles();
    const [value, setValue] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const { isLoading } = useContext(LoaderContext);
    const controls = useAnimation();

    useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {
            setIsScrolling(true);
        });

        Events.scrollEvent.register("end", (to, element) => {
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

    const handleChange = (event: any, newValue: boolean | ((prevState: boolean) => boolean)) => {
        setValue(newValue);
    };

    const spyHandleChange = (index: any) => {
        if (!isScrolling) {
            setValue(index);
        }
    };

    return (
        <div className={classes.wrapper}>
            <StyledTabs
                className={classes.tabs}
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <StyledTab
                    component={AnimatedLink}
                    custom={0}
                    animate={controls}
                    to="about"
                    label="About"
                    onSetActive={() => spyHandleChange(0)}
                    onSetInactive={()=>spyHandleChange(false)}
                />
                <StyledTab
                    component={AnimatedLink}
                    animate={controls}
                    custom={1}
                    to="skills"
                    label="skills"
                    onSetActive={() => spyHandleChange(1)}
                />
                <StyledTab
                    component={AnimatedLink}
                    animate={controls}
                    custom={2}
                    to="projects"
                    label="projects"
                    onSetActive={() => spyHandleChange(2)}
                />
                <StyledTab
                    component={AnimatedLink}
                    animate={controls}
                    custom={3}
                    to="contact"
                    label="contact"
                    onSetActive={() => spyHandleChange(3)}
                />
            </StyledTabs>
            <motion.div custom={4} animate={controls}>
                <Button
                    component={CustomMuiLink}
                    href="/resume.pdf"
                    variant="outlined"
                    color="primary"
                    underline="none"
                >
                    Resume
                </Button>
            </motion.div>
        </div>
    );
};

export default Menu;