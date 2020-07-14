import React from 'react';

import { Container, List, Icon, IconTheme, Menus } from './styles';

import logo from '../../assets/logo-lineu.png'


import { Link } from 'react-scroll'


export default function Header() {
  return (
      
      <Container>
          {/*<Icon src={logo} />*/}
          <Menus>
            <Link to="three" smooth={true} duration={2000}>Projects</Link>
            <Link to="four" smooth={true} duration={2000}>My career</Link>
            {/*<Link to="form" smooth={true} duration={2000}>Talk to me</Link>*/}
          </Menus>
      </Container>
  );
}