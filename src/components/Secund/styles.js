import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 100px 0;
    justify-content: space-between;
    width: 100%;
    

    div {
        width: 50%;
        z-index: 1;
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
    margin: 0 30px;
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

