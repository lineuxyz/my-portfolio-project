import React from 'react';

import { Container, List } from './styles';
import {MdBrightness7} from 'react-icons/md'

export default function Header() {
  return (
    <Container>
      <p>Nome</p>
      <List>
        <li>Meus conhecimentos</li>
        <li>Projetos</li>
        <MdBrightness7 size={18} color="#fff" />
      </List>
    </Container>
  );
}