/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* ---------------------------- Icons ---------------------------- */
import { IconRight, Facebook, Linkedin, Github, Instagram } from "../assets/Icons/Icons";

interface IFooterProps {
  children?: string | React.ReactNode;
  goto?: string;
}

const Footer: React.FC<IFooterProps> = ({ children, goto }) => {
  return (
    <FooterContainer>
      {goto && (
        <NavLink to={goto} className="footer-link">
          <p>
            {children}
            <IconRight />
          </p>
        </NavLink>
      )}

      <SocialMedia>
        <a href="https://www.facebook.com/profile.php?id=100015444075186" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/in/liubomyr-yatskiv-6644741a9/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://github.com/lbmrytskv" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://www.instagram.com/koordyna.ty/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
      </SocialMedia>
    </FooterContainer>
  );
};

/* ---------------------------- Styles ---------------------------- */
const FooterContainer = styled.footer`
  text-align: center;
  padding: 1.2rem 0; /* ✅ Зменшена висота футера */
  background: var(--bg);
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1); /* ✅ Додано тінь зверху */
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;

  a {
    color: var(--text-color);
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--primary);
    }
  }
`;

export default Footer;
