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
    <FlexContainer>
      <TextContainer
        as={motion.div} 
        initial="initial" 
        animate="animate" 
        variants={fadeInUp}
      >
        <motion.h1 className="intro__text">Welcome to My Portfolio</motion.h1>
        <motion.p>
          I am a Frontend Developer passionate about building user-friendly and modern web applications.
          Explore my <StyledNavLink to="/projects">Projects</StyledNavLink> or{' '}
          <StyledNavLink to="/contact">Contact Me</StyledNavLink> for collaborations.
        </motion.p>
      </TextContainer>
      <ImageContainer>
        
        <motion.img
          src="/images/Home2-cropped.svg"
          alt="Portfolio Illustration"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }}
        />
      </ImageContainer>
    </FlexContainer>
  );
};

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
  max-width: 1500px; 
  margin: 0 auto; 
  overflow: hidden;
  
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 42%; 
  text-align: left;
  margin-left: 2.8rem;
 

  .intro__text {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    max-width: 500px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem; 
  margin-bottom: 50px;
  
 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    
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
