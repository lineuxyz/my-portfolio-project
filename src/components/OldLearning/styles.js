import styled from 'styled-components';
import { shade } from 'polished';

export const Section = styled.section`
    display: flex;
    padding: 0 30px;
    margin: 80px 0;
    justify-content: space-between;
    width: 100%;

    > div {
        max-width: 998px !important;

        > img {
            width: 500px;
        }
    }

    @media (max-width: 850px) {  
        flex-direction: column;
        width: 100%;
        align-items: center;

       div {
           img {
            position: relative;
            width: 280px;
            order: -1;
            margin-top: 30px;
      }
    }
      p {
          margin: 0;
          text-align: center;
          width: 100%;
      }

      button {
          margin: 0 auto;
          margin-top: 60px;
      }
  }
  @media (max-width: 515px) {
     
     div {
         img {
          
          height: auto;
     }
    }
  }    
`;

export const Container = styled.div`
    width: 440px;
    height: 700px;
    display: flex;
    flex-direction: column;

    background-color: #FFC400;

    border: 0;
    border-radius: 10px;

@media (max-width: 515px) {
        display: none;
}
`;

export const Content = styled.div`
    width: 400px;
    height: auto;

    display: inline-block;
    flex-direction: column;
    align-items: center;

    position: relative;
    background: #000;

    &::before,
    &::after {
        content: '';
        display: block;
        background-color: #000;
        width: 8px;
        height: 8px;
        position: absolute;
        transition: all .15s ease;
    }

    &::before {
        top: 0;
        left: 0;
        transform-origin: top left;
        transform: rotate(-45deg) scale(0);
    }

    &::after {
        right: 0;
        bottom: 0;
        transform-origin: bottom right;
        transform: rotate(45deg) scale(0);
    }

    &:hover {
        transform: translate(6px, -6px);
    }

    &:hover::before {
        transform: rotate(-45deg) scale(1);
    }

    &:hover::after {
        transform: rotate(45deg) scale(1);
    }

    img {
        width: 380px;
        height: auto;

        display: block;
        transform: translate(0, 0);
        transition: all .15s ease;
        position: relative;
        z-index: 10;

        &:hover {
            transform: translate(6px, -6px);
        }
    }
`;


export const Title = styled.p `
    text-align: center;
    font-size: 18px ;
    color: #313131 !important;
    margin: 10px;
`;

export const LastButton = styled.button.attrs({
    type: 'button'
})`
    display: flex;
    padding: 10px 30px;
    margin: 60px 0 60px 90px;
    transition: background 0.2s;
    
    &:hover {
        background: ${shade(0.2, '#FFC400')};
        }
`;
