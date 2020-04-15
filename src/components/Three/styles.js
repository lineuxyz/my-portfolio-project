import styled from 'styled-components';
import {MdAddCircleOutline} from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    padding: 0 30px;
    margin: 80px 0;
    justify-content: space-between;
    width: 100%;
    

    div {
        width: 50%;
    }
`;

export const Suport = styled.div `
    
`

export const Title = styled.div `
    color: #fff;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 30px;
`

export const FirstItem = styled.div `
   color: #C1C1C1;
   text-align: left;
   font-size: 17px;
   font-weight: bold;
   display: flex;
    
    img {
       margin-left: 30px;
   }

`

export const SecundItem = styled.div `
   color: #C1C1C1;
   text-align: left;
   font-size: 17px;
   font-weight: bold;
   display: flex;

   img {
       margin-left: 30px;
   }

`

export const ThreeItem = styled.div `
   color: #C1C1C1;
   text-align: left;
   font-size: 17px;
   font-weight: bold;
   display: flex;

   img {
       margin-left: 30px;
   }

`

export const List = styled.ul `
    display: flex;
    
    li {
        margin: 0 0 30px 0;
    }
`

export const LastButton = styled.button`
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
`;
