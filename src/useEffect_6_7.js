import React, { useState, useEffect } from "react";

const Task6_7 = () => {
  return (
    <>
      <h1>Zadanie 6</h1>
      <h3>useLayoutEffect</h3>
      <p>useLayoutEffect wywołuje się przed wyrenderowaniem komponentu</p>
      <h3>useEffect</h3>
      <p>
        useEffect wywołuje się po wyrenderowaniu komponentu i DOM na stronie
      </p>
      <h3>przykład</h3>
      <p>
        {" "}
        mamy buttona który wyświetla tekst w położeniu 50px poniżej buttona:
      </p>
      <ol>
        <li>
          useEffect najpierw wyrenderuje tekst zaraz pod buttonem, następnie
          przeniesie go o 50px w dol
        </li>
        <li>useLayoutEffect wyrenderuje tekst od razu 50px pod buttonem</li>
      </ol>
      <h1>Zadanie 7</h1>
      <p>
        Jesli zmienna jest podana jako parametr drugi w useEffect to useEffect
        wykona się po zmianie zmiennej.
      </p>
      <p>najpierw wyrenderuje się komponent, następnie wykona useEffect</p>
    </>
  );
};

export default Task6_7;
