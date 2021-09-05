import { createContext } from "react";

export default createContext({
  isLoading: true,
  setIsLoading: (value: boolean) => {},
});
