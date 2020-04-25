import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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

  button {
    cursor: pointer;
    background:  #FFC400;
    border: 0;
    color: #313131;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 870px) {
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