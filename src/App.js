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
    // this is the demo of Short circuit conditional rendering.
    return (
      <div>
        {this.state.isLoggedIn && <User userName={this.state.userName} />}
      </div>
    );
  }
}

export default App;
