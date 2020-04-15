import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  background: #313131;
  padding: 0 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  flex-wrap: wrap;
  
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;

  a {
    margin: 0 20px;

    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      transition: 0.2s;
      color: #F6511D;
      cursor: pointer;
    }
  }
`