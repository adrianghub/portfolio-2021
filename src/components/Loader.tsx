import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import LoaderContext from "../contexts/loader";
import zIndex from "@material-ui/core/styles/zIndex";
import logoIcon from "../assets/logo-icon.svg";

const LoaderContainer = () => {
  const { setIsLoading } = useContext(LoaderContext);
  const classes = useStyles();
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: "-100vh",
      }}
      transition={{
        delay: 2.2,
        duration: 0.3,
      }}
      onAnimationComplete={() => {
        setIsLoading(false);
      }}
      className={classes.container}
    >
      <img src={logoIcon} />
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
