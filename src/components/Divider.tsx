import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import ThemeContext from "../contexts/theme";

const useStyles = makeStyles(() => ({
  rootDark: {
    display: "inline",
    // @ts-ignore
    width: (props) => (props.fullWidth ? "100%" : props.width),
    height: "1px",
    backgroundColor: "#93A0D2",
  },
  rootLight: {
    display: "inline",
    // @ts-ignore
    width: (props) => (props.fullWidth ? "100%" : props.width),
    height: "1px",
    backgroundColor: "#6F4C5B",
  },
}));

interface DividerProps {
  fullWidth?: boolean;
  width?: string;
}

const Divider = ({ fullWidth, width, ...rest }: DividerProps) => {
  const classes = useStyles({ fullWidth, width });
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={isDarkMode ? classes.rootDark : classes.rootLight}
      {...rest}
    ></div>
  );
};

export default Divider;
