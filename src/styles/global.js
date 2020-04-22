import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 1.6rem 'Roboto', sans-serif;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased !important;
    background-color: #313131;
  }
  ul {
    list-style: none;
  }

  @media (max-width: 850px) {
    html {
      font-size: 50%;
    }
  }

  /*@media (max-width: 850px) {
    html {
      font-size: 50%;
    }
  } */
`