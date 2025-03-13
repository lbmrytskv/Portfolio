import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const MansoryLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  margin: 2rem 0;
  column-gap: 1.5em;
  column-count: 3;

  @media (max-width: 1024px) {
    column-count: 2;
  }

  @media (max-width: 768px) {
    column-count: 1;
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