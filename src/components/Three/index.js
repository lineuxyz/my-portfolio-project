import React from 'react';

import { 
    Container, 
    Title, 
    FirstItem, 
    SecundItem, 
    ThreeItem,
     Suport, 
     List, 
     LastButton,
} from './styles';

import {MdAddCircleOutline} from 'react-icons/md'

import developing from '../../assets/developing.png'

export default function Three() {
  return (
    <Container>
        <div>
            <img src={developing} width={345} />
            <LastButton>Teste</LastButton>
        </div>
        <Suport>   
            <Title>
                <p>Conhecimentos</p>
            </Title>
            <FirstItem>
                <p>Conhecimentos sobre </p>
                <MdAddCircleOutline size={22} color="#FFC400" />
            </FirstItem>
                <List>
                    <li>Adobe</li>
                    <li>Adobe</li>
                    <li>Adobe</li>
                </List>
            <SecundItem>
                <p>Conhecimentos sobre Adobe</p>
                <MdAddCircleOutline size={22} color="#FFC400" />
            </SecundItem>
                <List>
                    <li>Adobe</li>
                    <li>Adobe</li>
                    <li>Adobe</li>
                </List>
            <ThreeItem>
                <p>Formação acadêmica e cursos</p>
                <MdAddCircleOutline size={22} color="#FFC400" />
            </ThreeItem>
                <List>
                    <li>Adobe</li>
                    <li>Adobe</li>
                    <li>Adobe</li>
                </List>
        </Suport>   
    </Container>
  );
}
