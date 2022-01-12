import React from "react";
import ReactDOM from "react-dom";

function Portals() {
  return ReactDOM.createPortal(
    <div>
      <h1>Hello Portals</h1>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portals;
