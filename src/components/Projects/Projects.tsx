import React from 'react';
import MansoryLayout from '../Mansory/MansoryLayout';
import MansoryItem from '../Mansory/MansoryItem';
import { projectsData } from './projectsData';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Projects: React.FC = () => {
  return (
    <div>
      <motion.h1
        className="intro__text"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        Projects
      </motion.h1>

      <MansoryLayout>
        {projectsData.map((project, index) => (
          <MansoryItem key={index} item={project} />
        ))}
      </MansoryLayout>
    </div>
  );
};

export default Projects;










