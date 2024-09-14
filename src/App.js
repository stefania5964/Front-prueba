import logo from './logo.svg';
import React from 'react';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Login/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> hola.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
