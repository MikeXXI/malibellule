import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {

  let [count, setCount] = useState(0);
  const clickOnMe = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
     <header className="App-header">
      <h1>Counter App</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p data-testid="count" >{count}</p>
      <button onClick={clickOnMe}>Click Me</button>
      </header>      
    </div>
  );
  
}

export default App;
