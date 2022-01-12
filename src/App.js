import React, { Component } from "react";
import ClickCounter from "./components/Render-Props/ClickCounter";
import HoverCounter from "./components/Render-Props/HoverCounter";
class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
    isLoggedIn: true,
  };
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
