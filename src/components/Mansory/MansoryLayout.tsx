import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const MansoryLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  margin: 2rem auto; /* Центрує весь контейнер */
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr)); /* Два стовпці */
  gap: 0.8em; /* Зменшена відстань між стовпцями */
  justify-content: center; /* Центрує грід */
  max-width: 900px; /* Зменшив ширину, щоб зробити більш компактним */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    max-width: 700px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(280px, 1fr));
    max-width: 100%;
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
