import React from 'react';
import MansoryLayout from '../Mansory/MansoryLayout';
import MansoryItem from '../Mansory/MansoryItem';
import { projectsData } from './projectsData';

const Projects: React.FC = () => {
  return (
    <div>
      <h1 className="intro__text">Projects</h1>
      <MansoryLayout>
        {projectsData.map((project, index) => (
          <MansoryItem key={index} item={project} />
        ))}
      </MansoryLayout>
    </div>
  );
};

export default Projects;