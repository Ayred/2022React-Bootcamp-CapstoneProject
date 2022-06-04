import React from 'react';
import { SSection } from './MainContainer.styled';

const MainContainer = ({ children }) => {
  return (
    <SSection>
      <h3>{children}</h3>
    </SSection>
  );
};

export default MainContainer;
