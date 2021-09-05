import { motion } from "framer-motion";
import React from "react";
import Home from "../components/Home";

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
      {/* About */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </motion.main>
  );
};

export default HomePage;
