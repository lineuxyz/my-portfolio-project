import React from 'react';
import { Link } from 'react-scroll'

import persoImage from '../../assets/coding.png'
import { Main, Title, MainText, FirstButton } from './styles';

export default function Dashboard() {
  return (
   <> 
    <Main id="first">
        <div>
            <Title>Incredible projects come from here!</Title>
            <MainText>I'm a front-end developer, I do this with ReactJS, TypeScript, JavaScript and React Native the most modern technologies on the market. I also work with iOS mobile, there used Swift and Objective-C.</MainText>
            <FirstButton><Link to="secund" smooth={true} duration={2000}>Click and get + 10 XP</Link></FirstButton>
        </div>
          <img src={persoImage} width={635} alt="Imagem de um personagem codando" />
    </Main>
    </>
  );
}