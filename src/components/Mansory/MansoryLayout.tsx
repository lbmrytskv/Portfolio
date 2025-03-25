import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const MansoryLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;


  ${({ theme }) =>
    theme.mode === 'dark' &&
    `
    &::-webkit-scrollbar {
      height: 12px;
      width: 12px;
    }

    &::-webkit-scrollbar:horizontal {
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      background: #232E33;
      border-radius: 16px;
    }

    &::-webkit-scrollbar-thumb {
      background: #9cb3a8;
      border-radius: 16px;
      border: 1px solid #232e33;
    }

    scrollbar-color: #9cb3a8 #232E33;
    scrollbar-width: auto;
  `}

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  @media (min-width: 1240px) {
    box-shadow: ${({ theme }) =>
      theme.mode === 'light'
        ? '-3px 3px 6px rgba(0, 0, 0, 0.1)'
        : '-3px 3px 6px rgba(255, 255, 255, 0.05)'};
  }

  @media (max-width: 1240px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    max-width: 800px;
    gap: 1em;
    overflow: visible;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    max-width: 800px;
    gap: 1em;
    overflow: visible;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    justify-items: center;
    max-width: 100%;
    overflow: visible; /* 🔧 важливо — прибирає горизонтальний скрол */
  }

  animation: fadeInUp 1s ease;

  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default MansoryLayout;
