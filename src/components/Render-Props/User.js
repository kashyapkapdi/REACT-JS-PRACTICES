import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <p>{this.props.render(false)}</p>
      </div>
    );
  }
}

export default User;
