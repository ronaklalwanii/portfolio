import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

SectionWrapper;

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full shadow-card green-pink-gradient p-[1px] rounded-[20px]"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className="bg-tertiary flex justify-evenly items-center flex-col min-h-[280px] rounded-[20px] py-5 px-12"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-center text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a seasoned frontend developer with 4 years of experience building
        impressive admin templates. I specialize in React, Redux, Javascript,
        MUI, Bootstrap, and Nextjs. Let's work together to craft amazing user
        interfaces that exceed your expectations.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
