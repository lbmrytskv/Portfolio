import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Зменшив тривалість до 0.5 сек
};

const Contact: React.FC = () => {
  return (
    <ContactSection 
      as={motion.div} 
      initial="initial" 
      animate="animate" 
      variants={fadeInUp}
    >
      <div className="content-wrapper">
        <h1 className="intro__text">Contact</h1>
        <p>Get in touch or shoot me an email directly at <b>yourmail@example.com</b></p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={5} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  .intro__text {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
    margin: 0 auto;
    
   

    input, textarea {
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 5px;
    }

    button {
    font-size: calc(var(--font-sm) + 1.1px);
    background: var(--cw);
    border: none;
    color: var(--bg);
    border-radius: 5px;
    padding: 15px 40px;
    margin-bottom: 3rem;
  

      &:hover {
        background-color: var(--primary-dark);
      }
    }
  }
`;

export default Contact;
