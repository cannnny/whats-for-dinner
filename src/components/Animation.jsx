import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animation = ({ children, initialAnimation }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="animation"
        initial={initialAnimation}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
        className="splash"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animation;
