import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1320,
      xl: 1920,
    },
  },
  navbarHeight: "70px",
  mobileNavbarHeight: "55px",
  typography,
};

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#EDE4DA",
    },
    primary: {
      main: "#9E7777",
      contrastText: "#000",
    },
    secondary: {
      main: "#6F4C5B",
      contrastText: "rgb(230,230,230)",
    },
    text: {
      primary: "#000",
      secondary: "rgb(30,30,30)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  ...baseTheme,
});

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#2C2D44",
    },
    primary: {
      main: "#93A0D2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0593FB",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  ...baseTheme,
});

export { lightTheme, darkTheme };
