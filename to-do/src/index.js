import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoIndex from './todo-vazifa/indextodo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <Todolist /> */}
  {/* <TaskApp /> */}
  <Routes>
    <Route path="/" element={<TodoIndex />} />
    
  </Routes>
</BrowserRouter>
);


