import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate'; // eslint-disable-line

class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="App">
          <h1 className="title">Calculator</h1>
          <Display />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
