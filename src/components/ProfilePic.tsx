import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../assets/profile-pic.jpg";

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius: "5%",
    width: "220px",
    height: "300px",
    objectFit: "cover",
    boxShadow: theme.shadows[10],
  },
}));

const Avatar = () => {
  const classes = useStyles();
  return (
    <img src={AvatarImg} alt="Adrian Zinko" className={classes.avatarImg} />
  );
};

export default Avatar;
