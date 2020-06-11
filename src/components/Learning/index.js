import React from 'react';

import { 
    Content, 
    Container,
    LastButton,
    Title,
    TumbContainer,
} from './styles1';
import { Link } from 'react-scroll';

import developing from '../../assets/developing.png';

import BeTheHeroLogin from '../../assets/be_the_hero.png';
import DevSearch from '../../assets/dev_search.png';

export default function Three() {
    return (
     <Container>
         <Title>My latest projects</Title>

         <Content>
            <div>
              <img src={BeTheHeroLogin} alt="Login de um projeto de ajuda a ONG's" />
            </div>
         </Content>
     </Container>
    );
  }