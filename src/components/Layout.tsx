import React, { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;

/* ----------------- STYLES----------------- */
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
