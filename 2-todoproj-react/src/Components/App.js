//import React from 'react';
import React, { useState } from "react";
import Header from './Header'
import Home from './Pages/Home'
//import {reactLocalStorage} from 'reactjs-localstorage';


let defaultallTodos = [
  {
    id: 0,
    text: "asdf1"
  },
  {
    id: 1,
    text: "asdf1"
  },
  {
    id: 2,
    text: "asdf1"
  },
]


function App() {
  const [inputValue, setInputValue] = useState("");
  const [allTodos, setAllTodos] = useState(defaultallTodos);

  
  function setTodos(e) {
    const newtodo = {
      id: 3,
      text: inputValue,
    }
    setAllTodos([newtodo, ...allTodos])

    console.log(JSON.stringify(allTodos))
    console.log(inputValue)
  }
  return (
    <div id="app">
      <div class="container">
        <Header />
        <Home allTodos={allTodos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />

      </div>
    </div>
  );
}

export default App;
