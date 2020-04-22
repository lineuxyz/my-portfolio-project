import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 200px 0;
    justify-content: space-between;
    width: 100%;

    div {
        width: 50%;
        z-index: 1;
        max-width: 998px !important;
    }

    @media (max-width: 1000px) {

  }
    @media (max-width: 850px) {  
      flex-direction: column;
        width: 100%;
        align-items: center;
        margin: 70px 0;

        .avatar-image {
            width: 180px;
            height: auto;
            float: left;
        }

        .title-text {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        ul li a img {
            width: 60px;
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

`;

export const FirstText = styled.p`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`

export const LastText = styled.p`
    font-size: 15px;
    color: #C1C1C1;
    margin: 30px 0 0 30px;
`

export const Icons = styled.ul`
    margin: 50px 30px;
    cursor: pointer;
    
    li {
        margin: 30px 0;

        &:hover {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.2s;
        }
    }

`

