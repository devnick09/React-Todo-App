import React from "react";

function Form({setInputText,todos,setTodos,inputText, setStatus}){

function inputTextHandler(event){
    setInputText(event.target.value);
    
}

function submitTodoHandler(e){
    e.preventDefault();
    setTodos([
        ...todos,{ text:inputText ,completed: false ,id: Math.random()*1000  }
    ]);
    setInputText("");
}

function statusHandler(e){
 setStatus(e.target.value);
}

    return(
        <form >
            <input 
              value={inputText} 
              onChange={inputTextHandler} 
              className="todo-input"
              type="text" 
            />
            <button onClick={submitTodoHandler} className="input-btn" type="submit">
                 <i className="fas fa-plus-square"></i>
           </button>
           <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
            </select>
           </div>
      </form>
    );
}

export default Form;

