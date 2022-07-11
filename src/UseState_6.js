import { useState } from "react";

const Array = ["car", "motor", "bike"];

const WordsList = () => {
  const [wordsList, setWordsList] = useState(Array);

  const handleClick = (event) => {
    setWordsList([...wordsList, wordsList[wordsList.length - 2]]);
    console.log(wordsList[wordsList.length - 2]);
  };

  return (
    <>
      <button onClick={handleClick}>Add element to Array to show below.</button>
      <ul>
        {wordsList.map((word, i) => {
          return <li key={i}>{word}</li>;
        })}
      </ul>
    </>
  );
};

export default WordsList;
