import React, { useState } from "react";
import styled from "styled-components";

const AddTodo = ({ onTodoAdd }) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
      style={{width:'300px',border:'1px solid blueviolet'}}
        placeholder="add schedule"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onTodoAdd(title);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;