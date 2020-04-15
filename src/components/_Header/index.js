import React from 'react';

import { Container, List } from './styles';
import {MdBrightness7} from 'react-icons/md'

export default function Header() {
  return (
    <Container>
      <p>Nome</p>
      <List>
        <a>Meus conhecimentos</a>
        <a>Projetos</a>
        <MdBrightness7 size={18} color="#fff"  />
      </List>
    </Container>
  );
}