import React, { useState, useEffect } from "react";

const array = [
  "Warszawa",
  "Krakow",
  "Katowice",
  "Gdansk",
  "Poznan",
  "Wroclaw",
  "Lublin",
  "Rzeszow",
  "Lodz",
  "Szczecin",
];

const Task5 = () => {
  const [number, setNumber] = useState(0);
  const [filteredList, setFilteredList] = useState(array);

  useEffect(() => {
    setFilteredList(() => {
      const newArray = array.filter((city, i) => i < number);
      return newArray;
    });
  }, [number]);

  const Add = () => {
    setNumber(number + 1);
  };

  const Minus = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div>Zadanie 3.</div>

      <button onClick={Add}>Add 1</button>
      <span>{number}</span>
      <button onClick={Minus}>Minus 1</button>
      <ol>
        {filteredList
          //   .filter((city, i) => {
          //     // return i % 2 === 0;
          //     return i < number;
          //   })
          .map((city, i) => {
            return <li key={i}>{city}</li>;
          })}
      </ol>
    </>
  );
};

export default Task5;
