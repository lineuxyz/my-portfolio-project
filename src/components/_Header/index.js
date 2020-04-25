import React from 'react';

import { Container, List } from './styles';
import {MdBrightness7, MdBrightness1, MdCode} from 'react-icons/md'
import { Link } from 'react-scroll'


export default function Header() {
  return (
      
      <Container>
          <div>
            <MdCode size={20} />
            <p>Lineu Pastorelli</p>
          </div>
          <List>
            <Link to="three" smooth={true} duration={2000}>Projects</Link>
            <Link to="four" smooth={true} duration={2000}>My career</Link>
          </List>
      </Container>
  );
}