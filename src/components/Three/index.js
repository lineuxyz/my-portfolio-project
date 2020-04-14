import React from 'react';

import { Container, Title, FirstItem, SecundItem, ThreeItem, Suport } from './styles';

import developing from '../../assets/developing.png'
import more from '../../assets/more.png'
import min from '../../assets/min.png'

export default function Three() {
  return (
    <Container>
        <img src={developing} width={345} />
        <Suport>   
            <Title>
                <p>Conhecimentos</p>
            </Title>
            <FirstItem>
                <p>Conhecimentos sobre </p>
                <img src={more} width={22} />
            </FirstItem>
            <SecundItem>
                <p>Conhecimentos sobre Adobe</p>
                <img src={min} width={22} />
            </SecundItem>
            <ThreeItem>
                <p>Formação acadêmica e cursos</p>
                <img src={more} width={22} />
            </ThreeItem>
        </Suport>    
    </Container>
  );
}
