import React from 'react';

import { Container, Title, Description, Form, InputGroup, InputName, InputPhone } from './styles';

export default function Formularie() {
  return (
    <Container id="form">
      <Title>Um titulo</Title>
      <Description>Um subtitulo um subtitulo um subtitulo</Description>

      <Form>
        <InputGroup>
          <InputName type="text"/>
          <InputPhone type="text"/>
        </InputGroup>
        <input type="text"/>

        <textarea />

        <InputGroup>
          <input type="checkbox" name="" id=""/>
          <input type="checkbox" name="" id=""/>
          <input  type="checkbox" name="" id=""/>
        </InputGroup>


        <input type="checkbox" name="" id="teste"/>
        <button type="submit">Butão</button>
      </Form>
    </Container>
  );
}
