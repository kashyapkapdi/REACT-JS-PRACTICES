import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef();
  }

  componentDidMount() {
    this.inputRefs.current.focus();
    console.log(this.inputRefs);
  }

  clickHandler = () => {
    alert(this.inputRefs.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
