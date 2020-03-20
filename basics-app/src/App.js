import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameDisplay from './components/NameDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Learning React is fun!!!!
        </p>
        <a
          className="App-link"
          href="https://github.com/bdavis171"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub!!!
        </a>
        <NameDisplay name='Brandon'/>
      </header>
    </div>
  );
}

export default App;
