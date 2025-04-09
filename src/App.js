import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => {
    setCount(count + 1);
    if (count + 1 === 10) {
      setMessage('🎉 Great! You reached 10!');
    } else {
      setMessage('');
    }
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1 className="title">Tasbih Counter</h1>
      <div className="count">{count}</div>
      <div className="button-group">
        <button className="button" onClick={increment}>+</button>
        <button className="button" onClick={decrement} disabled={count === 0}>-</button>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default App;
