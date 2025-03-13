import React from 'react';
import styled from 'styled-components';

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <div className="content-wrapper">
        <h1 className="intro__text">Contact.</h1>
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

    input, textarea {
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 5px;
    }

    button {
      background-color: var(--primary);
      color: #fff;
      border: none;
      padding: 0.75rem;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: var(--primary-dark);
      }
    }
  }
`;

export default Contact;
