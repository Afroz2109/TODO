import React, { useState } from "react";

export default function InputContainer({ addNewTodo }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <input
      style={{borderRadius:'8px',padding:'0.5rem',width:'25%',borderBottom:'1px solid lightpink'}}
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
      style={{marginLeft:'3%',borderRadius:'8px',padding:'0.4rem',backgroundColor:'blue',border:'1px solid blue',color:'white'}}
        onClick={() => {
          if (inputValue.trim() !== "") {
            addNewTodo(inputValue);
            setInputValue("");
          }
        }}
      >
        Add ToDo
      </button>

    </div>
  );
}
