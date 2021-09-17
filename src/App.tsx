import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route } from "wouter";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, useMediaQuery, useTheme } from "@material-ui/core";
import ThemeContext from "./contexts/theme";
import LoaderContext from "./contexts/loader";
import { lightTheme, darkTheme } from "./theme/theme";

const Loader = lazy(() => import("./components/Loader"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Navbar = lazy(() => import("./components/Navbar"));

import "./App.css";
import SocialMediaBar from "./components/SocialMediaBar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <Suspense fallback={<></>}>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Loader />
            <Navbar />
            {!isMobile && <SocialMediaBar />}
            <Route path="/" component={HomePage} />
          </ThemeProvider>
        </LoaderContext.Provider>
      </ThemeContext.Provider>
    </Suspense>
  );
};

export default App;
