import React from 'react';

import { Container, List, Icon, IconTheme, Menus } from './styles';

import StyledBurger from '../Burger';

import logo from '../../assets/logo-lineu.png'


import { Link } from 'react-scroll'


export default function Header({ open }) {
  return (
      
      <Container>
          <Icon src={logo} />
          <Menus open={open}>
            <Link to="three" smooth={true} duration={2000}>Projects</Link>
            <Link to="four" smooth={true} duration={2000}>My career</Link>
            <Link to="form" smooth={true} duration={2000}>Talk to me</Link>
          </Menus>
          <StyledBurger />
      </Container>
  );
}