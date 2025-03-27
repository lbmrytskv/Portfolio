import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, Moon } from '../assets/Icons/Icons';
import { ThemeContext } from './Layout';

const Navbar: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <NavContainer>
      <div className="nav-brand">
        <NavLink to="/" className="logo" aria-label="Go to Home">
          <Logo />
        </NavLink>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          Contact
        </NavLink>
      </nav>

      <button className="theme-toggle" aria-label="Toggle Dark Mode" onClick={toggleTheme}>
        <Moon />
      </button>
    </NavContainer>
  );
};


/* ----------------- STYLES ----------------- */

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: var(--bg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .nav-brand .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }



  .nav-links {
    display: flex;
    gap: 3rem;
    @media (max-width: 1024px) {
      gap:2rem;
    }

    @media (max-width: 768px) {
      gap:1.5rem;
    }

  }

  .nav-item {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color: var(--primary);
    }

    @media (max-width: 1024px) {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${(props) => (props.theme.mode === 'dark' ? '#e1e1e1' : '#213547')};
  }
  svg {
  fill: var(--icon-color);
  transition: fill 0.3s ease;
}

`;

export default Navbar;
