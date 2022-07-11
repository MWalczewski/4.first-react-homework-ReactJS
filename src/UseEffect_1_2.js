import React, { useState, useEffect } from "react";

const Task_1 = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Cześć!");
  }, []); // pusta tablica jako drugi parametr wywołuje efekt tylko przy pierwszym ładowaniu/montowaniu komponentu
  // ZADANIE 2 - usunięcie pustej tablicy z drugiego parametru spowoduje wywoływanie efektu przy każdym renderowaniu komponentu

  return (
    <>
      <div>{message}</div>
      <p>
        useEffect 1 zadanie: pusta tablica jako drugi parametr wywołuje efekt
        tylko przy pierwszym ładowaniu/montowaniu komponentu
      </p>
      <p>
        useEffect 2 zadanie: usunięcie pustej tablicy z drugiego parametru
        spowoduje wywoływanie efektu przy każdym renderowaniu komponentu
      </p>
    </>
  );
};

export default Task_1;
