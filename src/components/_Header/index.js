import React from 'react';

import { Container, List } from './styles';

export default function Header() {
  return (
    <Container>
      <p>Nome</p>
      <List>
        <li>Meus conhecimentos</li>
        <li>Projetos</li>
      </List>
    </Container>
  );
}