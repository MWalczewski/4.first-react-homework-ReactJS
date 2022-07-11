import React, { useState } from "react";
let Array = ["sex", "drugs"];
const InputText = () => {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");
  const handleChange = (event) => {
    // console.log("inputText przed kliknieciem: ", inputText);
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(event);
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setText(inputText);
  };

  return (
    <>
      <p>{text}</p>
      <input name="inputText" value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>Wyswietl wartosc wpisana w input</button>
    </>
  );
};

export default InputText;
