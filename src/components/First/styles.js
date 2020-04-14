import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    width: 100%;
    z-index: 0;

    div {
        width: 50%;
    } 

    img {
        position: absolute;
        right: 0;
        top: -12px;
        padding-right: 0
       
    }
`;

export const Title = styled.p`
    font-size: 30px;
    color: #FFC400;
    margin: 60px 0;
`

export const MainText = styled.p `
    width: 50%;
    font-size: 15px;
    color: #C1C1C1;
    margin-left: 60px;
`

export const FirstButton = styled.button`
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
    align-items: center
`
