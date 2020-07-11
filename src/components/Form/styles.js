import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin: 0 auto;

  background-color: #494949;

`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;

  margin-bottom: 5px;
`
export const Description = styled.p`
  color: #f9f9f9;
  font-size: 13px;

  margin-bottom: 15px;
`

export const Form = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;

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

  & input + input {
    margin-left: 20px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
`;
export const InputName = styled.input`
  width: 400px;
`;
export const InputPhone = styled.input`
  width: 180px;
`;