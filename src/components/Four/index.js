import React from 'react';

import { Container, Title, FirstItem, SecundItem, ThreeItem } from './styles';

import city from '../../assets/city.png'

export default function Four() {
  return (
    <Container>  
            <div>
                <img src={city} width={500} />
            </div>
            <Title>
                <p>Conhecimentos</p>
            </Title>
            <FirstItem>
                <p>Conhecimentos sobre</p>
            </FirstItem>
            <SecundItem>
                <p>Conhecimentos sobre Adobe</p>
            </SecundItem>
            <ThreeItem>
                <p>Formação acadêmica e cursos</p>
            </ThreeItem>
    </Container>
  );
}
