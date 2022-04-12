import React from 'react';
import Person from './Person.js';
import Header from './Header.js';
import Main from './Main';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main/>
      </>
    )
  }
}

export default App;
