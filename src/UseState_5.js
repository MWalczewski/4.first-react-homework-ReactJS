import React, { useState } from "react";

const IsNull = () => {
  const [state, setState] = useState("tekst");

  const handleClick = () => {
    console.log("clock", state);
    setState("zwykly tekst");
  };

  const secondClick = () => {
    console.log("clock", state);
    setState(1000500100900);
  };

  const thirdClick = () => {
    console.log("clock", state);
    setState(null);
  };

  return (
    <>
      <div>{{ state } && <p>{state}</p>}</div>
      <button onClick={handleClick}>zmiana stanu na string</button>
      <button onClick={secondClick}>zmiana stanu na number</button>
      <button onClick={thirdClick}>zmiana stanu na null</button>
    </>
  );
};

export default IsNull;
