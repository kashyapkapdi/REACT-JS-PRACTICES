import React, { useState } from "react";

function FunctionCounterObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>firstName: {name.firstName}</p>
      <p>lastName: {name.lastName}</p>
    </div>
  );
}

export default FunctionCounterObject;
