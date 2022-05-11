import React, { useState } from "react";
//Import Components
import Todo from "./Todo";
const Todolist = ({todos, setTodos, filteredTodos}) => {
   
    return(
        <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo,key) => (
          <Todo setTodos={setTodos} 
          todos={todos}
          key={key} 
          todo={todo}
          text={todo.text}/>
        ))}
      </ul>
     </div>
    );
};
export default Todolist;