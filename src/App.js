import React, { Component } from "react";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/UserContext";

class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
    isLoggedIn: true,
  };
  render() {
    return (
      <div>
        <UserProvider value="Kashyap">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
