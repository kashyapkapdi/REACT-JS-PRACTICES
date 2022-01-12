import React, { Component } from "react";
import Portals from "./components/Portals/Portals";
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
        <Portals />
      </div>
    );
  }
}

export default App;
