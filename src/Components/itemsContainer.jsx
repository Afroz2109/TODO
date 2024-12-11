import React from "react";

export default function ItemsContainer({ todos, deleteTodo }) {
  return (
    <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginLeft:'-5%',marginTop:'10px'}}>
      <ul>
        {todos.map((item, index) => {
          return (
            <li style={{color:'black'}} key={index}>
              {item.text} 
              <button
              style={{border:'none',borderRadius:'8px', backgroundColor:'red',padding:'0.3rem',marginLeft:'10px',color:'white'}} onClick={() => deleteTodo(item)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
