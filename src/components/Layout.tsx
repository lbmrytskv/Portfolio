import React, { PropsWithChildren, createContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled, { ThemeProvider, css } from 'styled-components';

// Контекст для теми
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={{ mode: theme }}>
        <PageContainer>
          <Navbar />
          <MainContent>
            <BackgroundEffects theme={theme} />
            <ContentWrapper>{children}</ContentWrapper>
          </MainContent>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;

/* ----------------- STYLES ----------------- */
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100vw; 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  text-align: center;
  color: var(--text-color);
`;

const BackgroundEffects = styled.div<{ theme: string }>`
  position: absolute;
  inset: 0;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme === 'dark' ? '#020a13' : '#f7f7f7'}; /* Твій фон залишається в світлій темі */
    background-image: ${({ theme }) =>
      theme === 'dark'
        ? `linear-gradient(currentColor 1px, transparent 1px),
           linear-gradient(to right, currentColor 1px, transparent 1px)`
        : `linear-gradient(currentColor 1px, transparent 1px),
           linear-gradient(to right, currentColor 1px, transparent 1px)`}; /* Градієнти зберігаємо */
    background-size: 100px 100px;
    color: rgba(150, 150, 150, 0.3);
    z-index: -2;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) =>
      theme === 'dark'
        ? `radial-gradient(at 40% 40%, #1e90ff 0, transparent 50%),
           radial-gradient(at 90% 10%, #ff69b4 0, transparent 50%),
           radial-gradient(at 50% 95%, #00ffff 0, transparent 50%)`
        : `radial-gradient(at 40% 40%, #ffcccb 0, transparent 50%),
           radial-gradient(at 90% 10%, #add8e6 0, transparent 50%),
           radial-gradient(at 50% 95%, #ffeb3b 0, transparent 50%),
           radial-gradient(at 20% 30%, #c1e1c1 0, transparent 50%)`}; /* Колірні тіні */
    filter: blur(120px) saturate(80%);
    opacity: ${({ theme }) => (theme === 'dark' ? '0.12' : '0.12')}; /* Прозорість не змінюємо */
    transform: translateZ(0);
    z-index: -1;
  }
`;

