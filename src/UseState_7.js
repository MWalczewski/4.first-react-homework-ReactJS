import React, { useState } from "react";

const ShoppingList = () => {
  const [data, setData] = useState(true);

  const handleClick = () => {
    console.log("button clicked");
    setData((prev) => !prev);
  };
  if (data === true) {
    return (
      <>
        <button onClick={handleClick}>Hide Shopping List</button>
        <ol>
          <li>Chleb</li>
          <li>Szynka</li>
          <li>Masło</li>
          <li>Mleko</li>
        </ol>
      </>
    );
  }
  return <button onClick={handleClick}>Show Shopping List</button>;
};

export default ShoppingList;
