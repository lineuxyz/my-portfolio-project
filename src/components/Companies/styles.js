import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    width: 100%;
    z-index: 0;

    div {
        width: 50%;
        max-width: 998px !important;

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
        
        div {
            width: 100%;
            text-align: center;

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
  }
  @media (max-width: 850px) {
    img {
          display: none;
    }
  }
`;

export const List = styled.ul`
    margin: 30px 30px;

    p {
     color: #C1C1C1;
     text-align: center;    
     font-size: 1.7rem;
     font-weight: 500;
     margin: 0 0 30px 0; 
    }

    li {
        margin-bottom: 7px;
        color: #C1C1C1;
    }

    span {
    color: #FFC400;
    font-size: 1.8rem

    }
`

export const Title = styled.li `

    span {
    color: #FFC400;
    font-size: 1.8rem

    }
`;

export const Copy = styled.div`
      display: flex;
      justify-content: space-between;
      padding: 15px 40px 10px 40px;
      color: #fff;
      font-size: 1.1rem;
    a {
      color: #FFC400;
  }

`




