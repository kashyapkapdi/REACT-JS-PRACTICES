import React, { Component } from "react";
import ClassCounter from "./components/useStateHooks/ClassCounter";
import FunctionCounter from "./components/useStateHooks/FunctionCounter";
import FunctionCounterObject from "./components/useStateHooks/FunctionCounterObject";

class App extends Component {
  render() {
    return (
      <div>
        <ClassCounter />
        <FunctionCounter />
        <FunctionCounterObject />
      </div>
    );
  }
}

export default App;
