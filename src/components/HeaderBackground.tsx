import React, { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import loaderContext from "../contexts/loader";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
  },
  iframe: {
    width: "100%",
  },
  wrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: -1,
  },
  hideLogo: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "100px",
    height: "100px",
  },
}));

const HeaderBackground = () => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          delay: 3,
          type: "spring",
          stiffness: 160,
          damping: 20,
        },
      });
    } else {
      controls.start({ opacity: 0, x: 50 });
    }
  }, [isLoading, controls]);

  return (
    <motion.div animate={controls} className={classes.wrapper}>
      <div className={classes.container}>
        <iframe
          title="background-3d"
          src="https://my.spline.design/noisedisplacecopy-43eeb91d2b4b92378f4d5e71ae2d6262/"
          frameBorder="0"
          height="100%"
          className={classes.iframe}
        ></iframe>
        ;
        <div className={classes.hideLogo} />
      </div>
    </motion.div>
  );
};

export default HeaderBackground;
