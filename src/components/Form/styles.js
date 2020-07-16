import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 60px auto;
  padding: 20px;

  border-radius: 10px;

  background-color: #494949;

`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 5px;
`
export const Description = styled.p`
  color: #f9f9f9;
  font-size: 15px;
  text-align: center;

  margin-bottom: 15px;
`

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  button {
  width: 172px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0px 20px;

  color: #313131;
  font-size: 16px;
  font-weight: 500;

  transition: background 0.2s;
  
  &:hover {
      background: ${shade(0.2, '#FFC400')};
      }
  }

  input {
    background-color: #313131;
    color: #ffffff;
    font-size: 22px;

    border-radius: 10px;
    border: 0;

    height: 50px;
    padding: 0 8px;
    margin-bottom: 16px;
  }

  button {
    align-self: center;
    margin: 0 auto;
  }

  & input + input {
    margin-left: 20px;

      @media (max-width: 650px) {
        margin-left: 0;
      }
  }

  @media (max-width: 650px) {
    display: block
  }
`;

export const InputGroup = styled.div`
  width: 100%;
`;

export const InputName = styled.input`
  width: 400px;
  text-transform: capitalize;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const InputPhone = styled.input`
  width: 180px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const InputEmail = styled.input`
  text-transform: lowercase;

  &::placeholder {
    text-transform: initial;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  min-height: 180px;
  height: 85px;

  background-color: #313131;

  color: #fff;
  font-size: 18px;

  border: 0;

  border-radius: 8px;
  padding: 10px 8px;
  line-height: 24px;

  margin-bottom: 48px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #FFC400;
  }
`;

export const ContactInfos = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;

  margin-bottom: 48px;

  align-items: center;

  color: #fff;
  font-size: 16px;

  text-align: center;

  p {
    margin-bottom: 12px;
  }

  address a {
    color: #ffc400;
    font-style: normal;
    text-decoration: underline;
    font-weight: 500;
  }
`;
