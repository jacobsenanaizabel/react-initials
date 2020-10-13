import React from 'react';
import './App.css';

import Persons from './Persons.js';
import SignUp from './Components/Pages/SignUp';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SignUp />
      </header>
    </div>
  );
}

export default App;
