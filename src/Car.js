import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const brand = car.brand;
  const model = car.model;

  const handleClick = () => {
    setCar({ brand: "Ford", model: "Focus", year: "2015", color: "grey" });
  };
  const secondClick = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {car.color} {model} from {car.year}.
      </p>
      <button onClick={handleClick}>Change to my car's details</button>
      <button onClick={secondClick}>update only color</button>
    </>
  );
}

export default Car;
