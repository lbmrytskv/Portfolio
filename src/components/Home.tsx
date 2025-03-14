import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

// Анімація появи (fade-in + рух вгору)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, 
};

const Home: React.FC = () => {
  return (
    <ContentWrapper 
      as={motion.div} 
      initial="initial" 
      animate="animate" 
      variants={fadeInUp}
    >
      <motion.h1 className="intro__text">
        Welcome to My Portfolio
      </motion.h1>
      <motion.p>
        I am a Frontend Developer passionate about building user-friendly and modern web applications.
        Explore my <StyledNavLink to="/projects">Projects</StyledNavLink> or <StyledNavLink to="/contact">Contact Me</StyledNavLink> for collaborations.
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

const StyledNavLink = styled(NavLink)`
  color: inherit; /* Наслідує колір тексту */
  font-weight: bold;
  text-decoration: none;
  transition: text-decoration 0.3s ease-in-out;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export default Home;
