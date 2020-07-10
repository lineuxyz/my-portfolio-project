import React from 'react';

import { 
    Section, 
    Container,
    LastButton,
    Title,
    Content,
    AccessButton,
} from './styles';
import { Link } from 'react-scroll';

import { MdTrendingFlat } from 'react-icons/md';

import developing from '../../assets/developing.png';
import BeTheHeroLogin from '../../assets/be_the_hero.png';
import BeTheHeroRegister from '../../assets/be_the_hero_1.png';
import DevSearch from '../../assets/dev_search.png';


export default function Three() {
  return (
    <Section id="three">
          
        <Container>
          <Title>My latest projects</Title>

          <Content>
            <img src={BeTheHeroLogin} />
          </Content>

        </Container>

        <div>
            <img src={developing} alt="Vetor de um desenvolvedor" />
            <LastButton><Link to="first" smooth={true} duration={2000}>Click and get + 10 XP</Link></LastButton>
        </div>

    </Section>
  );
}
