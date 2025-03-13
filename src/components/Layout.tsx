import React, { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <BackgroundEffects />
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
      <Footer />
    </PageContainer>
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
`;

const BackgroundEffects = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    background-image: linear-gradient(currentColor 1px, transparent 1px),
      linear-gradient(to right, currentColor 1px, transparent 1px);
    background-size: 100px 100px;
    color: rgba(150, 150, 150, 0.3);
    z-index: -2;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(at 40% 40%, #ffcccb 0, transparent 50%),
      radial-gradient(at 90% 10%, #add8e6 0, transparent 50%),
      radial-gradient(at 50% 95%, #ffeb3b 0, transparent 50%),
      radial-gradient(at 20% 30%, #c1e1c1 0, transparent 50%);
    filter: blur(120px) saturate(80%);
    opacity: 0.12;
    transform: translateZ(0);
    z-index: -1;
  }
`;
