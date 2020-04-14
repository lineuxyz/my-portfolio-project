import React from 'react';

import { Container, FirstText, LastText, Icons } from './styles';

import avatar from '../../assets/avatar.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

export default function Secund() {
  return (
    <Container>
        <img src={avatar}  width={250} height={527} alt="Meu avatar"/>
        <div>
            <FirstText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</FirstText>
            <LastText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br/><br/>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </LastText>
        </div>
        <Icons>
            <li><a><img src={linkedin} width={35} /></a></li>
            <li><a><img src={github} width={35} /></a></li>
        </Icons>
    </Container>
  );
}
