import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import Intro from "../assets/Intro";
import LoaderContext from "../contexts/loader";
import zIndex from "@material-ui/core/styles/zIndex";

const LoaderContainer = () => {
  const { setIsLoading } = useContext(LoaderContext);
  const classes = useStyles();
  return (
    <motion.div
      initial={{
        x: 0,
      }}
      animate={{
        x: "-100vw",
      }}
      transition={{
        delay: 3.2,
        duration: 0.3,
      }}
      onAnimationComplete={(definition) => {
        setIsLoading(false);
      }}
      className={classes.container}
    >
      <div className={classes.content}>
        <Intro width={250} />
      </div>
    </motion.div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0593FB",
    zIndex: zIndex.drawer + 1,
  },
  content: {
    margin: "0 auto",
  },
}));

export default LoaderContainer;
