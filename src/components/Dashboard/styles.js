import styled from 'styled-components';
import { shade } from 'polished';

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    z-index: 0;
    padding: 0 30px;
    line-height: 25px;
    
    width: 90%;
    max-width: 998px !important;

    img {
        width: 635px;
        position: absolute;
        
        right: 0;
        top: -12px;
        padding-right: 0;
    }

    @media (max-width: 1000px) {
    img {
      width: 520px; 
    }
  }

    @media (max-width: 850px) {  
        flex-direction: column;
        width: 100%;
        align-items: center;


      img {
          position: relative;
          width: 380px;
          order: -1;
          margin-top: 30px;
      }

      h1, p {
          margin: 10px 0;
          text-align: center;
          width: 100%;
      }

      button {
          margin: 0 auto;
          margin-top: 60px;
      }
  }
  @media (max-width: 850px) {
    img {
          width: 280px;
    }
  } 
`;

export const Title = styled.h1`
    font-size: 3.0rem;
    color: #FFC400;
    margin: 60px 0;
    width: 600px;
    font-weight: 500;
`

export const MainText = styled.p `
    width: 50%;
    font-size: 1.6rem;
    color: #C1C1C1;
    margin-left: 60px;
`

export const FirstButton = styled.button.attrs({
    type: 'button'
})`
    display: flex;
    padding: 10px 30px;;
    margin: 60px 0 60px 90px;
    transition: background 0.2s;

    &:hover {
        background: ${shade(0.2, '#FFC400')};
        }
`;
