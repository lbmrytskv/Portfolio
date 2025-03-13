import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../assets/Icons/Icons';
import { Moon } from '../assets/Icons/Icons';

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <div className="nav-brand">
        
        <NavLink to="/" className="logo" aria-label="Go to Home">
          <Logo />
        </NavLink>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className="nav-item" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-item" activeClassName="active">About</NavLink>
        <NavLink to="/projects" className="nav-item" activeClassName="active">Projects</NavLink>
        <NavLink to="/contact" className="nav-item" activeClassName="active">Contact</NavLink>
      </nav>

      <button className="theme-toggle" aria-label="Toggle Dark Mode">
        <Moon />
      </button>
    </NavContainer>
  );
};

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--bg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .nav-brand .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .nav-item {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color: var(--primary);
    }
  }

  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--text-color);
  }
`;

export default Navbar;