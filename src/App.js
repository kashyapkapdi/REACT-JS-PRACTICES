import React, { Component } from "react";
import ClassCounter from "./components/useStateHooks/ClassCounter";
import FunctionCounter from "./components/useStateHooks/FunctionCounter";
import FunctionCounterObject from "./components/useStateHooks/FunctionCounterObject";
import FunctionCounterArray from "./components/useStateHooks/FunctionCounterArray";

class App extends Component {
  render() {
    return (
      <div>
        <ClassCounter />
        <FunctionCounter />
        <FunctionCounterObject />
        <FunctionCounterArray />
      </div>
    );
  }
}

export default App;
