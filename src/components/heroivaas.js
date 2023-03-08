import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contact from "../pages/contact";
import { Link } from "gatsby";

function HeroIvaas() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div className="heroivaas-container">
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: -20 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        <h1> Intelligent Venue As A Service </h1>
        <p>
          Intelligent Venue As A Service Accenture’s analytics services and
          solutions can help any organization grow and differentiate themselves
          against competition. We identify use cases that can deliver against
          your business priorities and create analytics solutions with the right
          talent and technologies to suit your needs. Your data’s destiny is one
          that can be leveraged to lift performance, resilience,
        </p>
      </motion.div>
    </div>
  );
}

export default HeroIvaas;
