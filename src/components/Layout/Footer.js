import React from 'react';
import logo from '../../assets/logo/small_logo.svg';
import { SFooter } from './Footer.styled';

const Footer = () => {
  return (
    <SFooter>
      <img src={logo} alt="" />
      <p>⚛ Ecommerce created during Wizeline's Academy React Bootcamp ⚛</p>
    </SFooter>
  );
};

export default Footer;
