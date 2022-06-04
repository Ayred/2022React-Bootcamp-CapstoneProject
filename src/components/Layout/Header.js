import React from 'react';
import logo from '../../assets/logo/logo.png';
import { SHeader } from './Header.styled';

const Header = () => {
  return (
    <SHeader>
      <img src={logo} alt="Tatos Logo" />
      <h1>Eu sou o header</h1>
    </SHeader>
  );
};

export default Header;
