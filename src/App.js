import React, { Component } from "react";
import Heros from "./components/Error-boundary/Heros";
import ErrorBoundary from "./components/Error-boundary/ErrorBoundary";
class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
    isLoggedIn: true,
  };
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Heros heroName="Iron Man" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Heros heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Heros heroName="joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
