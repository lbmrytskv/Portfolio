import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Home: React.FC = () => {
  return (
    <FlexContainer>
      <TextContainer
        as={motion.div}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.h1 className="intro__text">Welcome to My Portfolio</motion.h1>
        <motion.p>
          Hello, I'm <StyledNavLink to="/about">Liubomyr Yatskiv</StyledNavLink>, a Frontend Developer who loves building modern, responsive, and user-friendly web applications.
          On this website you can explore my <StyledNavLink to="/projects">Projects</StyledNavLink>, get to know a little more <StyledNavLink to="/about">About me</StyledNavLink>  or 
          <StyledNavLink to="/contact"> Contact Me</StyledNavLink> for collaborations. Would be happy to connect!
        </motion.p>
      </TextContainer>
      <ImageContainer
  as={motion.div}
  initial="initial"
  animate="animate"
  variants={fadeInUp}
>
  <motion.img
    src="/images/Home2-cropped-optimized.svg"
    alt="Portfolio Illustration"
  />
</ImageContainer>
    </FlexContainer>
  );
};

/* ---------------------------- Styles ---------------------------- */

const FlexContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  gap: 4rem;

  
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
   

    &::before {
      font-size: 3rem;
      letter-spacing: 0.5rem;
    }
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  max-width: 600px;

  .intro__text {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-left: 3vw;

    @media (max-width: 1024px) {
      font-size: 2.2rem;
      margin-left: 3vw;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-left: 0;
    }
  }

  p {
    font-size: 1.4rem;
    max-width: 80%;
    margin-left: 3vw;

    @media (max-width: 1024px) {
      font-size: 1.2rem;
      margin-left: 3vw;
      max-width: 90%;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-left: 0; 
      max-width: 95%;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  max-width: 600px;

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 90vh;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      max-width: 80%;
      max-height: 50vh;
      margin-left: 4rem;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  transition: text-decoration 0.3s ease-in-out;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export default Home;