import React from 'react';

import { 
    Section, 
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
    <Section id="three">
          
        <Container>
          <Title>My latest projects</Title>
            <div>
              <img src={BeTheHeroLogin} alt="Login de um projeto de ajuda a ONG's" />
            </div>

            <div>
              <img src={DevSearch} alt="Projeto de busca de desenvolvedores" />
            </div>

        </Container>

        <div>
            <img src={developing} alt="Vetor de um desenvolvedor" />
            <LastButton><Link to="first" smooth={true} duration={2000}>Click and get + 10 XP</Link></LastButton>
        </div>

    </Section>
  );
}
