import * as React from "react";
import { motion } from "framer-motion";

const IntroDot = () => {
  return (
    <>
      <motion.div
            animate={{
                rotate: 360,
                borderRadius: [ "50% 50%", "2% 50%"],
                x: 75
            }}
            initial={{
                x: -75
            }}
            transition={{
                repeatType: 'mirror',
                repeat: 2,
                duration: 2,
                ease: "easeInOut",
            }}
            style={{
                height: "50px",
                background: "#0593FB",
                width: "50px",
                borderRadius: "2% 50%",
            }}
        >
        </motion.div>
    </>
  );
};

export default IntroDot;