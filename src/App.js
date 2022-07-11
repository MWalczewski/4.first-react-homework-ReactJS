import logo from "./bmw-logo.svg";
import "./App.css";
import Menu from "./Menu";
import Image from "./Image";
import List from "./List";
import Sentence from "./Sentence";
import UnOrderedList from "./UnOrderedList";
import React, { useState, useEffect } from "react";
import SayHello from "./SayHello";
import InputText from "./UseState_4";
import IsNull from "./UseState_5";
import WordsList from "./UseState_6";
import ShoppingList from "./UseState_7";
import Submit from "./UseState_8";
import Car from "./Car";
import MessageList from "./Message";
import Effect from "./Effect";
import Task_1 from "./UseEffect_1_2";
import Task4 from "./UseEffect_4";
import Task5 from "./useEffect_5";
import Task6_7 from "./useEffect_6_7";
import Page from "./Stylowanie";

const myDetails = { firstName: "Maciej", lastName: "Walczewski", age: 30 };
const myHobbies = ["sport", "bike", "ski", "cooking", "travel"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To be or not to be, that's the question.</p>
        <p>02-tworzenie komponentow</p>
        <Image />
        <p>02, 03-nadawanie wlasciwosci komponentom</p>
        <Menu />
        <List />
        <Sentence personalData={myDetails} />
        <UnOrderedList hobbies={myHobbies} />
        <p>04-useState</p>
        <SayHello />
        <InputText />
        <IsNull />
        <WordsList />
        <ShoppingList />
        <Submit />
        <Effect />
        <Task_1 />
        <Task4 />
        <Task5 />
        <Task6_7 />
        <p>Zadanie ze stylowania</p>
        <Page />
      </header>
    </div>
  );
}

export default App;
