import React from 'react';

import { Container, Title, List } from './styles';

import city from '../../assets/city.png'

export default function Four() {
  return (
    <Container>  
            <div>
                <img src={city} width={500} />
            </div>
            <div>
                <Title>
                    
                </Title>
                    <List>
                    <p>Conhecimentos</p>
                        <li>Nome da empresa: Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
                    </List>
                    <List>
                        <li>Nome da empresa: Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
                    </List>
            </div>
    </Container>
  );
}
