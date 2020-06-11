import styled from 'styled-components';
import { shade } from 'polished';

export const Section = styled.section`
    display: flex;
    padding: 0 30px;
    margin: 80px 0;
    justify-content: space-between;
    width: 100%;

    div {
        max-width: 998px !important;

        img {
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
    width: 100%;
    max-width: 440px;

    div {
        width: 380px;
        height: 180px;

        &:hover {
            background: #666
        }
    }

@media (max-width: 515px) {
        display: none;
}
    width: 440px;
    height: 700px;
    background-color: #FFC400;

    border: 0;
    border-radius: 10px;


    div {
        margin: 0 0 0 30px;

        img {
            width: 380px;

            -webkit-box-shadow: 4px 3px 15px -1px rgba(0,0,0,0.75);
            -moz-box-shadow: 4px 3px 15px -1px rgba(0,0,0,0.75);
            box-shadow: 4px 3px 15px -1px rgba(0,0,0,0.75);

            margin: 10px 0;
        }

    }

  > p {
        margin: 10px;
       text-align: center;
       font-size: 18px; 
       color: #666;
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
