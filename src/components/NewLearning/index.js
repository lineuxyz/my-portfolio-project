import React from 'react';

import './styles.css';

import { Link } from 'react-scroll';

import { MdTrendingFlat } from 'react-icons/md';

import developing from '../../assets/developing.png';
import BeTheHeroLogin from '../../assets/be_the_hero.png';
import BeTheHeroRegister from '../../assets/be_the_hero_1.png';
import DevSearch from '../../assets/dev_search.png';
import DiscordClone from '../../assets/discord_clone.png';
import GithubExplorer from '../../assets/github_explorer.png'


export default function Three() {
  return (
    <section id="three">
          
        <div className="container">
          <div className="content">
            <p>My latest projects</p>
            <span>Clicking on the image you will be taken to the repository</span>
            
            <div className="stream safe-area" >
              <a target="_blank" rel="noreferrer" href="https://bit.ly/3jqlP9V"><img className="stream__thumbnail" src={DiscordClone} alt="Discord clone repo" /></a>
            </div>

            <div className="stream safe-area" > 
              <a target="_blank" rel="noreferrer" href="https://bit.ly/3hq67cS"><img className="stream__thumbnail" src={GithubExplorer} alt="Github explorer repo" /></a>
            </div>

            <div className="stream safe-area" > 
              <a target="_blank" href="https://bit.ly/3edYGDX" rel="noreferrer"><img className="stream__thumbnail" src={BeTheHeroRegister} alt="Be the hero repo" /></a>
            </div>

            <div className="stream" > 
              <a target="_blank" rel="noreferrer" href="https://bit.ly/38KphXT"><img className="stream__thumbnail" src={DevSearch} alt="Dev search repo" /></a>
            </div>
          </div>

          <div className="footer-container">
            <img src={developing} alt="Vetor de um desenvolvedor" />
          </div>

        </div>
    </section>
  );
}
