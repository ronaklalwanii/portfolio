import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={staggerContainer()}
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0 ${styles.padding}`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
