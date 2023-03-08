import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contact from "../pages/contact";
import { Link } from "gatsby";

function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div className="hero-container">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="../assets/css/main.css" />
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: -20 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        <h1> RPS </h1>
        <h2> Emerging Technologies</h2>
        <div className="hero-btns">
          <Link to="/contact">
            <button class="button">
              Contact Us<i class="ri-arrow-right-line"></i>
            </button>
          </Link>
        </div>
      </motion.div>

      {/* <p>jfuyfujgjh</p> */}
      {/* <div className="hero-btns"> */}
      {/* <div justify-content="left"></div> */}
      {/* </div> */}
    </div>
  );
}

export default HeroSection;
