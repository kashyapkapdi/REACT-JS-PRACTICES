import React, { Component } from "react";
import Guest from "./components/Guest";
import User from "./components/User";
class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
  };
  render() {
    return (
      <div>
        <User userName={this.state.userName} />
        <Guest guestName={this.state.guestName} />
      </div>
    );
  }
}

export default App;
