import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/_Header';
import First from './components/First';
import Secund from './components/Secund';
import Three from './components/Three';
import Four from './components/Four';

function App() {
  return (
  <> 
    <Header />
    <First />
    <Secund />
    <Three />
    <Four />
    <GlobalStyle />
  </>
  );
}

export default App;
