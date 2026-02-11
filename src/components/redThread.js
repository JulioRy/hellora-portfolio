import React from "react";
import { motion } from "framer-motion";

const RedThread = ({ isVisible, delay = 2.4 }) => {
  return (
    <div className="thread-connector">
      <motion.img
        src={require("../images/akai.png")}
        alt=""
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        animate={
          isVisible
            ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
            : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
        }
        transition={{
          duration: 2.0,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay,
        }}
      />
    </div>
  );
};

export default RedThread;