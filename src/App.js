import React, { Component } from "react";
import ParentComp from "./components/pure-components/ParentComp";
class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
    isLoggedIn: true,
  };
  render() {
    // this is the demo of Short circuit conditional rendering.
    return (
      <div>
        <ParentComp />
      </div>
    );
  }
}

export default App;
