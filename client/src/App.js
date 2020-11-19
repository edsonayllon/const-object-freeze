import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { COLOR } from './const';

function App() {
  const [color, setColor] = useState(COLOR.BLUE)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          style = {{ color }}
          onClick = {() => color === COLOR.BLUE ? setColor(COLOR.RED) : setColor(COLOR.BLUE)}
        >
          Change color
        </a>
      </header>
    </div>
  );
}

export default App;
