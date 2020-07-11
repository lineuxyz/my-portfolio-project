import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/_Header';
import Dashboard from './components/Dashboard';
import Description from './components/Description';
import NewLearning from './components/NewLearning';
import Companies from './components/Companies';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
  <> 
    <Header />
    <Dashboard />
    <Description />
    <NewLearning />
    <Companies />
    <Form />
    <Footer />

    <GlobalStyle />
  </>
  );
}

export default App;
