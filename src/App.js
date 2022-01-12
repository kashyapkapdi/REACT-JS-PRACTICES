import React, { Component } from "react";
import Guest from "./components/Guest";
import User from "./components/User";
class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
    isLoggedIn: true,
  };
  render() {
    // this is the demo of Element variable conditional rendering.
    let messages;

    if (this.state.isLoggedIn) {
      messages = <User userName={this.state.userName} />;
    } else {
      messages = <Guest guestName={this.state.guestName} />;
    }
    return <div>{messages}</div>;
  }
}

export default App;
