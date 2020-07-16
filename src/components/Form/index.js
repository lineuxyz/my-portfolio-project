import React from 'react';

import { 
  Container, 
  Title, 
  Description, 
  Form,
  InputGroup,
  InputName,
  InputPhone,
  InputEmail,
  TextArea,
  ContactInfos,
} from './styles';

export default function Formularie() {

  async function handleNewIncident(event) {
    event.preventDefault();
  }

  return (
    <Container id="form">
      <Title>Contact me</Title>
      <Description>Here you can hire for some type of project. Tell me your information and describe the project that I will answer, I promise.</Description>

      <Form onSubmit={handleNewIncident} name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact"/>
        <InputGroup>
          <InputName type="text" placeholder="Name"/>
          <InputPhone type="text" placeholder="Your best phone"/>
        </InputGroup>

        <InputEmail type="e-mail" placeholder="Your best email"/>

        <TextArea placeholder="Tell me about your project, say everything!" />

        <ContactInfos>
          <p>If you prefer, you can send me an email to speak directly with me, ok? =)</p>
          <span><address><a href="mailto:falacmg@lineupastorelli.com">falacmg@lineupastorelli.com</a></address></span>
        </ContactInfos>

        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}
