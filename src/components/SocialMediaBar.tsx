import React, { useEffect, useContext } from "react";

import { makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import loader from "../contexts/loader";
import { GitHub, LinkedIn, Instagram, Email } from "@material-ui/icons";
import CustomIconButton from "./IconButton";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { socialMedia } from "../data/data";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "fixed",
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
    zIndex: 100,
  },
  mobileWrapper: {
    display: "flex",
  },
}));

interface SocialMediaBarProps {
  mobile?: boolean;
}

const SocialMediaBar = ({ mobile }: SocialMediaBarProps) => {
  const classes = useStyles();
  const { isLoading } = useContext(loader);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.8 + i * 0.1,
        },
      }));
    } else {
      controls.start({ opacity: 0, y: 0 });
    }
  }, [isLoading, controls]);

  if (mobile) {
    return (
      <div className={classes.mobileWrapper}>
        <CustomIconButton icon={GitHub} m={1} href={socialMedia.githubHref} />
        <CustomIconButton
          icon={Instagram}
          m={1}
          href={socialMedia.instagramHref}
        />
        <CustomIconButton
          icon={LinkedIn}
          m={1}
          href={socialMedia.linkedinHref}
        />
        <CustomIconButton icon={Email} m={1} href={socialMedia.emailHref} />
      </div>
    );
  } else {
    return (
      <motion.div className={classes.wrapper}>
        <motion.div animate={controls} custom={0}>
          <CustomIconButton icon={GitHub} m={1} href={socialMedia.githubHref} />
        </motion.div>
        <motion.div animate={controls} custom={2}>
          <CustomIconButton
            icon={LinkedIn}
            m={1}
            href={socialMedia.linkedinHref}
          />
        </motion.div>
        <motion.div animate={controls} custom={1}>
          <CustomIconButton
            icon={Instagram}
            m={1}
            href={socialMedia.instagramHref}
          />
        </motion.div>
        <motion.div animate={controls} custom={3}>
          <CustomIconButton icon={Email} m={1} href={socialMedia.emailHref} />
        </motion.div>
        <motion.div animate={controls} custom={4}>
          <DarkModeSwitcher />
        </motion.div>
      </motion.div>
    );
  }
};

export default SocialMediaBar;
