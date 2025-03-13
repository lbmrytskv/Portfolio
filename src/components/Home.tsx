import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <ContentWrapper>
      <motion.h1 className="intro__text">
        Welcome to My Portfolio
      </motion.h1>
      <motion.p>
        I am a Frontend Developer passionate about building user-friendly and modern web applications.
        Explore my <strong>Projects</strong> or <strong>Contact Me</strong> for collaborations.
      </motion.p>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  text-align: center;

  .intro__text {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default Home;
