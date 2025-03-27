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
        <h1 className="intro__text">About Me</h1>
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
                I work with JavaScript(ES6+), 
                HTML5, CSS3, React, React Router and Redux Toolkit. Lately I have finished an internship in EPAM systems with Angular and Typescript. 
                Also I have an experience with backend API integrating, using Nest.js.  I handled user authentication, protected routes, and data fetching
                using secure HTTP requests (including Bearer tokens). As a developer, who enjoys building seamless and visually appealing web experiences,
                I like to work with Figma and Canva to create designs and prototypes. 

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
                Here you can take a look at some of my projects, which are deployed on Netlify and Render. Right now I work on a new project, so check out for an updates!
              </p>
            </li>
            <li>
              <div>
                  Education <Education />
              </div>
              
              <p>
                I graduated from Cracow AGH University, where I've got my master's degree with "good" grade in Drililng of oil and gas wells and Geoengineering.This gave me a soild
                background in engineering and problem solving, which I apply to my work as a developer.
              </p>
            </li>

            <li>
              <div>
                  Interests <Interests />
              </div>
              
              <p>
                I am very active and passionate person. I like to travel and expore new places, I have visited about 30 countries and during last year I've organised more than 10 group trips as a guide. 
                You can check more at my <a href="https://www.instagram.com/koordyna.ty/" target="_blank" rel="noopener noreferrer">Instagram</a>. I also keen on Web3 and blockchain technologies.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </PageSection>
  );
};


/* ---------------------------- Styles ---------------------------- */

const PageSection = styled.div`
  padding: 2rem 1rem;
  max-width: 900px;
  margin:-10px auto 0 auto;

  .content-wrapper {
    max-width: 850px;
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
