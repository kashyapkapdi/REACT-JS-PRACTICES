import React, { Component } from "react";
import ClickCounter from "./components/Render-Props/ClickCounter";
import Counter from "./components/Render-Props/Counter";
import HoverCounter from "./components/Render-Props/HoverCounter";
import User from "./components/Render-Props/User";
class App extends Component {
  state = {
    userName: "Kashyap",
    guestName: "Lay",
    isLoggedIn: true,
  };
  render() {
    return (
      <div>
        {/* <ClickCounter />
        <HoverCounter />
        <User render={(isLoggedIn) => (isLoggedIn ? "Kashyap" : "Guest")} /> */}

        <Counter
          render={(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            ></ClickCounter>
          )}
        />

        <Counter
          render={(count, incrementCount) => (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
            ></HoverCounter>
          )}
        />
      </div>
    );
  }
}

export default App;
