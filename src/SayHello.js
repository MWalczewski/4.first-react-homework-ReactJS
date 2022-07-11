import React, { useState } from "react";

const SayHello = () => {
  const [buttonState, setButtonState] = useState("Przywitaj się!");
  const [nameState, setNameState] = useState("nieznajomy");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setNameState("Maciek");
  };

  const secondHandleClick = () => {
    // console.log(isDisabled);
    setIsDisabled((prev) => !prev);
  };

  return (
    <>
      {/* <button onClick={() => setNameState("Maciek")}>{buttonState}</button> */}
      <button onClick={handleClick} disabled={isDisabled}>
        {buttonState}
      </button>
      <button onClick={secondHandleClick}>Drugi button</button>
      <p>Witaj {nameState}</p>
    </>
  );
};

export default SayHello;
