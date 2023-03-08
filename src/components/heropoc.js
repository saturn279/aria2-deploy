import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contact from "../pages/contact";
import { Link } from "gatsby";

function HeroPoc() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div className="heropoc-container">
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: -20 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        <h1> Proof Of Concept </h1>
      </motion.div>
    </div>
  );
}

export default HeroPoc;
