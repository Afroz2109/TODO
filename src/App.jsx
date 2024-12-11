import { useState, useEffect } from "react";
import "./App.css";
import InputContainer from "./Components/inputContainer";
import ItemsContainer from "./Components/itemsContainer";
import Count from "./Components/Count";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
  };

  

  const deleteTodo = (itemToBeDeleted) => {
    const filteredTodos = todos.filter((todo) => todo.id !== itemToBeDeleted.id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "40px",fontFamily:'monospace',backgroundColor:'whitesmoke',marginTop:'1%',color:'blue',fontSize:'2rem'}}>TO-DO APPLICATION</h1>
      <Count itemsCount={todos.length} />
      <InputContainer addNewTodo={addNewTodo} />
      <ItemsContainer todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
