import React, { Component } from "react";
import ClassCounter from "./components/useStateHooks/ClassCounter";
import FunctionCounter from "./components/useStateHooks/FunctionCounter";

class App extends Component {
  render() {
    return (
      <div>
        <ClassCounter />
        <FunctionCounter />
      </div>
    );
  }
}

export default App;
