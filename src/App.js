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
    // this is the demo of Ternary operator conditional rendering.
    return (
      <div>
        {this.state.isLoggedIn ? (
          <User userName={this.state.userName} />
        ) : (
          <Guest guestName={this.state.guestName} />
        )}
      </div>
    );
  }
}

export default App;
