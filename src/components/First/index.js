import React from 'react';

import persoImage from '../../assets/coding.png'
import { Container, Title, MainText, FirstButton } from './styles';

export default function Board() {
  return (
    <Container>
        <div>
            <Title>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</Title>
            <MainText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</MainText>
            <FirstButton>Mais sobre mim</FirstButton>
        </div>
        <img src={persoImage} width={635} alt="Imagem de um personagem codando" />
    </Container>
  );
}