import React, { useState, useEffect } from "react";

const Effect = () => {
  //   const [resourceType, setResourceType] = useState("Posts");
  //   const [items, setItems] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourceType]);
  //   return (
  //     <>
  //       <div>
  //         <button onClick={() => setResourceType("Posts")}>Posts</button>
  //         <button onClick={() => setResourceType("Users")}>Users</button>
  //         <button onClick={() => setResourceType("Comments")}>Comments</button>
  //       </div>
  //       <h1>{resourceType}</h1>
  //       {items.map((item) => {
  //         return <pre>{JSON.stringify(item)}</pre>;
  //       })}
  //     </>
  //   );
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCounter(counter + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [counter]);
  // const reset = () => {
  //   setCounter(0);
  // };
  // return (
  //   <>
  //     <div>Strona działa od {counter} sekund</div>
  //     <button onClick={reset}>Zresetuj licznik</button>
  //   </>
  // );
  // const [message, setMessage] = useState("");
  // useEffect(() => {
  //   setMessage("Cześć!");
  // });
  // return <div>{message}</div>;

  const [number, setNumber] = useState(5);

  useEffect(() => {
    console.log("Start");
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
      <p>
        "start" wyconsologuje sie się przy montowaniu komponentu i przy kazdej
        zmianie zmiennej number
      </p>
    </>
  );
};

export default Effect;
