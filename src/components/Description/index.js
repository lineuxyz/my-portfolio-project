import React from 'react';

import { Section, FirstText, LastText, Icons, } from './styles';

import avatar from '../../assets/avatar.png'
import avatarHidden from '../../assets/avatar-hidden.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

export default function Secund() {
  return (
    <Section id="secund">
      <img src={avatarHidden}  alt="Meu avatar" className="avatar-image-hidden"/>
        <img src={avatar}  alt="Meu avatar" className="avatar-image"/>
        <div>
            <FirstText className="title-text">It was time in such a distant realm ...</FirstText>
            <LastText>... an adventurer named Lineu Alberto Lima Pastorelli, who at the age of 13 I started to see programming, using it to create integrations within the games he played, and then he went on with pleasure in software development.<br/><br/>Today, at the age of 20, Lineu develops websites using ReactJS, iOS mobile using React Native and also Swift, delivering quality projects, following good practices, doing so, leaving customers happy.</LastText>
        </div>
        <Icons>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lineu-pastorelli-5165a7186/"><img src={linkedin} width={35} className="linkedin-icon" alt="Meu perfil no linkedin"/></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/lineuxyz"><img src={github} width={35} className="github-icon" alt="Meu perfil no github" /></a></li>
        </Icons>
    </Section>
  );
}
