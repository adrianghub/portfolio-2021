import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import Intro from "../assets/IntroDot";
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
        delay: 4.2,
        duration: 0.3,
      }}
      onAnimationComplete={() => {
        setIsLoading(false);
      }}
      className={classes.container}
    >
      <Intro />
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
    backgroundColor: "#000",
    zIndex: zIndex.drawer + 1,
    margin: "0 auto",
  },
}));

export default LoaderContainer;
