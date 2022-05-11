import React, { useState,useEffect } from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import Todolist from "./components/Todolist";
function App() {


//State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const[status,setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE WHEN THE APP STARTS
   useEffect(() => {
     getLocalTodos();
   }, []);
  //USE EFFECT
  useEffect(() => {
    filterHandler();
    }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
           setFilteredTodos(todos);
           break; 
        }
  };
 //Save local
 const saveLocalTodos = () => {
  
    localStorage.setItem("todos", JSON.stringify(todos));
  
 };
 const getLocalTodos = () => {
  if(localStorage.getItem("todos") ===null){
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
   let todoLocal = JSON.parse(localStorage.getItem("todos"));
   setTodos(todoLocal);
  }
 };

  return (
    <div className="App">
      <header>
      <h1>Rutuja's Todo List </h1>
    </header>
    <Form inputText = {inputText} 
    todos ={todos}
    setTodos={setTodos}
    setInputText={setInputText}
    setStatus={setStatus}
    
    />
    <Todolist filteredTodos={filteredTodos} 
    setTodos={setTodos}
    todos={todos} />
    </div>
  );
}

export default App;
