import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  height: 40px;
  padding: 0 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 10px;

  div {
    display: flex;

    p {
      margin-left: 15px;
    }

  }

  @media (max-width: 530px) {
    padding: 0 15px;
  }
`;


export const List = styled.ul`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;

  a {
    margin: 0 20px;      
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #FFC400;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover {
        color: ${shade(0.4, '#fff')};

        &::before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
    }
  }

  svg {
    margin: 0 20px;      
    color: #313131;
    /*cursor: pointer;

    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      transition: 0.2s;
      color: ${shade(0.2, '#313131')}
    }*/
  }
`;
