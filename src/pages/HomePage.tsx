import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { motion } from "framer-motion";
import HeaderBackground from "../components/HeaderBackground";
import Home from "../components/Home";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Home />
      {/* About */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
      {isMobile && <HeaderBackground />}
    </motion.main>
  );
};

export default HomePage;
