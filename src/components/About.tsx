import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, Projects, Interests, Education } from '../assets/Icons/Icons';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About: React.FC = () => {
  return (
    <PageSection
      as={motion.div}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="content-wrapper">
        <h1 className="intro__text">About Me.</h1>
        <article>
          <ul className="timeline">
            <li className="mt-2">
              <div>
                <a
                  href="https://github.com/lbmrytskv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engineering <small><Github /></small>
                </a>
              </div>
              <div className="sub-link">
                <a
                  href="https://github.com/lbmrytskv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </div>
              <p>
                Passionate about building clean, responsive websites. Experienced with frontend and backend technologies, and love solving real-world problems through code.
              </p>
            </li>

            <li>
              <div>
                <NavLink to="/projects">
                  Projects  <Projects />
                </NavLink>
              </div>
              <div className="sub-link">
                <NavLink to="/projects">
                  View Projects
                </NavLink>
              </div>
              <p>
                I enjoy shaping ideas into actual products. With design, coding, and logic combined, I help take concepts from zero to one.
              </p>
            </li>
            <li>
              <div>
                  Education <Education />
              </div>
              
              <p>
                Masters degree in Agh University
              </p>
            </li>

            <li>
              <div>
                  Interests <Interests />
              </div>
              
              <p>
                I’m not a traditional designer, but I enjoy refining styles and crafting intuitive interfaces that feel natural to use.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </PageSection>
  );
};

const PageSection = styled.div`
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;

  .content-wrapper {
    max-width: 8c00px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
  }


  ul.timeline {
    list-style-type: none;
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
    

    &:before {
      content: '';
      background: var(--timeline, #888);
      display: inline-block;
      position: absolute;
      left: 2px;
      width: 1.5px;
      top: 4px;
      height: 100%;
      z-index: 400;
      
      
    }

    li {
      margin: 3rem 0;
      padding-left: 20px;
      position: relative;
      text-align: left;

      &:before {
        content: '';
        background: var(--mark, #000);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--timeline-dot);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }

      a {
        display: inline-block;
        text-align: left;
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--text-color);
        margin: 0;
        padding: 0;
      }

      .sub-link a {
        display: inline-block;
        text-decoration: underline;
        font-size: 0.95rem;
        color: var(--text-color);
        margin-top: 0.25rem;
      }

      p {
        font-size: 1rem;
        margin-top: 0.8rem;
        line-height: 1.7;
        color: var(--text-color);
      }
    }
  }

  @media (max-width: 768px) {
    ul.timeline li a {
      display: block;
      margin-top: 0.5rem;
    }
  }

  
`;

export default About;
