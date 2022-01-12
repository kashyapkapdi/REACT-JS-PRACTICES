import React, { Component } from "react";
import RefsDemo from "./components/Refs/RefsDemo";
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
        <RefsDemo />
      </div>
    );
  }
}

export default App;
