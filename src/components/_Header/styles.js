import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  height: 40px;
  padding: 0 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-right: 15px;

  div {
    display: flex;

    p {
      margin-left: 15px;
    }

  }

  @media (max-width: 530px) {
      display: none;
      flex-flow: column nowrap;
      background-color: #FFC400;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
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
        background-color: #6699ff;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover {
        color: #6699ff;

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
