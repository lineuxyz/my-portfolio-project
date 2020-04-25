import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    margin: 200px 0;
    justify-content: space-between;
    width: 100%;
    line-height: 25px;

    .avatar-image {
            width: auto;
            height: 527px;
        }

    .avatar-image-hidden {
            width: auto;
            display: none;
            height: 527px;
        }
    
    div {
        width: 50%;
        z-index: 1;
        max-width: 998px;
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
            display: none;
        }
        .avatar-image-hidden {
            width: 180px;
            height: auto;
            display: block;
        }
        .title-text {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        p {
            margin: 0;
        }

        div {
        width: 100%;
        text-align: center;
        padding: 0 30px;
        }

        ul li a img {
            width: 60px;
        }
 
      button {
          margin: 0 auto;
          margin-top: 60px;
      }
  }
  @media (max-width: 515px) {
    div {
        width: 100%;
        text-align: center;
        padding: 0 30px;
    }
}

`;

export const FirstText = styled.h1`
    font-size: 3.0rem;
    color: #fff;
    font-weight: 500;
`

export const LastText = styled.p`
    font-size: 1.6rem;
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

`;


