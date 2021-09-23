import React from "react";
import { motion } from "framer-motion";
import Home from "../components/Home";
import About from "../sections/About";
import TechStack from "../sections/TechStack";
import Projects from "../sections/Projects";

const HomePage = () => {
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
      <About />
      <TechStack />
      <Projects />
      {/* Contact */}
    </motion.main>
  );
};

export default HomePage;
