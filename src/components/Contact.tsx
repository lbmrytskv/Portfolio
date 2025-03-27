import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('mldjlkgw');

  return (
    <ContactSection
      as={motion.div}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="content-wrapper">
        <h1 className="intro__text">Contact</h1>
        <p>
          Get in touch or shoot me on email directly at{' '}
          <b>liubomyryatskiv97@gmail.com</b>
        </p>

        {state.succeeded ? (
          <p className="success-message">✅ Thank you! Your message was sent.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </ContactSection>
  );
};

/* ---------------------------- Styles ---------------------------- */

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
  .success-message {
    color: green;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
    margin: 0 auto;

    input,
    textarea {
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
      cursor: pointer;

      &:hover {
        background-color: var(--primary-dark);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`;

export default Contact;
