import React, { createContext } from "react";

export default createContext({
  isDarkMode: true,
  setIsDarkMode: (value: boolean) => {}
});
