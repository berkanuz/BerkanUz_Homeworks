import React, { useState } from "react";
import Header from './Header'
import TodoList from "./TodoList";
import { reactLocalStorage } from 'reactjs-localstorage';
import uuid from 'react-uuid'
import InputBar from "./InputBar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [allTodos, setAllTodos] = useState(JSON.parse(reactLocalStorage.get('todos') ?? "[]"));

  function setTodos(e) {
    const newtodo = {
      id: uuid(),
      text: inputValue,
      createdDate: new Date()
    }

    let updatedAllTodoss = [newtodo, ...allTodos]
    reactLocalStorage.set('todos', JSON.stringify(updatedAllTodoss))
    setAllTodos(updatedAllTodoss)

    console.log(JSON.stringify(newtodo))
    console.log(inputValue)
  }
  function deleteAllItem() {
    reactLocalStorage.clear()
    setAllTodos([])
  }

  function deleteItem(id) {

    let updatedAllTodoss = allTodos.filter(item => item.id !== id)
    console.log(JSON.stringify(updatedAllTodoss))

    reactLocalStorage.set('todos', JSON.stringify(updatedAllTodoss))
    setAllTodos(updatedAllTodoss)
  }

  return (
    <div id="app">
      <div class="container">
        <Header deleteAllItem={deleteAllItem} />
        <InputBar setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
        <TodoList allTodos={allTodos} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
