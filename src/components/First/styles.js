import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    width: 90%;
    z-index: 0;

    div {
        width: 90%;
        max-width: 998px !important;
    } 

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
  @media (max-width: 850px) {
    img {
          width: 280px;
    }
  }    

`;

export const Title = styled.p`
    font-size: 3.0rem;
    color: #FFC400;
    margin: 60px 0;
    width: 600px;

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
    width: 182px;
    height: 33px;
    margin: 60px 90px;
    cursor: pointer;
    background-color: #313131;
    border: 1px solid #FFC400;
    color: #fff;
    border-radius: 20px;
    justify-content: center;
    align-items: center;

    &:hover {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.2s;
        }
`
