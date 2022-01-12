import React, { Component } from "react";
import Guest from "./components/Guest";
import User from "./components/User";
class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
    isLoggedIn: false,
  };
  render() {
    // this is the demo of if/else conditional rendering.
    if (this.state.isLoggedIn) {
      return <User userName={this.state.userName} />;
    } else {
      return <Guest guestName={this.state.guestName} />;
    }
  }
}

export default App;
