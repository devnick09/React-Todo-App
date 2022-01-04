import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

// useEffect(() => {
//  getLocalTodos();
// }, []);

useEffect(() => {
 filterHandler();
}, [todos, status])

  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false ));  
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
  }
  
//Save Local
// function saveLocalTodos(){
//     localStorage.setItem("todos", JSON.stringify(todos));
// }
// function getLocalTodos(){
//   if(localStorage.getItem("todos") === null){
//     localStorage.setItem("todos", JSON.stringify([]));
// } else {
//  let TodoLocal = JSON.parse(localStorage.getItem('todos'));
//  setTodos(TodoLocal);
// }
// }

  return (
    <div className="App">
      <header>
            <h1>TODO's List</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
