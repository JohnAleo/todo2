import React, { useState } from "react";
import styled from "styled-components";
export default function TaskList({ todosData, onChangeTodo, onDeleteData }) {
  return (
    <div>
      {todosData.map((todo) => {
        return (
          <div key={todo.id}>
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteData} />
            {/* {value.title} */}
          </div>
        );
      })}
    </div>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEddit, setIsEddit] = useState(false);

  let todoContent;
  if (isEddit) {
    todoContent = (
      <Inputwrapper>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEddit(false)}>Save</button>
      </Inputwrapper>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEddit(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      {todoContent}
      <button onClick={() => onDelete(todo.id)}> Delete</button>
    </>
  );
}
const Inputwrapper=styled.div`
display:flex;`