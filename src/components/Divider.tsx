import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline",
    // @ts-ignore
    width: (props) => (props.fullWidth ? "100%" : props.width),
    height: "1px",
    backgroundColor: "#93A0D2",
  },
}));

interface DividerProps {
  fullWidth?: boolean;
  width?: string;
}

const Divider = ({ fullWidth, width, ...rest }: DividerProps) => {
  const classes = useStyles({ fullWidth, width });
  return <div className={classes.root} {...rest}></div>;
};

export default Divider;
