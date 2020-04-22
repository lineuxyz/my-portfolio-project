import React from 'react';
import { Link } from 'react-scroll'

import persoImage from '../../assets/coding.png'
import { Container, Title, MainText, FirstButton } from './styles';

export default function Board() {
  return (
    <Container id="first">
        <div>
            <Title>Lorem ipsum dolor sit amet</Title>
            <MainText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr<br/>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</MainText>
            <FirstButton><Link to="secund" smooth={true} duration={2000}>Mais sobre mim</Link></FirstButton>
        </div>
        <img src={persoImage} width={635} alt="Imagem de um personagem codando" />
    </Container>
  );
}