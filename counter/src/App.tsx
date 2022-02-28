import React from 'react';
import logo from './logo.svg';
import Increment from './components/Increment';
import './App.css';

import { useState } from 'react';
import { setUncaughtExceptionCaptureCallback } from 'process';
function App() {
  const [count, setCount] = useState<number>(0);
  const inc = (num: number): void => {
    setCount(num);
  }
  return (
    <div className="App">
      incrementer <br />
      {count}
      <Increment inc={inc} count={count} />
    </div>
  );
}

export default App;
