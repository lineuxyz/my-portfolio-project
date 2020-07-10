import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/_Header';
import Dashboard from './components/Dashboard';
import Description from './components/Description';
import NewLearning from './components/NewLearning';
import Companies from './components/Companies';

function App() {
  return (
  <> 
    <Header />
    <Dashboard />
    <Description />
    <NewLearning />
    <Companies />

    <GlobalStyle />
  </>
  );
}

export default App;
