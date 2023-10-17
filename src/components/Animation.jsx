import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// 右から左に画面が流れるアニメーション
const Animation = ({ children, initialAnimation }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="animation"
        initial={initialAnimation}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animation;
