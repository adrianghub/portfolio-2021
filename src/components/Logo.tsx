import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import logoIconLight from "../assets/logo-icon-light.svg";

const Logo = () => {
  const classes = useStyles();
  return (
    <Link
      spy
      smooth
      duration={500}
      offset={-70}
      to="home"
      className={classes.root}
    >
      <img width="200" src={logoIconLight} />
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
}));

export default Logo;
