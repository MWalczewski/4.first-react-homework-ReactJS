import React, { useState } from "react";
let Array = ["bla", "Bla", "BLA", "bLa"];
const Submit = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(Array);

  const handleChange = (event) => {
    setInputText(event.target.value);
    // console.log(event.target.value);
  };

  const handleClick = () => {
    setList(Array.push(inputText));
    // setInputText("");
  };

  const clearInput = () => {
    setInputText("");
  };

  return (
    <>
      <input value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>
        SUBMIT - add text to the list below.
      </button>
      <button onClick={clearInput}>Clear input</button>
      <ul>
        List of inputs:
        {Array.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </>
  );
};
export default Submit;
