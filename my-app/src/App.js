import React, { useState } from "react";


function App() {
  const [Count, setCount] = useState(4);

  function increment() {
    setCount(prevCount => prevCount + 1);
    
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <span>{Count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
