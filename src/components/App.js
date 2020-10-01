import React from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="title">Calculator</h1>
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
