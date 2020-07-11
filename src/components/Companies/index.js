import React from 'react';

import { Footer, List, Title, LastButton } from './styles';
import { Link } from 'react-scroll';

import city from '../../assets/city.png'

export default function Four() {
  return (
    <>
    <Footer id="four">  
            <div>
                <img src={city} width={500} alt="qualquer coisa" />
            </div>
            <div>
                    
                    <List>
                    <p>My career</p>
                        <ul><Title><span>Company Name:</span> Itaú at Oliver agency | 2019/Dec to current day</Title>
                        <li key="company-informations">Front-end developer, working on the bank's performance side, working with multidisciplinary teams, including UX designer, Art Director, Motion, UX writer, using agile methodologies for better delivery.</li>
                        </ul>
                    </List>
        
                    <List>
                        <ul><Title><span>Company Name:</span> 99 Freelas | 2019/May to current day</Title>
                        <li>When I have time left, I work as a freelance programmer, currently using the 99 freelas platform, there I develop several types of projects, from small statistical pages, changes and code improvements.</li>
                        </ul>
                    </List>

                    <List>
                        <ul><Title><span>Company Name:</span> Google | 2019/January to 2019/May</Title>
                        <li>Care of some open source repositories from Google, I did maintenance, corrections, conflict resolution of pull requests, this was a Google project, where there was a small contract also acting as a freelance.</li>
                        </ul>
                    </List>

                    <LastButton><Link to="first" smooth={true} duration={2000}>Click and get + 10 XP</Link></LastButton>
            </div>
    </Footer>

     </> 
  );
}
