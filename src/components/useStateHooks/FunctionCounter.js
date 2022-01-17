import React, { useState } from "react";

function FunctionCounter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div>
      <button onClick={incrementCounter}>Increment {counter}</button>
    </div>
  );
}

export default FunctionCounter;
