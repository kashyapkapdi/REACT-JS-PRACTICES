import React from "react";

function Heros({ heroName }) {
  if (heroName === "joker") {
    throw new Error("Please name should not match to the joker");
  }
  return (
    <div>
      <h1>Hero name is: {heroName}</h1>
    </div>
  );
}

export default Heros;
