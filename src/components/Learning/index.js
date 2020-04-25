import React from 'react';

import { 
    Section, 
    Container,
    LastButton,
    Title,
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
            <div>
              <img src={BeTheHeroLogin} alt="Login de um projeto de ajuda a ONG's" />
              <img src={BeTheHeroRegister} alt="Pagina de registro de um projeto de ajuda a ONG's" />
            </div>
            <AccessButton target="_blank" rel="noopener noreferrer" href="https://github.com/lineuxyz/semana-omnistack-11">
              <p>access repository</p>
              <MdTrendingFlat size={20} />
            </AccessButton>

            <div>
              <img src={DevSearch} alt="Projeto de busca de desenvolvedores" />
            </div>
            <AccessButton target="_blank" rel="noopener noreferrer" href="https://github.com/lineuxyz/dev-search">
                <p>access repository</p>
              <MdTrendingFlat size={20} />
            </AccessButton>
        </Container>

        <div>
            <img src={developing} alt="Vetor de um desenvolvedor" />
            <LastButton><Link to="first" smooth={true} duration={2000}>Click and get + 10 XP</Link></LastButton>
        </div>

    </Section>
  );
}
