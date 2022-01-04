import React from "react";

function Todo({todos, todo, setTodos}){
    function deleteHandler(){
       setTodos(todos.filter((el) => el.id !== todo.id));
    }; 
    function completeHandler(){
      setTodos(todos.map((el) =>{
        if(el.id === todo.id){
          return{
           ...el, completed: !el.completed
          }
        }
        return el ;
      }));
    }

    return(
        <div className="todo">
          <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
          <button onClick={completeHandler} className="done-btn"><i className="fas fa-check"></i></button>
          <button onClick={deleteHandler} className="del-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;